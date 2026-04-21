const storageKey = "portfolio-language";

const content = {
  ko: {
    pageTitle: "김예시 | 개발자 포트폴리오",
    nav: {
      about: "소개",
      skills: "기술",
      projects: "프로젝트",
      experience: "경험",
      contact: "연락"
    },
    header: {
      eyebrow: "GitHub Pages Portfolio",
      title: "Frontend - Full Stack Developer"
    },
    language: {
      label: "Language",
      value: "EN"
    },
    hero: {
      eyebrow: "신뢰 가능한 제품 경험을 만드는 개발자",
      title: "문제를 구조화하고, 빠르게 구현하고, 보기 좋게 정리합니다.",
      summary:
        "사용자 흐름을 먼저 이해하고, 명확한 인터페이스와 안정적인 프론트엔드 구조로 제품 완성도를 끌어올리는 개발자를 소개합니다.",
      metric1Label: "주요 분야",
      metric1Value: "웹 프론트엔드",
      metric2Label: "협업 방식",
      metric2Value: "기획-디자인-개발 연결",
      metric3Label: "관심사",
      metric3Value: "사용성, 성능, 유지보수성",
      primaryAction: "프로젝트 보기",
      secondaryAction: "연락처 보기",
      cardTitle: "현재 포지셔닝",
      cardLine1: "제품 품질과 협업 효율을 함께 챙기는 개발자",
      cardLine2: "정적 사이트부터 SPA까지 빠르게 구축 가능한 실전형 역량",
      cardLine3: "핵심 정보가 잘 보이는 채용 친화형 포트폴리오 구성"
    },
    about: {
      eyebrow: "About",
      title: "제품의 맥락을 이해하고 구현하는 개발자입니다.",
      body:
        "저는 단순히 화면을 만드는 데서 그치지 않고, 사용자가 어떤 목표를 가지고 서비스를 이용하는지부터 파악합니다. 그 위에 설계 의도를 해치지 않는 UI, 명확한 컴포넌트 구조, 이후 확장 가능한 프론트엔드 기반을 쌓는 일을 좋아합니다.",
      focusLabel: "집중하는 영역",
      focusValue: "UI 구현, 정보 구조화, DX 개선",
      workflowLabel: "선호하는 작업 방식",
      workflowValue: "짧은 반복 주기, 빠른 검증, 명확한 문서화",
      goalLabel: "현재 목표",
      goalValue: "완성도 높은 제품 경험을 만드는 팀에 합류"
    },
    skills: {
      eyebrow: "Skills",
      title: "바로 기여할 수 있는 기술 조합",
      summary: "실무에서 자주 함께 쓰이는 기술들을 중심으로 정리했습니다."
    },
    projects: {
      eyebrow: "Projects",
      title: "문제 해결 방식이 드러나는 프로젝트",
      summary: "역할, 기술 스택, 핵심 기여를 빠르게 읽을 수 있도록 카드형으로 구성했습니다.",
      demo: "Demo",
      repo: "Repo",
      highlightsLabel: "핵심 기여"
    },
    experience: {
      eyebrow: "Experience",
      title: "성장 흐름이 보이는 경험",
      summary: "실무, 협업, 학습 경험을 시간 흐름에 맞춰 요약했습니다."
    },
    contact: {
      eyebrow: "Contact",
      title: "함께 일할 기회를 기다리고 있습니다.",
      summary: "프로젝트 제안, 인터뷰, 협업 문의는 아래 채널로 편하게 연락 주세요.",
      body:
        "현재 이 포트폴리오는 GitHub Pages에 배포 가능한 정적 구조로 설계되어 있어 빠른 업데이트와 유지보수가 쉽습니다. 실제 지원용으로 사용할 때는 아래 링크만 교체하면 됩니다."
    },
    footer: {
      copy: "(c) 2026 Your Name. GitHub Pages에 바로 배포할 수 있도록 만든 정적 포트폴리오 템플릿입니다."
    }
  },
  en: {
    pageTitle: "Your Name | Developer Portfolio",
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact"
    },
    header: {
      eyebrow: "GitHub Pages Portfolio",
      title: "Frontend - Full Stack Developer"
    },
    language: {
      label: "Language",
      value: "KO"
    },
    hero: {
      eyebrow: "A developer who ships reliable product experiences",
      title: "I structure problems, build quickly, and present the work clearly.",
      summary:
        "This portfolio introduces a developer who starts from user goals, then raises product quality through clear interfaces and maintainable frontend architecture.",
      metric1Label: "Core area",
      metric1Value: "Web Frontend",
      metric2Label: "Collaboration",
      metric2Value: "Bridging product, design, and engineering",
      metric3Label: "Focus",
      metric3Value: "Usability, performance, maintainability",
      primaryAction: "View projects",
      secondaryAction: "See contact",
      cardTitle: "Current positioning",
      cardLine1: "A developer who balances product quality with team velocity",
      cardLine2: "Practical implementation skills from static sites to SPAs",
      cardLine3: "A hiring-friendly portfolio structure with clear signal"
    },
    about: {
      eyebrow: "About",
      title: "I build interfaces with product context in mind.",
      body:
        "I do more than assemble screens. I start by understanding the user's goal, then build UI that respects design intent, keeps the component model clear, and leaves room for future scale.",
      focusLabel: "Focus area",
      focusValue: "UI implementation, information design, developer experience",
      workflowLabel: "Preferred workflow",
      workflowValue: "Short iteration cycles, fast validation, clear documentation",
      goalLabel: "Current goal",
      goalValue: "Joining a team that cares deeply about polished product experience"
    },
    skills: {
      eyebrow: "Skills",
      title: "A stack that can contribute right away",
      summary: "Grouped around technologies that often work together in real product teams."
    },
    projects: {
      eyebrow: "Projects",
      title: "Projects that show how I solve problems",
      summary: "Each card is structured for quick reading: role, stack, and meaningful outcomes.",
      demo: "Demo",
      repo: "Repo",
      highlightsLabel: "Key contributions"
    },
    experience: {
      eyebrow: "Experience",
      title: "Experience that shows momentum",
      summary: "A concise timeline of work, collaboration, and learning."
    },
    contact: {
      eyebrow: "Contact",
      title: "I would love to connect about your team or product.",
      summary: "For roles, collaborations, or project conversations, feel free to reach out through the links below.",
      body:
        "This portfolio is intentionally built as a GitHub Pages-ready static site, so updating content and redeploying stays simple. For real usage, replace the sample links below with your own."
    },
    footer: {
      copy: "(c) 2026 Your Name. A static portfolio template designed for fast GitHub Pages deployment."
    }
  }
};

