/**
 * GA4 방문자 수 API (Vercel Serverless)
 * 환경 변수: GA4_PROPERTY_ID (숫자), GA_SERVICE_ACCOUNT_JSON (서비스 계정 JSON 문자열)
 */
const { BetaAnalyticsDataClient } = require("@google-analytics/data");

function corsHeaders(origin) {
  return {
    "Access-Control-Allow-Origin": origin || "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Cache-Control": "public, s-maxage=60, stale-while-revalidate=120",
  };
}

module.exports = async function handler(req, res) {
  const origin = req.headers.origin || "";
  res.setHeader("Access-Control-Allow-Origin", origin || "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Cache-Control", "public, s-maxage=60, stale-while-revalidate=120");

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const propertyId = process.env.GA4_PROPERTY_ID;
  const credsJson = process.env.GA_SERVICE_ACCOUNT_JSON;

  if (!propertyId || !credsJson) {
    return res.status(503).json({
      error: "Visitor API not configured",
      today: 0,
      total: 0,
    });
  }

  let credentials;
  try {
    credentials = JSON.parse(credsJson);
  } catch (e) {
    return res.status(500).json({ error: "Invalid GA_SERVICE_ACCOUNT_JSON" });
  }

  try {
    const analyticsDataClient = new BetaAnalyticsDataClient({
      credentials: {
        client_email: credentials.client_email,
        private_key: (credentials.private_key || "").replace(/\\n/g, "\n"),
      },
    });

    const property = "properties/" + propertyId.replace(/^properties\/?/, "");

    const [response] = await analyticsDataClient.runReport({
      property,
      dateRanges: [
        { startDate: "today", endDate: "today" },
        { startDate: "2020-01-01", endDate: "today" },
      ],
      dimensions: [{ name: "country" }],
      metrics: [{ name: "totalUsers" }],
    });

    let today = 0;
    let total = 0;

    if (response.rows && response.rows.length > 0) {
      response.rows.forEach(function (row) {
        if (row.metricValues && row.metricValues[0]) today += parseInt(row.metricValues[0].value || "0", 10);
        if (row.metricValues && row.metricValues[1]) total += parseInt(row.metricValues[1].value || "0", 10);
      });
    }

    return res.status(200).json({ today, total });
  } catch (err) {
    console.error("GA4 runReport error:", err.message);
    return res.status(500).json({
      error: "Analytics error",
      today: 0,
      total: 0,
    });
  }
};
