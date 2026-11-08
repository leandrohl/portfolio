import { useState } from "react";
import CeaImage from "../../assets/images/C&A.png";
import VrImage from "../../assets/images/VR.png";
import DegreeImage from "../../assets/images/degree-us.png";
import LuppiImage from "../../assets/images/Luppi.png";
import TressemeImage from "../../assets/images/tresseme.png";
import IeclbImage from "../../assets/images/IECLB.png";
import CcDImage from "../../assets/images/ccd.png";
import ProfileImage from "../../assets/images/image-profile.png";

type Language = "pt" | "en";

const copy = {
  pt: {
    nav: [
      "Sobre",
      "Experiência",
      "Projetos",
      "Especialidades",
      "Escrita",
      "Contato",
    ],
    eyebrow: "SOFTWARE ENGINEER / MOBILE DEVELOPMENT",
    heroTitle: "Construindo experiências móveis que importam.",
    heroText:
      "Especializado em React Native, TypeScript e arquitetura mobile escalável. Transformo desafios complexos em experiências digitais confiáveis.",
    explore: "Explorar meu trabalho",
    contact: "Entrar em contato",
    aboutKicker: "01 / SOBRE",
    aboutTitle: "Engenharia com clareza, produto com propósito.",
    aboutText:
      "Sou Software Engineer com cerca de cinco anos de experiência, focado em construir experiências mobile confiáveis e fáceis de evoluir. Trabalho entre React Native, TypeScript e ecossistemas nativos, conectando decisões técnicas a resultados de produto.",
    aboutText2:
      "Tenho experiência com arquitetura escalável, performance, qualidade de código e colaboração entre times. Quando necessário, também navego por Kotlin e Swift para entender o produto de ponta a ponta.",
    expKicker: "02 / EXPERIÊNCIA",
    expTitle: "Onde a engenharia encontra o contexto.",
    projectsKicker: "03 / PROJETOS",
    projectsTitle: "Trabalho selecionado",
    view: "Ver projeto",
    expertiseKicker: "04 / ESPECIALIDADES",
    expertiseTitle: "Ferramentas para transformar complexidade em produto.",
    writingKicker: "05 / ESCRITA",
    writingTitle: "Pensamento técnico, compartilhado.",
    article: "Princípios SOLID no Frontend",
    articleText:
      "Uma leitura prática sobre como aplicar princípios de design para criar interfaces mais sustentáveis.",
    read: "Ler artigo",
    contactKicker: "06 / CONTATO",
    contactTitle: "Vamos construir algo significativo.",
    contactText:
      "Tem um produto, desafio ou ideia em mente? Vamos conversar sobre como transformar isso em uma experiência que funciona.",
    available: "Disponível para boas conversas",
    footer: "Feito com intenção por Leandro Silva.",
  },
  en: {
    nav: ["About", "Experience", "Projects", "Expertise", "Writing", "Contact"],
    eyebrow: "SOFTWARE ENGINEER / MOBILE DEVELOPMENT",
    heroTitle: "Building mobile experiences that matter.",
    heroText:
      "Specialized in React Native, TypeScript, and scalable mobile architecture. Turning complex challenges into reliable digital experiences.",
    explore: "Explore my work",
    contact: "Get in touch",
    aboutKicker: "01 / ABOUT",
    aboutTitle: "Engineering with clarity, product with purpose.",
    aboutText:
      "I am a Software Engineer with around five years of experience, focused on building reliable and evolvable mobile experiences. I work across React Native, TypeScript, and native ecosystems, connecting technical decisions to product outcomes.",
    aboutText2:
      "My experience includes scalable architecture, performance, code quality, and cross-team collaboration. When needed, I also work with Kotlin and Swift to understand the product end to end.",
    expKicker: "02 / EXPERIENCE",
    expTitle: "Where engineering meets context.",
    projectsKicker: "03 / PROJECTS",
    projectsTitle: "Selected work",
    view: "View project",
    expertiseKicker: "04 / EXPERTISE",
    expertiseTitle: "Tools to turn complexity into product.",
    writingKicker: "05 / WRITING",
    writingTitle: "Technical thinking, shared.",
    article: "SOLID Principles in Frontend",
    articleText:
      "A practical read about applying design principles to build more sustainable interfaces.",
    read: "Read article",
    contactKicker: "06 / CONTACT",
    contactTitle: "Let’s build something meaningful.",
    contactText:
      "Have a product, challenge, or idea in mind? Let’s talk about turning it into an experience that works.",
    available: "Open to good conversations",
    footer: "Made with intention by Leandro Silva.",
  },
};