const skillGroups = [
  {
    title: { ko: "Frontend", en: "Frontend" },
    summary: {
      ko: "인터랙션과 반응형 레이아웃을 안정적으로 구현하는 데 사용하는 기술입니다.",
      en: "Technologies I use to build reliable interfaces, interactions, and responsive layouts."
    },
    tags: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Vite"]
  },
  {
    title: { ko: "Product Engineering", en: "Product Engineering" },
    summary: {
      ko: "기획 의도를 구현으로 연결하고 품질을 높이는 데 필요한 도구들입니다.",
      en: "Tools that help turn product intent into shipped experiences with strong quality."
    },
    tags: ["REST API", "State Management", "Accessibility", "Performance", "Design Systems"]
  },
  {
    title: { ko: "Collaboration", en: "Collaboration" },
    summary: {
      ko: "팀 커뮤니케이션과 배포 흐름을 원활하게 만드는 협업 기반입니다.",
      en: "A collaboration toolset for smoother teamwork, reviews, and shipping."
    },
    tags: ["GitHub", "Figma", "Notion", "Linear", "GitHub Pages", "CI/CD"]
  }
];

const projects = [
  {
    title: "LaunchPad",
    subtitle: {
      ko: "채용 공고 탐색 경험을 재설계한 프론트엔드 프로젝트",
      en: "A frontend project that redesigned the job discovery experience"
    },
    description: {
      ko: "복잡한 탐색 흐름을 필터 중심 인터페이스로 재정리해 사용자가 더 빠르게 공고를 비교할 수 있게 만들었습니다.",
      en: "I reorganized a cluttered exploration flow into a filter-driven interface so users could compare roles much faster."
    },
    techStack: ["React", "TypeScript", "CSS Modules", "REST API"],
    role: {
      ko: "프론트엔드 개발",
      en: "Frontend Developer"
    },
    highlights: {
      ko: [
        "검색, 필터, 정렬 상태를 일관되게 관리하는 UI 구조 설계",
        "카드 정보 밀도를 조정해 한 화면에서 더 많은 채용 정보를 읽을 수 있도록 개선",
        "반응형 레이아웃 최적화로 모바일 이탈률 감소에 기여"
      ],
      en: [
        "Designed a UI structure that kept search, filter, and sort state consistent",
        "Improved card information density so more job data was readable on one screen",
        "Contributed to lower mobile drop-off with a stronger responsive layout"
      ]
    },
    demoUrl: "https://example.com/demo-1",
    repoUrl: "https://github.com/example/launchpad"
  },
  {
    title: "Studio Flow",
    subtitle: {
      ko: "콘텐츠 운영팀을 위한 내부 대시보드 구축",
      en: "An internal dashboard for a content operations team"
    },
    description: {
      ko: "업무 상태를 빠르게 파악할 수 있는 대시보드를 설계해 운영팀의 반복 커뮤니케이션 비용을 줄였습니다.",
      en: "Built a dashboard that reduced repetitive communication overhead by making team status visible at a glance."
    },
    techStack: ["JavaScript", "Chart.js", "Node.js", "Express"],
    role: {
      ko: "풀스택 개발",
      en: "Full Stack Developer"
    },
    highlights: {
      ko: [
        "지표 요약, 상세 테이블, 상태 업데이트 흐름을 한 화면으로 통합",
        "백엔드 API 응답 구조를 단순화해 프론트엔드 렌더링 로직을 줄임",
        "운영팀 인터뷰를 기반으로 우선순위 높은 기능부터 점진적으로 배포"
      ],
      en: [
        "Unified metric summaries, detail tables, and status updates into one workspace",
        "Simplified backend responses to reduce frontend rendering complexity",
        "Rolled out features incrementally based on interviews with the operations team"
      ]
    },
    demoUrl: "https://example.com/demo-2",
    repoUrl: "https://github.com/example/studio-flow"
  },
  {
    title: "Portfolio OS",
    subtitle: {
      ko: "개인 브랜딩과 유지보수를 함께 고려한 정적 사이트 시스템",
      en: "A static site system designed for both personal branding and maintainability"
    },
    description: {
      ko: "프로젝트 데이터와 텍스트를 구조화해, 내용만 바꾸면 새로운 포트폴리오를 빠르게 배포할 수 있는 템플릿으로 만들었습니다.",
      en: "Structured content and project data so a new portfolio could be shipped quickly by swapping only the content."
    },
    techStack: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    role: {
      ko: "기획 - 디자인 - 개발",
      en: "Planning - Design - Development"
    },
    highlights: {
      ko: [
        "한/영 토글과 카드 데이터 렌더링 구조를 중앙 관리 방식으로 설계",
        "GitHub Pages 프로젝트 사이트에 맞는 상대경로 기반 정적 구조 적용",
        "시각적 개성과 채용 친화성을 동시에 고려한 정보 계층 설계"
      ],
      en: [
        "Built bilingual toggling and card rendering around a single content source",
        "Used a relative-path static structure optimized for GitHub Pages project sites",
        "Designed information hierarchy to balance visual personality with hiring clarity"
      ]
    },
    demoUrl: "https://example.com/demo-3",
    repoUrl: "https://github.com/example/portfolio-os"
  }
];

