# 방문자 수 API 설정 (GA4 → 상단 표시)

상단 "오늘 / 총 방문" 숫자를 **Google Analytics 4(GA4)** 데이터로 보여주려면 아래 설정이 필요합니다.

---

## 1. GA4 속성 ID 확인

1. [Google Analytics](https://analytics.google.com) → **관리** → **속성 설정**
2. **속성 ID** (숫자만, 예: `123456789`) 복사

---

## 2. 서비스 계정 만들기 (Google Cloud)

1. [Google Cloud Console](https://console.cloud.google.com) 접속
2. 프로젝트 선택 (또는 새로 만들기)
3. **API 및 서비스** → **사용자 인증 정보** → **사용자 인증 정보 만들기** → **서비스 계정**
4. 이름 입력 후 만들기 → **역할**은 건너뛰어도 됨
5. 만든 서비스 계정 클릭 → **키** 탭 → **키 추가** → **JSON** → 만들기  
   → JSON 파일이 다운로드됨

---

## 3. GA4에서 서비스 계정에 권한 부여

1. GA4 **관리** → **속성** → **속성 액세스 관리**
2. **+** → **사용자 추가**
3. 서비스 계정 이메일(JSON의 `client_email`) 입력
4. 역할: **뷰어** 선택 → 저장

---

## 4. Google Analytics Data API 켜기

1. [Google Cloud Console](https://console.cloud.google.com) → **API 및 서비스** → **라이브러리**
2. "**Google Analytics Data API**" 검색 → **사용** 클릭

---

## 5. Vercel 배포 및 환경 변수

1. [Vercel](https://vercel.com)에서 이 저장소 연결 후 배포
2. 프로젝트 → **Settings** → **Environment Variables** 에서 추가:

| 이름 | 값 |
|------|-----|
| `GA4_PROPERTY_ID` | GA4 속성 ID (숫자만, 예: `123456789`) |
| `GA_SERVICE_ACCOUNT_JSON` | 서비스 계정 JSON **전체 내용**을 한 줄 문자열로 붙여넣기 |

- JSON은 한 줄로 만들기: `{"type":"service_account","project_id":"...", ...}`  
  (줄바꿈 없이, 따옴표 이스케이프만 유지)

3. **Redeploy** 한 번 실행

---

## 6. 사이트가 Vercel이 아닐 때 (예: GitHub Pages)

- **옵션 A:** 사이트도 Vercel로 배포하면 `/api/visitors`가 같은 도메인에서 동작 → 추가 설정 없음.
- **옵션 B:** 사이트는 GitHub Pages, API만 Vercel에 배포한 경우  
  - Vercel 배포 후 나오는 URL(예: `https://multishop-guide-xxxx.vercel.app`)을 복사한 뒤,  
  - 프로젝트 루트의 **`visitor-api-config.js`** 파일을 열어 `window.VISITOR_API_BASE`에 넣습니다.

```javascript
window.VISITOR_API_BASE = "https://당신의프로젝트.vercel.app";
```

  - 저장 후 push하면 모바일/PC 모두 같은(서버) 숫자가 표시됩니다.

---

## 동작 요약

- 방문자가 페이지를 열면 **analytics.js**가 GA4로 히트 전송 (기존처럼).
- 상단 바는 **먼저 localStorage 값**으로 표시한 뒤, **`/api/visitors`**를 호출해 **GA4 집계 값**으로 갱신합니다.
- API가 없거나 실패하면 localStorage 숫자가 그대로 보입니다.
