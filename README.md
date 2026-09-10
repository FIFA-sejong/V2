# FIFA LAB 홈페이지

세종대학교 인공지능데이터사이언스학과 FIFA LAB (FinTech Innovation & Forecasting Analytics Lab) 홈페이지입니다.
순수 HTML/CSS/JS로 제작되어 별도 빌드 과정 없이 바로 GitHub Pages에 올릴 수 있습니다.

## 폴더 구조

```
fifa-lab-site/
├── index.html          # 홈
├── team.html            # 구성원
├── publications.html    # 논문
├── activities.html       # 세미나 & 소식
├── contact.html          # 오시는 길
├── css/style.css         # 공용 스타일
└── js/main.js             # 모바일 메뉴 등 공용 스크립트
```

## GitHub Pages로 배포하는 방법

### 1) 새 리포지토리 만들기
GitHub에서 새 리포지토리를 만듭니다. 리포지토리 이름을 `<본인아이디>.github.io` 로 하면
`https://<본인아이디>.github.io` 주소로 바로 접속되고, 다른 이름(예: `fifa-lab`)으로 만들면
`https://<본인아이디>.github.io/fifa-lab` 경로로 접속됩니다.

### 2) 파일 업로드
- 이 폴더(`fifa-lab-site`) 안의 모든 파일/폴더를 리포지토리 루트에 그대로 올립니다.
- GitHub 웹에서 "Add file → Upload files"로 드래그해서 올려도 되고, git으로 push해도 됩니다.

```bash
git init
git add .
git commit -m "Initial commit: FIFA LAB website"
git branch -M main
git remote add origin https://github.com/<본인아이디>/<리포지토리이름>.git
git push -u origin main
```

### 3) GitHub Pages 활성화
1. 리포지토리 페이지에서 **Settings → Pages**로 이동
2. **Build and deployment → Source**를 `Deploy from a branch`로 설정
3. **Branch**를 `main` / `(root)`로 선택 후 저장
4. 1~2분 후 안내되는 주소로 접속하면 사이트가 보입니다.

## 나중에 내용 수정하기

각 페이지는 일반 HTML 파일이라 메모장/VS Code로 열어 텍스트만 바꾸면 됩니다.
- 논문 추가: `publications.html`에서 해당 연도의 `<div class="pub-item">` 블록을 복사해 새 항목 추가
- 구성원 추가: `team.html`에서 `<div class="member-card">` 블록 복사해 추가
- 색상/폰트: `css/style.css` 상단 `:root { ... }` 안의 색상 값만 바꾸면 전체 사이트에 반영됩니다.

## 확인이 필요한 내용

기존 Google Sites 홈페이지에서 가져온 내용 중 아래 항목은 정확한 정보가 부족해 대략적으로만 채워두었습니다.
사실과 다르면 알려주시면 바로 수정하겠습니다.

- `activities.html`의 랩 활동(졸업식, 교류 활동) 정확한 날짜/사진
- `team.html` 구성원 목록이 최신 상태인지 (예: 로보틱스 연구를 하는 학생 등 추가 인원 여부)
- 세 번째 연구 축(Physical AI & Intelligent Systems)의 세부 설명

## 2026-09 디자인 수정

- 홈 제목을 FIFA LAB과 영문 풀네임으로 분리했습니다.
- 소개 영역의 연락처는 하단 및 Contact 페이지에서 확인할 수 있습니다.
- Research 메뉴는 홈의 연구 분야 섹션으로 이동합니다.
- 전체 페이지의 메뉴, 색상, 버튼을 통일했습니다.
- 화면 폭에 따라 이미지·연구 분야·소식의 배치를 조정합니다.
- 모바일 메뉴에 열림 상태 안내, Escape 닫기, 외부 클릭 닫기를 추가했습니다.
- 기존 구성원·논문·활동 정보는 유지했습니다.

### 적용 방법
압축을 푼 뒤 V2-main 폴더 **안의 내용**을 기존 저장소의 같은 위치에 덮어쓰세요.
별도 설치나 빌드가 필요하지 않습니다. index.html을 브라우저에서 열어 확인할 수 있습니다.

### 검증 범위
5개 HTML 페이지의 내부 파일·앵커 링크 및 JavaScript 문법 검사를 통과했습니다.
모바일 반응형 스타일은 반영했으나, 작업 환경의 브라우저 미지원으로 실제 화면 렌더링은 확인하지 못했습니다.

## 디자인 재수정

첫 화면의 제목과 풀네임 간격을 압축하고, 그래프의 불투명도를 복원했습니다.
네이비 배경에 은은한 블루 그라데이션을 더하고, 둥근 버튼과 연구 분야 카드를 복원했습니다.
상단 소개 영역 아래의 소속·스크롤 안내 줄을 없애 여백을 줄였습니다.