const timeline = [
  {
    period: "2025 - Present",
    title: {
      ko: "프론트엔드 중심 개인 프로젝트 확장",
      en: "Expanding frontend-focused personal projects"
    },
    organization: {
      ko: "Independent Builder",
      en: "Independent Builder"
    },
    points: {
      ko: [
        "정적 사이트, SPA, 대시보드 등 다양한 형식의 웹 프로젝트를 직접 설계하고 구현",
        "사용자 흐름, 화면 밀도, 프로젝트 소개 방식까지 포함한 포트폴리오 실험 진행"
      ],
      en: [
        "Designed and built web projects across static sites, SPAs, and dashboards",
        "Ran portfolio experiments around user flow, information density, and presentation"
      ]
    }
  },
  {
    period: "2023 - 2025",
    title: {
      ko: "협업 중심 제품 개발 경험 축적",
      en: "Building collaborative product development experience"
    },
    organization: {
      ko: "Team Projects / Freelance",
      en: "Team Projects / Freelance"
    },
    points: {
      ko: [
        "디자이너와 협업하며 구현 정확도와 일정 현실성을 함께 고려한 개발 진행",
        "빠른 프로토타이핑과 반복 개선으로 요구사항 변화에 유연하게 대응"
      ],
      en: [
        "Worked closely with designers to balance implementation fidelity and delivery reality",
        "Used fast prototyping and iteration to adapt to shifting requirements"
      ]
    }
  }
];

const contacts = [
  {
    label: "Email",
    value: "you@example.com",
    href: "mailto:you@example.com"
  },
  {
    label: "GitHub",
    value: "github.com/yourname",
    href: "https://github.com/yourname"
  },
  {
    label: "Blog",
    value: "yourblog.com",
    href: "https://yourblog.com"
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/yourname",
    href: "https://linkedin.com/in/yourname"
  }
];

const pathLookup = (obj, path) =>
  path.split(".").reduce((acc, key) => (acc && key in acc ? acc[key] : ""), obj);

