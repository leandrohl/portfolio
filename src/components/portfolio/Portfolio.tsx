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
      "Especializado em arquitetura mobile escalável. Transformo desafios complexos em experiências digitais confiáveis.",
    explore: "Explorar meu trabalho",
    contact: "Entrar em contato",
    aboutKicker: "01 / SOBRE",
    aboutTitle: "Engenharia com clareza, produto com propósito.",
    aboutText:
      "Sou Software Engineer com cerca de seis anos de experiência, focado em construir experiências mobile confiáveis e fáceis de evoluir. Trabalho com React Native, TypeScript, Kotlin e Swift, para entender o produto de ponta a ponta, conectando decisões técnicas a resultados de produto.",
    aboutText2:
      "Tenho experiência com arquitetura escalável, performance, qualidade de código e colaboração entre times.",
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
      "Specialized in scalable mobile architecture. Turning complex challenges into reliable digital experiences.",
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

const projects = [
  {
    title: "C&A",
    category: "Mobile / Retail",
    image: CeaImage,
    text: "Aplicativo de varejo em larga escala, com foco em jornadas mobile e pagamentos.",
    link: "https://apps.apple.com/br/app/c-a-comprar-roupas/id1168148250",
  },
  {
    title: "VR",
    category: "Mobile / Fintech",
    image: VrImage,
    text: "Experiências de conta digital e crédito dentro de um SuperApp financeiro.",
    link: "https://apps.apple.com/br/app/superapp-vr/id667577139",
  },
  {
    title: "Daily CCD",
    category: "Mobile / Community",
    image: CcDImage,
    text: "Aplicativo de cursos nas áreas de saúde, tais como terapia nutricional, distúrbios, intoxicações e muito mais.",
    link: "https://apps.apple.com/br/app/daily-ccd/id1512207951",
  },
  {
    title: "IECLB",
    category: "Mobile / Community",
    image: IeclbImage,
    text: "Aplicativo para aproximar pessoas, conteúdo e informações da igreja.",
    link: "https://apps.apple.com/br/app/ieclb/id1565273790",
  },
  {
    title: "Degree",
    category: "Web / Brand",
    image: DegreeImage,
    text: "Plataforma digital da marca Degree para o mercado norte-americano.",
    link: "https://www.degreedeodorant.com/us/en/home.html",
  },
  {
    title: "Tresseme",
    category: "Web / Brand",
    image: TressemeImage,
    text: "Plataforma digital da marca Tresseme para o mercado do Reino Unido (UK).",
    link: "https://www.tresemme.com/uk/home.html",
  },
  {
    title: "Luppi",
    category: "Mobile / Platform",
    image: LuppiImage,
    text: "Aplicativo para gestão de eventos e interação com a comunidade Luppi.",
    link: "#",
  },
];