type Project = {
  title: string;
  category: string;
  image: string;
  text: string;
  appStoreUrl?: string;
  googlePlayUrl?: string;
  websiteUrl?: string;
};

const projects: Project[] = [
  {
    title: "C&A",
    category: "Mobile / Retail",
    image: CeaImage,
    text: "Aplicativo de varejo em larga escala, com foco em jornadas mobile e pagamentos.",
    appStoreUrl:
      "https://apps.apple.com/br/app/c-a-comprar-roupas/id1168148250",
    googlePlayUrl:
      "https://play.google.com/store/apps/details?id=br.com.cea.appb2c&hl=pt_BR",
  },
  {
    title: "VR",
    category: "Mobile / Fintech",
    image: VrImage,
    text: "Experiências de conta digital e crédito dentro de um SuperApp financeiro.",
    appStoreUrl: "https://apps.apple.com/br/app/superapp-vr/id667577139",
    googlePlayUrl:
      "https://play.google.com/store/apps/details?id=ws.hanzo.Vrrh&hl=pt_BR&pli=1",
  },
  {
    title: "Daily CCD",
    category: "Mobile / Community",
    image: CcDImage,
    text: "Aplicativo de cursos nas áreas de saúde, tais como terapia nutricional, distúrbios, intoxicações e muito mais.",
    appStoreUrl: "https://apps.apple.com/br/app/daily-ccd/id1512207951",
    googlePlayUrl:
      "https://play.google.com/store/apps/details?id=com.ccd.daily&hl=pt_BR",
  },
  {
    title: "IECLB",
    category: "Mobile / Community",
    image: IeclbImage,
    text: "Aplicativo para aproximar pessoas, conteúdo e informações da igreja.",
    appStoreUrl: "https://apps.apple.com/br/app/ieclb/id1565273790",
    googlePlayUrl:
      "https://play.google.com/store/apps/details?id=br.com.ieclb&hl=pt_BR",
  },
  {
    title: "Degree",
    category: "Web / Brand",
    image: DegreeImage,
    text: "Plataforma digital da marca Degree para o mercado norte-americano.",
    websiteUrl: "https://www.degreedeodorant.com/us/en/home.html",
  },
  {
    title: "Tresseme",
    category: "Web / Brand",
    image: TressemeImage,
    text: "Plataforma digital da marca Tresseme para o mercado do Reino Unido (UK).",
    websiteUrl: "https://www.tresemme.com/uk/home.html",
  },
  {
    title: "Luppi",
    category: "Mobile / Platform",
    image: LuppiImage,
    text: "Aplicativo para gestão de eventos e interação com a comunidade Luppi.",
  },
];

const experiences = [
  {
    company: "C&A Brasil",
    role: "Desenvolvedor Mobile Pleno",
    period: "Abr 2025 — presente",
    text: "Modernização do aplicativo de e-commerce, migrando experiências nativas para React Native e TypeScript.",
    tags: ["React Native", "TypeScript", "Payments"],
    highlights: [
      "Evolução da aplicação mobile",
      "Novo checkout de e-commerce",
      "Integrações de pagamento",
    ],
    metrics: [
      {
        value: "+0,50",
        label: "p.p. de conversão no checkout",
        note: "resultado de equipe em condições de teste",
      },
      {
        value: "+20%",
        label: "no ticket médio NuPay",
        note: "de R$ 150 para R$ 180",
      },
    ],
    architecture: ["Native Applications", "React Native + TypeScript"],
    challenge:
      "Unificar jornadas de compra e pagamentos em uma aplicação mobile escalável.",
    approach:
      "Evolução incremental da arquitetura, com foco em qualidade, manutenção e colaboração entre equipes.",
  },
  {
    company: "The Brooklyn Brothers",
    role: "Desenvolvedor Frontend Pleno",
    period: "Jun 2024 — Mar 2025",
    text: "Desenvolvimento de experiências digitais para marcas internacionais, do componente ao ciclo completo de software.",
    tags: ["React", "Next.js", "TypeScript"],
    highlights: [
      "Construção de interfaces digitais",
      "Componentização e manutenção",
      "Colaboração multidisciplinar",
    ],
  },
  {
    company: "MB Labs",
    role: "Desenvolvedor Mobile",
    period: "Nov 2022 — Jun 2024",
    text: "Construção de produtos financeiros para VR, incluindo conta digital, crédito, pagamentos via Pix e testes automatizados.",
    tags: ["React Native", "Jest", "Redux"],
    highlights: [
      "Conta digital e crédito",
      "Pagamentos via Pix",
      "Testes automatizados",
    ],
  },
  {
    company: "Marttech",
    role: "Desenvolvedor Frontend",
    period: "Jun 2021 — Nov 2022",
    text: "Desenvolvimento de aplicações web e mobile para operações de vendas, com integrações de mapas, relatórios e APIs.",
    tags: ["React", "React Native", "APIs"],
    highlights: [
      "Aplicações para operações de vendas",
      "Integrações com mapas e APIs",
      "Relatórios para o negócio",
    ],
  },
];