const elements = {
  root: document.documentElement,
  title: document.querySelector("title"),
  languageButton: document.querySelector(".language-toggle"),
  languageValue: document.querySelector("[data-language-value]"),
  translatables: document.querySelectorAll("[data-i18n]"),
  skillGroups: document.querySelector("[data-skill-groups]"),
  projectGrid: document.querySelector("[data-project-grid]"),
  timeline: document.querySelector("[data-timeline]"),
  contactLinks: document.querySelector("[data-contact-links]"),
  navLinks: document.querySelectorAll(".site-nav a"),
  sections: document.querySelectorAll("main .section")
};

let currentLanguage = localStorage.getItem(storageKey) || "ko";
if (!["ko", "en"].includes(currentLanguage)) {
  currentLanguage = "ko";
}

function applyTranslations(language) {
  const strings = content[language];
  elements.root.lang = language;
  elements.title.textContent = strings.pageTitle;
  elements.translatables.forEach((node) => {
    const value = pathLookup(strings, node.dataset.i18n);
    node.textContent = value;
  });
  elements.languageValue.textContent = strings.language.value;
}

function renderSkills(language) {
  elements.skillGroups.innerHTML = skillGroups
    .map(
      (group) => `
        <article class="skill-group">
          <h3>${group.title[language]}</h3>
          <p>${group.summary[language]}</p>
          <div class="skill-tag-list">
            ${group.tags.map((tag) => `<span class="skill-tag">${tag}</span>`).join("")}
          </div>
        </article>
      `
    )
    .join("");
}

function renderProjects(language) {
  elements.projectGrid.innerHTML = projects
    .map(
      (project) => `
        <article class="project-card">
          <div class="project-card__header">
            <div>
              <p class="project-card__meta">${project.role[language]}</p>
              <h3>${project.title}</h3>
              <p class="project-card__subtitle">${project.subtitle[language]}</p>
            </div>
          </div>
          <p class="project-card__body">${project.description[language]}</p>
          <div class="project-card__tags">
            ${project.techStack.map((tag) => `<span class="project-card__tag">${tag}</span>`).join("")}
          </div>
          <div>
            <p class="project-card__meta">${content[language].projects.highlightsLabel}</p>
            <ul class="project-card__highlights">
              ${project.highlights[language].map((item) => `<li>${item}</li>`).join("")}
            </ul>
          </div>
          <div class="project-card__links">
            <a class="project-card__link" href="${project.demoUrl}" target="_blank" rel="noreferrer">${content[language].projects.demo}</a>
            <a class="project-card__link" href="${project.repoUrl}" target="_blank" rel="noreferrer">${content[language].projects.repo}</a>
          </div>
        </article>
      `
    )
    .join("");
}

function renderTimeline(language) {
  elements.timeline.innerHTML = timeline
    .map(
      (item) => `
        <article class="timeline-card">
          <span class="timeline-card__period">${item.period}</span>
          <h3>${item.title[language]}</h3>
          <h4>${item.organization[language]}</h4>
          <ul>
            ${item.points[language].map((point) => `<li>${point}</li>`).join("")}
          </ul>
        </article>
      `
    )
    .join("");
}

function renderContacts() {
  elements.contactLinks.innerHTML = contacts
    .map(
      (item) => `
        <a class="contact-link" href="${item.href}" target="_blank" rel="noreferrer">
          <span>
            <strong>${item.value}</strong>
            <span class="contact-link__label">${item.label}</span>
          </span>
        </a>
      `
    )
    .join("");
}

function render(language) {
  applyTranslations(language);
  renderSkills(language);
  renderProjects(language);
  renderTimeline(language);
  renderContacts();
}

function setLanguage(language) {
  currentLanguage = language;
  localStorage.setItem(storageKey, language);
  render(language);
}

function setupLanguageToggle() {
  elements.languageButton.addEventListener("click", () => {
    const nextLanguage = currentLanguage === "ko" ? "en" : "ko";
    setLanguage(nextLanguage);
  });
}

function setupRevealObserver() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    {
      threshold: 0.2
    }
  );

  document.querySelectorAll(".reveal").forEach((section) => observer.observe(section));
}

function setupSectionSpy() {
  const observer = new IntersectionObserver(
    (entries) => {
      const visibleEntries = entries.filter((entry) => entry.isIntersecting);
      if (!visibleEntries.length) {
        return;
      }

      const activeId = visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0].target.id;
      elements.navLinks.forEach((link) => {
        link.classList.toggle("is-active", link.dataset.nav === activeId);
      });
    },
    {
      rootMargin: "-30% 0px -50% 0px",
      threshold: [0.15, 0.35, 0.6]
    }
  );

  elements.sections.forEach((section) => observer.observe(section));
}

render(currentLanguage);
setupLanguageToggle();
setupRevealObserver();
setupSectionSpy();