# French Learning Web App

프랑스어 학습을 위한 웹 애플리케이션입니다. 모바일과 데스크톱 모두에서 원활하게 작동합니다.

## 주요 기능

1. **시간 받아쓰기 (Time Dictation)**: 프랑스어 시간 표기를 듣고 24시간 형식(4자리 숫자)으로 작성
2. **단어 외워쓰기 (Vocabulary Memorization)**: 12개월, 4계절, 7요일을 기억해서 작성
3. **관사 채우기 (Article Fill-in)**: 문장에서 빈칸에 올바른 관사 채우기
4. **단어 받아쓰기 (Word Dictation)**: 문장을 듣고 빈칸에 단어를 작성

## 기술 스택

- React 19 + TypeScript
- Vite
- React i18next (다국어 지원: 영어, 한국어, 중국어(번체), 프랑스어)
- Web Speech API (음성 합성)

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

## 프로젝트 구조

```
src/
├── components/          # React 컴포넌트
│   ├── concepts/       # 학습 개념별 컴포넌트
│   ├── Home.tsx        # 메인 화면
│   ├── Settings.tsx    # 설정 화면
│   └── Statistics.tsx  # 통계 화면
├── context/            # React Context (설정 관리)
├── i18n/               # 다국어 설정 및 번역 파일
├── styles/             # 공통 CSS 스타일
├── types/              # TypeScript 타입 정의
└── utils/              # 유틸리티 함수
    ├── articleData.ts      # 관사 문제 데이터
    ├── inputUtils.ts       # 입력 관련 유틸리티
    ├── speechUtils.ts      # 음성 합성 유틸리티
    ├── textUtils.ts        # 텍스트 비교 유틸리티
    ├── timeUtils.ts        # 시간 생성 유틸리티
    ├── vocabularyData.ts   # 어휘 데이터
    └── wordDictationData.ts # 단어 받아쓰기 데이터
```

## 모바일 최적화

- 반응형 디자인 (모바일, 태블릿, 데스크톱 지원)
- 모바일 웹 앱 메타 태그 설정
- 최적화된 버튼 크기 (최소 44px)
- 작은 화면을 위한 레이아웃 조정

## 주요 기능 상세

### 설정 옵션
- **대소문자 검사**: 답안의 대소문자 구분 여부 설정
- **악센트 검사**: 답안의 악센트 구분 여부 설정
- **재생 반복 횟수**: 음성 재생 반복 횟수 설정 (1-10회)

### 통계 기능
- 전체 문제 수 및 정답률 표시
- 문제별 답안 이력 확인
- 정답/오답 구분 표시

## 브라우저 지원

- Chrome (최신 버전)
- Firefox (최신 버전)
- Safari (최신 버전)
- Edge (최신 버전)
- 모바일 브라우저 (iOS Safari, Chrome Mobile 등)

**참고**: Web Speech API를 사용하므로 해당 API를 지원하는 브라우저가 필요합니다.

## 개발 정보

- **코드 스타일**: TypeScript strict mode 사용
- **코드 품질**: 
  - 중복 코드 제거 및 공통 유틸리티 모듈화
  - 재사용 가능한 함수 추출 (`playAudioWithReplay`, `INPUT_FIELD_PROPS` 등)
  - 일관된 prop 타입 및 인터페이스 정의
- **다국어**: i18next를 통한 4개 언어 지원 (영어, 한국어, 중국어(번체), 프랑스어)

## 라이선스

MIT