const expertise = {
  pt: {
    core: [
      ["React Native", "Desenvolvimento de aplicações mobile multiplataforma."],
      ["TypeScript", "Código tipado, sustentável e escalável."],
      [
        "Mobile Architecture",
        "Arquitetura de aplicações, modularidade e manutenção.",
      ],
      [
        "iOS & Android",
        "Desenvolvimento e integração com plataformas nativas.",
      ],
    ],
    supporting: [
      ["Frontend & Backend", ["React", "Next.js", "Node.js"]],
      ["Native Development", ["Kotlin", "Swift"]],
      [
        "Engineering Practices",
        ["Clean Architecture", "Testing", "CI/CD", "Code Review"],
      ],
    ],
  },
  en: {
    core: [
      ["React Native", "Cross-platform mobile application development."],
      ["TypeScript", "Typed, sustainable, and scalable code."],
      [
        "Mobile Architecture",
        "Application architecture, modularity, and maintenance.",
      ],
      ["iOS & Android", "Native platform development and integration."],
    ],
    supporting: [
      ["Frontend & Backend", ["React", "Next.js", "Node.js"]],
      ["Native Development", ["Kotlin", "Swift"]],
      [
        "Engineering Practices",
        ["Clean Architecture", "Testing", "CI/CD", "Code Review"],
      ],
    ],
  },
} as const;

