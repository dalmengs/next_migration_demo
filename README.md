# React ➜ Next.js Migration Overview

**프로젝트 목적**

* 기존 CRA(React Router 기반) 애플리케이션을 **파일 수정 없이** Next.js 위에 그대로 구동한다.
* 동작이 확인된 후, 페이지 단위로 SSR·SEO 최적화·RSC 등 Next 기능을 적용해 **점진적으로 마이그레이션**한다.

---

## 핵심 전략

1. **Zero‑Change Lift‑and‑Shift** : 레거시 `src/` 를 `src/legacy/` 로 옮기고, `/public/static` 자산을 동일 경로에 복사한다.
2. **SPA Bridge** : `src/app/(legacy)/[...legacy]/page.tsx` 하나로 모든 미전환 경로를 레거시 SPA에 위임한다.
3. **Selective Replacement** : 바꾸고 싶은 URL마다 `src/app/새경로/page.tsx` 를 추가해 레거시 라우트를 자연스럽게 대체한다.
4. **Clear Separation** : 레거시·신규 디렉터리를 구분해 코드 충돌과 의존성 꼬임을 예방한다.

---

## 단계별 흐름

| 단계                   | 목적                 | 주요 작업                                                               |
| -------------------- | ------------------ | ------------------------------------------------------------------- |
| **1. Next Shell 생성** | App Router 환경 준비   | `create-next-app --app --typescript --src-dir` 실행                   |
| **2. 레거시 코드 복사**     | 파일 변동 없이 이식        |  `code_migration.sh` 스크립트로 `src/`→`src/legacy/`, `public/static` 복사 |
| **3. 브리지 설정**        | 모든 경로를 레거시 SPA에 연결 | `(legacy)/[...legacy]/page.tsx` 클라이언트 전용 컴포넌트 작성                    |
| **4. 신규 페이지 작성**     | SSR · SEO 리팩터링 시작  | `/about`, `/login` 등을 `src/app/` 에 TSX로 작성                          |
| **5. 순차 개선**         | 성능·접근성 향상          | RSC, 캐싱, 메타 태그, Edge Functions 등 단계적 도입                             |

---

## 테스트 

* React에서 작성한 페이지와 Next에서 작성한 페이지가 분리되어 동작하는지 확인한다.
* Next에서 작성한 페이지가 높은 우선순위로 동작하는지 확인한다.
* React에서 작성한 페이지의 모든 컴포넌트와 정적 파일이 정확히 로드되는지 확인한다.

---
