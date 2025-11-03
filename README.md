# French Learning Web App

프랑스어 학습을 위한 웹 애플리케이션입니다. 모바일과 데스크톱 모두에서 원활하게 작동합니다.

## 주요 기능

1. **시간 받아쓰기**: 프랑스어 시간 표기를 듣고 24시간 형식으로 작성
2. **단어 받아쓰기**: 12시간, 4시간, 7시간 단어 받아쓰기
3. **관사 채우기**: 문장에서 빈칸에 올바른 관사 채우기
4. **어휘 받아쓰기**: 듣기로 문장을 받아쓰기

## 기술 스택

- React + TypeScript
- Vite
- React i18next (다국어 지원)
- Framer Motion (애니메이션)
- React Swipeable (스와이프 제스처)

## 설치 및 실행

```bash
npm install
npm run dev
```

## 빌드

```bash
npm run build
```

빌드된 파일은 `dist` 폴더에 생성됩니다.

## 배포 가이드

### Vercel로 배포

1. [Vercel](https://vercel.com)에 가입 및 로그인
2. GitHub 저장소를 Vercel에 연결 (또는 Vercel CLI 사용)
3. 프로젝트를 import하면 자동으로 `vercel.json` 설정을 읽어서 배포됩니다

**Vercel CLI 사용 시:**
```bash
npm i -g vercel
vercel
```

### Netlify로 배포

1. [Netlify](https://www.netlify.com)에 가입 및 로그인
2. GitHub 저장소를 Netlify에 연결
3. 빌드 설정:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. 또는 `netlify.toml` 파일이 자동으로 인식됩니다

**Netlify CLI 사용 시:**
```bash
npm i -g netlify-cli
netlify deploy --prod
```

### GitHub Pages로 배포

1. `vite.config.ts`에 `base` 설정 추가 필요
2. GitHub Actions를 사용하여 자동 배포 설정

## 모바일 최적화

- 반응형 디자인 (모바일, 태블릿, 데스크톱 지원)
- 터치 제스처 지원 (스와이프)
- 모바일 웹 앱 메타 태그 설정
- 최적화된 버튼 크기 (최소 44px)
- 작은 화면을 위한 레이아웃 조정

## 브라우저 지원

- Chrome (최신 버전)
- Firefox (최신 버전)
- Safari (최신 버전)
- Edge (최신 버전)
- 모바일 브라우저 (iOS Safari, Chrome Mobile 등)

## 라이선스

MIT

