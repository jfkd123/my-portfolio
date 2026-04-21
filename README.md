# GitHub Pages Developer Portfolio

정적 HTML/CSS/JS로 만든 원페이지 개발자 포트폴리오 템플릿입니다. GitHub Pages 프로젝트 사이트 배포를 전제로 했고, 기본 언어는 한국어이며 한/영 토글을 지원합니다.

## Files

- `index.html`: 페이지 구조와 섹션 마크업
- `style.css`: 반응형 스타일과 레이아웃
- `script.js`: 번역 데이터, 프로젝트/경력/연락처 렌더링, 인터랙션
- `.github/workflows/deploy-pages.yml`: GitHub Actions 기반 Pages 배포 워크플로

## Customize

1. `script.js`의 `content` 객체에서 소개 문구를 수정합니다.
2. `projects`, `timeline`, `contacts` 배열을 자신의 정보로 교체합니다.
3. 필요하면 `title`과 메타 설명을 `index.html`에서 조정합니다.

## Deploy With GitHub Actions

1. GitHub 저장소의 `Settings > Pages`로 이동합니다.
2. `Source`를 `GitHub Actions`로 선택합니다.
3. `main` 브랜치에 push 하면 `.github/workflows/deploy-pages.yml`이 실행되어 사이트를 배포합니다.

정적 파일은 저장소 루트 기준으로 업로드되며, 현재 구조는 GitHub Pages 프로젝트 사이트에 바로 배포할 수 있게 맞춰져 있습니다.