const experiences = [
  {
    company: "C&A Brasil",
    role: "Desenvolvedor Mobile",
    period: "Abr 2025 — presente",
    textSegments: [
      "Atuo no time responsável pela modernização e migração do aplicativo da C&A, anteriormente desenvolvido com tecnologias nativas, para uma arquitetura baseada em React Native e TypeScript, com foco em performance, escalabilidade, qualidade de código e manutenibilidade.",
      "Participei diretamente do desenvolvimento e evolução do novo checkout do aplicativo contribuindo para a implementação de fluxos de compra, melhorias na experiência do usuário e integração com diferentes meios de pagamento, incluindo Apple Pay, Google Pay, C&A Pay, NuPay, cartões de crédito, 2 cartões e PIX.",
      "Entre os principais resultados do projeto, destacam-se:",
      "- Aumento de 47,6% na taxa de conversão do novo checkout em comparação com a versão legada, representando um ganho de 0,50 ponto percentual (p.p.), em condições equivalentes de teste.",
      "- Crescimento de 20% no ticket médio das transações via NuPay",
      "- Desenvolver e manter o aplicativo móvel de e-commerce atendendo a cerca de 6,5 milhões de usuários ativos mensais nas plataformas iOS e Android.",
      "- Contribuição para a modernização de uma jornada crítica de e-commerce, priorizando uma experiência de compra mais fluida, confiável e eficiente.",
      "- Desenvolvimento de soluções reutilizáveis e escaláveis, seguindo boas práticas de engenharia de software e arquitetura.",
      "No dia a dia, utilizo Azure DevOps para gestão de demandas, acompanhamento de entregas e colaboração com equipes multidisciplinares, atuando em um ambiente ágil e orientado à melhoria contínua.",
    ],
    tags: [
      "React Native",
      "TypeScript",
      "Kotlin",
      "Swift",
      "Firebase",
      "Datadog",
      "Azure DevOps",
    ],
  },
  {
    company: "The Brooklyn Brothers",
    role: "Desenvolvedor Frontend",
    period: "Jun 2024 — Mar 2025",
    textSegments: [
      "Fiz parte do Squad de Inovação da Unilever, onde estávamos focados em criar sites para suas marcas. Meu trabalho envolvia desde o desenvolvimento de novos componentes até a compreensão das necessidades das marcas internacionais da Unilever. Oferecia suporte durante todo o ciclo de desenvolvimento de software, garantindo que nossas entregas fossem de alta qualidade e atendessem às expectativas de nossos parceiros e clientes.",
      "Tive a oportunidade de trabalhar em projetos empolgantes, como os sites para as campanhas Textspañol da Verizon, a segunda maior empresa de telecomunicações global, e Welcome to Mountain Time da Mountain Dew/PepsiCo. E isso demonstra minha capacidade de adaptação e competência para fornecer serviços de alto nível para as maiores empresas do mundo.",
    ],
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    company: "MB Labs",
    role: "Desenvolvedor Mobile",
    period: "Nov 2022 — Jun 2024",
    textSegments: [
      "Eu trabalhei no app crédito da VR, que oferecia produtos financeiros essenciais, como Antecipação de FGTS, Crédito Consignado e Antecipação de Salário. Além disso, estive envolvido no projeto Portal Consignado, que utilizava a tecnologia de Microfrontend com Module Federation. Essa experiência me permitiu explorar novas tecnologias que garantiam escalabilidade e eficiência ao projeto.",
      "Também fiz parte da equipe de desenvolvimento do aplicativo de conta digital da VR Benefícios. Utilizando React Native, desempenhei um papel essencial na criação de funcionalidades bancárias cruciais, como pagamentos de boletos, transferências via Pix, gerenciamento de limites, cadastro de chaves Pix e outras funcionalidades.",
      "Durante meu tempo na MB Labs, adquiri experiência significativa em desenvolvimento mobile e web, aprimorando minhas habilidades em React Native, TypeScript e integração com diversas APIs, sempre focando na entrega de soluções de alta qualidade para os usuários finais.",
    ],
    tags: ["React Native", "TypeScript", "React", "Next.js", "Firebase"],
  },
  {
    company: "Marttech",
    role: "Desenvolvedor Frontend",
    period: "Jun 2021 — Nov 2022",
    textSegments: [
      "Como parte da equipe de desenvolvimento para ZAZ Vendas, tive a oportunidade de desenvolver aplicações utilizando React.js e React Native e uma variedade de tecnologias complementares, como Typescript, Styled Components, Context API, Material-UI e Yup. Essas ferramentas foram essenciais para garantir a escalabilidade, reusabilidade e proporcionar uma experiência visual agradável aos usuários finais.",
      "Um dos aspectos mais interessantes do meu trabalho foi a manipulação da API do Google Maps. Isso me permitiu implementar recursos avançados, como visualização de mapas, roteirização e geolocalização. ",
      "Outro desafio empolgante foi a integração de relatórios com o Microstrategy Embedding SDK. Essa integração permitiu que incorporássemos análises de dados avançadas diretamente nos sistemas da ZAZ Vendas, fornecendo insights valiosos para nossos clientes.",
      "Para garantir uma gestão eficiente do projeto, utilizamos ferramentas como Jira Software e Azure DevOps. Essas plataformas foram cruciais para o controle de tempo e atividades, facilitando a colaboração com a equipe e mantendo o fluxo de trabalho organizado e eficaz.",
    ],
    tags: ["React", "React Native", "Next.js", "C#"],
  },
];

const skills = [
  "React Native",
  "TypeScript",
  "React",
  "Kotlin",
  "Swift",
  "iOS & Android",
  "Next.js",
  "Node.js",
  "Clean Architecture",
  "Testing",
  "CI/CD",
  "Code Review",
];

export default function Portfolio() {
  const [lang, setLang] = useState<Language>("pt");
  const [menuOpen, setMenuOpen] = useState(false);
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
                  <strong>06</strong> anos de experiência
                </span>
                <span>
                  <strong>05</strong> plataformas mobile
                </span>
                <span>
                  <strong>03</strong> plataformas web
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
            {experiences.map((item, index) => (
              <article className="timeline-item" key={item.company}>
                <div className="timeline-meta">
                  <span className="timeline-index">0{index + 1}</span>
                  <span>{item.period}</span>
                </div>
                <div className="timeline-content">
                  <h3>{item.company}</h3>
                  <p className="role">{item.role}</p>
                  {item.textSegments.map((segment, index) => (
                    <p key={index}>
                      {segment}
                      <br />
                      <br />
                    </p>
                  ))}
                  <div className="tags">
                    {item.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
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
              <a
                href={project.link}
                target="_blank"
                className={`project-card ${index === 0 ? "featured" : ""}`}
                key={project.title}
                rel="noreferrer"
              >
                <div className="project-image">
                  <img src={project.image} alt={`Projeto ${project.title}`} />
                </div>
                <div className="project-info">
                  <div>
                    <span className="project-category">{project.category}</span>
                    <h3>{project.title}</h3>
                    <p>{project.text}</p>
                  </div>
                  <span className="project-arrow">↗</span>
                </div>
              </a>
            ))}
          </div>
        </section>
        <section className="expertise section-wrap dark-section" id="expertise">
          <div className="section-label">
            <span>{t.expertiseKicker}</span>
            <div className="rule" />
          </div>
          <h2>{t.expertiseTitle}</h2>
          <div className="skill-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={skill}>
                <span>0{(index % 4) + 1}</span>
                <strong>{skill}</strong>
                <i>↗</i>
              </div>
            ))}
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
            <div className="contact-methods">
              <a
                className="contact-email"
                href="mailto:leandroesilva14@gmail.com"
              >
                leandroesilva14@gmail.com <span>↗</span>
              </a>
              <a className="contact-email" href="tel:+5518997649727">
                +55 (18) 99764-9727 <span>↗</span>
              </a>
            </div>
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
