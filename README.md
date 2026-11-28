# admin-web

관리자 웹 · 기관 등록, 출입 정책, 예약 및 출입증 관리 시스템

공통 이슈·브랜치·커밋·PR 규칙은 [협업 가이드](https://github.com/MoDuTa/.github/blob/main/CONTRIBUTING.md)를 참고하세요.

---

## 🛠 기술 스택

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Package Manager**: npm

---

## 📁 디렉토리 구조

```
admin-web/
├── public/                 # 정적 리소스 (로고, 아이콘 등)
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── globals.css     # 전역 스타일 및 Tailwind 테마 변수
│   │   ├── layout.tsx      # 루트 레이아웃
│   │   └── page.tsx        # 통합 관리 대시보드 (단일 페이지)
│   ├── components/
│   │   └── ui/             # shadcn/ui 기반 원자적 UI 컴포넌트
│   └── lib/                # 유틸리티 함수 (cn 등)
├── components.json         # shadcn/ui 설정
├── next.config.ts          # Next.js 설정
├── tsconfig.json           # TypeScript 설정
└── package.json
```

---

## 🚀 시작 가이드

### 1. 패키지 설치
```bash
npm install
```

### 2. 개발 서버 실행
```bash
npm run dev
```
브라우저에서 [http://localhost:3000](http://localhost:3000) 접속

### 3. 프로덕션 빌드 및 실행
```bash
npm run build
npm run start
```

### 4. 코드 린트 검사
```bash
npm run lint
```

---

## 🌿 브랜치 및 PR 규칙

저장소의 CI (`.github/workflows/pr-rules.yml`) 규칙을 준수합니다.

- **기본 브랜치**: `develop`
- **브랜치 형식**: `<type>/<wbs>-<feature-name>`
  - 예시: `feat/0.1.0-init-project`, `feat/2.3.1-qr-validation`
  - 허용 접두사: `feat`, `fix`, `infra`, `docs`, `test`, `refactor`, `chore`, `style`
- **PR 제목 형식**: `[<wbs>] <작업 내용 요약>`
  - 예시: `[0.1.0] Next.js 15, Tailwind CSS, shadcn/ui 기반 프로젝트 초기 셋업`

## 협업과 검증

[공통 협업 규칙](https://github.com/MoDuTa/.github/blob/main/CONTRIBUTING.md)을 따릅니다

PR 제목은 `feat: 대여 기능 추가`처럼 작성하며 WBS 번호와 작업 중 커밋 형식을 강제하지 않습니다