export default function Portfolio() {
  const [lang, setLang] = useState<Language>("pt");
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedExperience, setExpandedExperience] = useState<number | null>(
    null,
  );
  const t = copy[lang];
  const navIds = [
    "about",
    "experience",
    "projects",
    "expertise",
    "writing",
    "contact",
  ];
  const switchLanguage = (next: Language) => {
    setLang(next);
    setMenuOpen(false);
  };

  return (
    <div className="portfolio-shell">
      <a className="skip-link" href="#main">
        Pular para o conteúdo
      </a>
      <header className="site-header">
        <a className="wordmark" href="#top">
          Leandro<span> Silva.</span>
        </a>
        <button
          className="menu-button"
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>
        <nav
          className={menuOpen ? "main-nav is-open" : "main-nav"}
          aria-label="Navegação principal"
        >
          {t.nav.map((label, i) => (
            <a
              key={label}
              href={`#${navIds[i]}`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <div className="language-toggle">
            <button
              className={lang === "pt" ? "active" : ""}
              onClick={() => switchLanguage("pt")}
            >
              PT
            </button>
            <span>/</span>
            <button
              className={lang === "en" ? "active" : ""}
              onClick={() => switchLanguage("en")}
            >
              EN
            </button>
          </div>
        </nav>
      </header>
      <main id="main">
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow">{t.eyebrow}</p>
            <h1>
              LEANDRO
              <br />
              <em>SILVA</em>
            </h1>
            <p className="hero-title">{t.heroTitle}</p>
            <p className="hero-text">{t.heroText}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                {t.explore} <span>↘</span>
              </a>
              <a className="text-link" href="#contact">
                {t.contact} <span>↘</span>
              </a>
            </div>
          </div>
          <div className="hero-mark" aria-hidden="true">
            <span>RN</span>
            <i />
          </div>
          <div className="scroll-note">
            SCROLL TO EXPLORE <span>↓</span>
          </div>
        </section>
        <section className="about section-wrap" id="about">
          <div className="section-label">
            <span>{t.aboutKicker}</span>
            <div className="rule" />
          </div>
          <div className="about-grid">
            <h2>{t.aboutTitle}</h2>
            <div className="about-body">
              <p>{t.aboutText}</p>
              <p>{t.aboutText2}</p>
              <div className="about-facts">
                <span>
                  <strong>05</strong> anos de experiência
                </span>
                <span>
                  <strong>02</strong> plataformas mobile
                </span>
              </div>
            </div>
            <div className="portrait">
              <img src={ProfileImage} alt="Leandro Silva" />
              <span>
                mobile engineer
                <br />
                based in Brazil
              </span>
            </div>
          </div>
        </section>
        <section
          className="experience section-wrap dark-section"
          id="experience"
        >
          <div className="section-label">
            <span>{t.expKicker}</span>
            <div className="rule" />
          </div>
          <h2>{t.expTitle}</h2>
          <div className="timeline">
            {experiences.map((item, index) => {
              const expanded = expandedExperience === index;
              const detailsId = `experience-details-${index}`;
              return (
                <article
                  className={`timeline-item ${index === 0 ? "is-featured" : ""} ${expanded ? "is-expanded" : ""}`}
                  key={item.company}
                >
                  <div className="timeline-meta">
                    <span className="timeline-index">0{index + 1}</span>
                    <span>{item.period}</span>
                  </div>
                  <div className="timeline-content">
                    <div className="experience-heading">
                      <div>
                        <h3>{item.company}</h3>
                        <p className="role">{item.role}</p>
                      </div>
                      <span className="experience-status">
                        {index === 0 ? "Em destaque" : "Experiência"}
                      </span>
                    </div>
                    <p className="experience-summary">{item.text}</p>
                    <div className="experience-highlights">
                      {item.highlights.map((highlight, highlightIndex) => (
                        <div key={highlight}>
                          <span>0{highlightIndex + 1}</span>
                          <p>{highlight}</p>
                        </div>
                      ))}
                    </div>
                    <div className="tags">
                      {item.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    <button
                      className="experience-toggle"
                      type="button"
                      aria-expanded={expanded}
                      aria-controls={detailsId}
                      onClick={() =>
                        setExpandedExperience(expanded ? null : index)
                      }
                    >
                      {expanded
                        ? "Recolher experiência"
                        : "Explorar experiência"}{" "}
                      <span>{expanded ? "↑" : "↘"}</span>
                    </button>
                    <div
                      className="experience-details"
                      id={detailsId}
                      hidden={!expanded}
                    >
                      {item.metrics && (
                        <div className="metrics-grid">
                          {item.metrics.map((metric) => (
                            <div className="metric-card" key={metric.label}>
                              <strong>{metric.value}</strong>
                              <span>{metric.label}</span>
                              <small>{metric.note}</small>
                            </div>
                          ))}
                        </div>
                      )}
                      {item.architecture && (
                        <div className="architecture">
                          <span className="details-kicker">
                            Architecture &amp; Engineering
                          </span>
                          <div className="architecture-flow">
                            {item.architecture.map((step, stepIndex) => (
                              <div key={step}>
                                <span>{step}</span>
                                {stepIndex < item.architecture!.length - 1 && (
                                  <b>→</b>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      {item.challenge && (
                        <div className="challenge-grid">
                          <div>
                            <span className="details-kicker">Challenge</span>
                            <p>{item.challenge}</p>
                          </div>
                          <div>
                            <span className="details-kicker">
                              Engineering Approach
                            </span>
                            <p>{item.approach}</p>
                          </div>
                        </div>
                      )}
                      <div className="technical-highlights">
                        <span className="details-kicker">
                          Technical Highlights
                        </span>
                        <div>
                          {item.highlights.map((highlight) => (
                            <p key={highlight}>↗ {highlight}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
        <section className="projects section-wrap" id="projects">
          <div className="section-label">
            <span>{t.projectsKicker}</span>
            <div className="rule" />
          </div>
          <div className="section-heading">
            <h2>{t.projectsTitle}</h2>
            <span>01 — 05</span>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <article
                className={`project-card ${index === 0 ? "featured" : ""}`}
                key={project.title}
              >
                <div className="project-image">
                  <img src={project.image} alt={`Projeto ${project.title}`} />
                </div>
                <div className="project-info">
                  <div>
                    <span className="project-category">{project.category}</span>
                    <h3>{project.title}</h3>
                    <p>{project.text}</p>
                    <div
                      className="project-links"
                      aria-label={`Links externos para ${project.title}`}
                    >
                      {project.appStoreUrl && (
                        <a
                          className="project-link"
                          href={project.appStoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} na App Store`}
                        >
                          <svg aria-hidden="true" viewBox="0 0 24 24">
                            <path d="M16.8 12.7c0-2.1 1.7-3.1 1.8-3.2-1-1.5-2.5-1.7-3.1-1.7-1.3-.1-2.5.8-3.1.8s-1.6-.8-2.7-.8c-1.4 0-2.8.8-3.5 2-.1.2-1.1 2 .2 4.3 1.2 2.1 2.4 4.3 4.2 4.2 1-.1 1.7-.7 2.6-.7s1.5.7 2.6.7c1.1 0 1.8-1.1 2.5-2.1.8-1.1 1.1-2.2 1.1-2.3-.1 0-2.1-.8-2.1-3.2ZM15 6.7c.5-.6.9-1.5.8-2.4-.8 0-1.8.5-2.3 1.1-.5.5-.9 1.4-.8 2.3.9.1 1.8-.4 2.3-1Z" />
                          </svg>
                          <span>App Store</span>
                          <span className="project-link-arrow">↗</span>
                        </a>
                      )}
                      {project.googlePlayUrl && (
                        <a
                          className="project-link"
                          href={project.googlePlayUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} no Google Play`}
                        >
                          <svg aria-hidden="true" viewBox="0 0 24 24">
                            <path d="m3.3 2.8 10.2 9.2-10.2 9.2c-.2-.3-.3-.7-.3-1.1V3.9c0-.4.1-.8.3-1.1Zm11.3 10.2 2.8 2.5-10.8 6.1 8-8.6Zm0-2L6.6 2.9l10.8 6.1-2.8 2Zm1.8 1 3.3 1.9c.8.5.8 1.6 0 2.1l-3.3 1.9-2.5-2.9 2.5-3Z" />
                          </svg>
                          <span>Google Play</span>
                          <span className="project-link-arrow">↗</span>
                        </a>
                      )}
                      {project.websiteUrl && (
                        <a
                          className="project-link"
                          href={project.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Visitar o website de ${project.title}`}
                        >
                          <span>Website</span>
                          <span className="project-link-arrow">↗</span>
                        </a>
                      )}
                    </div>
                  </div>
                  <span className="project-arrow" aria-hidden="true">
                    ↗
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="expertise section-wrap dark-section" id="expertise">
          <div className="section-label">
            <span>{t.expertiseKicker}</span>
            <div className="rule" />
          </div>
          <div className="expertise-intro">
            <h2>{t.expertiseTitle}</h2>
            <p>
              {lang === "pt"
                ? "Especialização em engenharia mobile, da arquitetura à entrega de produto."
                : "Specialized in mobile engineering, from architecture to product delivery."}
            </p>
          </div>
          <div className="core-expertise">
            <div className="expertise-subheading">
              <span>01</span>
              <h3>Core Expertise</h3>
            </div>
            <div className="core-grid">
              {expertise[lang].core.map(([title, description], index) => (
                <article className="core-card" key={title}>
                  <div className="core-card-top">
                    <span>0{index + 1}</span>
                    <i aria-hidden="true">↗</i>
                  </div>
                  <h4>{title}</h4>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="supporting-expertise">
            <div className="expertise-subheading">
              <span>02</span>
              <h3>Supporting Expertise</h3>
            </div>
            <div className="supporting-grid">
              {expertise[lang].supporting.map(([category, tags]) => (
                <div className="expertise-category" key={category}>
                  <h4>{category}</h4>
                  <div className="expertise-tags">
                    {tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="writing section-wrap" id="writing">
          <div className="section-label">
            <span>{t.writingKicker}</span>
            <div className="rule" />
          </div>
          <div className="writing-card">
            <div>
              <h2>{t.writingTitle}</h2>
              <span className="article-number">01 / ARTICLE</span>
            </div>
            <div className="article-copy">
              <h3>{t.article}</h3>
              <p>{t.articleText}</p>
              <a
                className="text-link"
                href="https://leandro-silva.medium.com/princ%C3%ADpios-solid-no-frontend-20d78d129e8f"
                target="_blank"
                rel="noreferrer"
              >
                {t.read} <span>↗</span>
              </a>
            </div>
          </div>
        </section>
        <section className="contact section-wrap" id="contact">
          <div className="contact-inner">
            <div className="section-label">
              <span>{t.contactKicker}</span>
              <div className="rule" />
            </div>
            <p className="available">
              <i /> {t.available}
            </p>
            <h2>{t.contactTitle}</h2>
            <p>{t.contactText}</p>
            <a
              className="contact-email"
              href="mailto:leandroesilva14@gmail.com"
            >
              leandroesilva14@gmail.com <span>↗</span>
            </a>
            <div className="socials">
              <a
                href="https://www.linkedin.com/in/leandro-silva1/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
              <a
                href="https://github.com/leandrohl"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <span className="wordmark">
          Leandro<span> Silva.</span>
        </span>
        <span>
          © {new Date().getFullYear()} · {t.footer}
        </span>
        <a href="#top">Voltar ao topo ↑</a>
      </footer>
    </div>
  );
}
