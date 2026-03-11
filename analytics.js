/**
 * Google Analytics 4 (GA4)
 * https://analytics.google.com 에서 속성 생성 후 측정 ID를 아래에 넣으세요.
 */
(function () {
  var GA_MEASUREMENT_ID = "G-DHH8PXRBDE";

  if (!GA_MEASUREMENT_ID) return;

  var script = document.createElement("script");
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_MEASUREMENT_ID;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  window.gtag = gtag;

  script.onload = function () {
    gtag("js", new Date());
    gtag("config", GA_MEASUREMENT_ID, {
      send_page_view: true,
      anonymize_ip: true,
    });
  };
})();
