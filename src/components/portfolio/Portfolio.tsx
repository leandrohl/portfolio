import { useState } from 'react';
import CeaImage from '../../assets/images/C&A.png';
import VrImage from '../../assets/images/VR.png';
import DegreeImage from '../../assets/images/degree-us.png';
import IeclbImage from '../../assets/images/IECLB.png';
import EventsImage from '../../assets/images/Eventos.png';
import ProfileImage from '../../assets/images/image-profile.png';

type Language = 'pt' | 'en';

const copy = {
  pt: {
    nav: ['Sobre', 'Experiência', 'Projetos', 'Especialidades', 'Escrita', 'Contato'],
    eyebrow: 'SOFTWARE ENGINEER / MOBILE DEVELOPMENT',
    heroTitle: 'Construindo experiências móveis que importam.',
    heroText: 'Especializado em React Native, TypeScript e arquitetura mobile escalável. Transformo desafios complexos em experiências digitais confiáveis.',
    explore: 'Explorar meu trabalho', contact: 'Entrar em contato',
    aboutKicker: '01 / SOBRE', aboutTitle: 'Engenharia com clareza, produto com propósito.',
    aboutText: 'Sou Software Engineer com cerca de cinco anos de experiência, focado em construir experiências mobile confiáveis e fáceis de evoluir. Trabalho entre React Native, TypeScript e ecossistemas nativos, conectando decisões técnicas a resultados de produto.',
    aboutText2: 'Tenho experiência com arquitetura escalável, performance, qualidade de código e colaboração entre times. Quando necessário, também navego por Kotlin e Swift para entender o produto de ponta a ponta.',
    expKicker: '02 / EXPERIÊNCIA', expTitle: 'Onde a engenharia encontra o contexto.',
    projectsKicker: '03 / PROJETOS', projectsTitle: 'Trabalho selecionado', view: 'Ver projeto',
    expertiseKicker: '04 / ESPECIALIDADES', expertiseTitle: 'Ferramentas para transformar complexidade em produto.',
    writingKicker: '05 / ESCRITA', writingTitle: 'Pensamento técnico, compartilhado.',
    article: 'Princípios SOLID no Frontend', articleText: 'Uma leitura prática sobre como aplicar princípios de design para criar interfaces mais sustentáveis.', read: 'Ler artigo',
    contactKicker: '06 / CONTATO', contactTitle: 'Vamos construir algo significativo.', contactText: 'Tem um produto, desafio ou ideia em mente? Vamos conversar sobre como transformar isso em uma experiência que funciona.',
    available: 'Disponível para boas conversas', footer: 'Feito com intenção por Leandro Silva.'
  },
  en: {
    nav: ['About', 'Experience', 'Projects', 'Expertise', 'Writing', 'Contact'],
    eyebrow: 'SOFTWARE ENGINEER / MOBILE DEVELOPMENT', heroTitle: 'Building mobile experiences that matter.', heroText: 'Specialized in React Native, TypeScript, and scalable mobile architecture. Turning complex challenges into reliable digital experiences.', explore: 'Explore my work', contact: 'Get in touch', aboutKicker: '01 / ABOUT', aboutTitle: 'Engineering with clarity, product with purpose.', aboutText: 'I am a Software Engineer with around five years of experience, focused on building reliable and evolvable mobile experiences. I work across React Native, TypeScript, and native ecosystems, connecting technical decisions to product outcomes.', aboutText2: 'My experience includes scalable architecture, performance, code quality, and cross-team collaboration. When needed, I also work with Kotlin and Swift to understand the product end to end.', expKicker: '02 / EXPERIENCE', expTitle: 'Where engineering meets context.', projectsKicker: '03 / PROJECTS', projectsTitle: 'Selected work', view: 'View project', expertiseKicker: '04 / EXPERTISE', expertiseTitle: 'Tools to turn complexity into product.', writingKicker: '05 / WRITING', writingTitle: 'Technical thinking, shared.', article: 'SOLID Principles in Frontend', articleText: 'A practical read about applying design principles to build more sustainable interfaces.', read: 'Read article', contactKicker: '06 / CONTACT', contactTitle: 'Let’s build something meaningful.', contactText: 'Have a product, challenge, or idea in mind? Let’s talk about turning it into an experience that works.', available: 'Open to good conversations', footer: 'Made with intention by Leandro Silva.'
  }
};

const projects = [
  { title: 'C&A', category: 'Mobile / Retail', image: CeaImage, text: 'Aplicativo de varejo em larga escala, com foco em jornadas mobile e pagamentos.' },
  { title: 'VR', category: 'Mobile / Fintech', image: VrImage, text: 'Experiências de conta digital e crédito dentro de um SuperApp financeiro.' },
  { title: 'Degree', category: 'Web / Brand', image: DegreeImage, text: 'Plataforma digital da marca Degree para o mercado norte-americano.' },
  { title: 'IECLB', category: 'Mobile / Community', image: IeclbImage, text: 'Aplicativo para aproximar pessoas, conteúdo e informações da igreja.' },
  { title: 'Eventos', category: 'Web / Platform', image: EventsImage, text: 'Plataforma de venda de ingressos e relacionamento para eventos.' }
];

const experiences = [
  { company: 'C&A Brasil', role: 'Desenvolvedor Mobile Pleno', period: 'Abr 2025 — presente', text: 'Modernização de um aplicativo mobile de varejo em larga escala com React Native e TypeScript. Atuação em checkout, integrações de pagamento e evolução de arquitetura com foco em qualidade e manutenção.', tags: ['React Native', 'TypeScript', 'Payments'] },
  { company: 'The Brooklyn Brothers', role: 'Desenvolvedor Frontend Pleno', period: 'Jun 2024 — Mar 2025', text: 'Desenvolvimento de experiências digitais para marcas internacionais, atuando da construção de componentes ao suporte durante todo o ciclo de software.', tags: ['React', 'Next.js', 'TypeScript'] },
  { company: 'MB Labs', role: 'Desenvolvedor Mobile', period: 'Nov 2022 — Jun 2024', text: 'Construção de produtos financeiros para VR, incluindo conta digital, crédito, pagamentos via Pix e testes automatizados.', tags: ['React Native', 'Jest', 'Redux'] },
  { company: 'Marttech', role: 'Desenvolvedor Frontend', period: 'Jun 2021 — Nov 2022', text: 'Desenvolvimento de aplicações web e mobile para operações de vendas, com integrações de mapas, relatórios e APIs.', tags: ['React', 'React Native', 'APIs'] }
];

const skills = ['React Native', 'TypeScript', 'React', 'Kotlin', 'Swift', 'iOS & Android', 'Next.js', 'Node.js', 'Clean Architecture', 'Testing', 'CI/CD', 'Code Review'];

export default function Portfolio() {
  const [lang, setLang] = useState<Language>('pt');
  const [menuOpen, setMenuOpen] = useState(false);
  const t = copy[lang];
  const navIds = ['about', 'experience', 'projects', 'expertise', 'writing', 'contact'];
  const switchLanguage = (next: Language) => { setLang(next); setMenuOpen(false); };

  return <div className="portfolio-shell">
    <a className="skip-link" href="#main">Pular para o conteúdo</a>
    <header className="site-header">
      <a className="wordmark" href="#top">Leandro<span> Silva.</span></a>
      <button className="menu-button" aria-label="Abrir menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
      <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Navegação principal">
        {t.nav.map((label, i) => <a key={label} href={`#${navIds[i]}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
        <div className="language-toggle"><button className={lang === 'pt' ? 'active' : ''} onClick={() => switchLanguage('pt')}>PT</button><span>/</span><button className={lang === 'en' ? 'active' : ''} onClick={() => switchLanguage('en')}>EN</button></div>
      </nav>
    </header>
    <main id="main">
      <section className="hero" id="top"><div className="hero-copy"><p className="eyebrow">{t.eyebrow}</p><h1>LEANDRO<br /><em>SILVA</em></h1><p className="hero-title">{t.heroTitle}</p><p className="hero-text">{t.heroText}</p><div className="hero-actions"><a className="button button-primary" href="#projects">{t.explore} <span>↘</span></a><a className="text-link" href="#contact">{t.contact} <span>↘</span></a></div></div><div className="hero-mark" aria-hidden="true"><span>RN</span><i /></div><div className="scroll-note">SCROLL TO EXPLORE <span>↓</span></div></section>
      <section className="about section-wrap" id="about"><div className="section-label"><span>{t.aboutKicker}</span><div className="rule" /></div><div className="about-grid"><h2>{t.aboutTitle}</h2><div className="about-body"><p>{t.aboutText}</p><p>{t.aboutText2}</p><div className="about-facts"><span><strong>05</strong> anos de experiência</span><span><strong>02</strong> plataformas mobile</span></div></div><div className="portrait"><img src={ProfileImage} alt="Leandro Silva" /><span>mobile engineer<br />based in Brazil</span></div></div></section>
      <section className="experience section-wrap dark-section" id="experience"><div className="section-label"><span>{t.expKicker}</span><div className="rule" /></div><h2>{t.expTitle}</h2><div className="timeline">{experiences.map((item, index) => <article className="timeline-item" key={item.company}><div className="timeline-meta"><span className="timeline-index">0{index + 1}</span><span>{item.period}</span></div><div className="timeline-content"><h3>{item.company}</h3><p className="role">{item.role}</p><p>{item.text}</p><div className="tags">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div></article>)}</div></section>
      <section className="projects section-wrap" id="projects"><div className="section-label"><span>{t.projectsKicker}</span><div className="rule" /></div><div className="section-heading"><h2>{t.projectsTitle}</h2><span>01 — 05</span></div><div className="project-grid">{projects.map((project, index) => <a href="#contact" className={`project-card ${index === 0 ? 'featured' : ''}`} key={project.title}><div className="project-image"><img src={project.image} alt={`Projeto ${project.title}`} /></div><div className="project-info"><div><span className="project-category">{project.category}</span><h3>{project.title}</h3><p>{project.text}</p></div><span className="project-arrow">↗</span></div></a>)}</div></section>
      <section className="expertise section-wrap dark-section" id="expertise"><div className="section-label"><span>{t.expertiseKicker}</span><div className="rule" /></div><h2>{t.expertiseTitle}</h2><div className="skill-grid">{skills.map((skill, index) => <div className="skill-card" key={skill}><span>0{(index % 4) + 1}</span><strong>{skill}</strong><i>↗</i></div>)}</div></section>
      <section className="writing section-wrap" id="writing"><div className="section-label"><span>{t.writingKicker}</span><div className="rule" /></div><div className="writing-card"><div><h2>{t.writingTitle}</h2><span className="article-number">01 / ARTICLE</span></div><div className="article-copy"><h3>{t.article}</h3><p>{t.articleText}</p><a className="text-link" href="https://leandro-silva.medium.com/princ%C3%ADpios-solid-no-frontend-20d78d129e8f" target="_blank" rel="noreferrer">{t.read} <span>↗</span></a></div></div></section>
      <section className="contact section-wrap" id="contact"><div className="contact-inner"><div className="section-label"><span>{t.contactKicker}</span><div className="rule" /></div><p className="available"><i /> {t.available}</p><h2>{t.contactTitle}</h2><p>{t.contactText}</p><a className="contact-email" href="mailto:leandroesilva14@gmail.com">leandroesilva14@gmail.com <span>↗</span></a><div className="socials"><a href="https://www.linkedin.com/in/leandro-silva1/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/leandrohl" target="_blank" rel="noreferrer">GitHub ↗</a></div></div></section>
    </main>
    <footer><span className="wordmark">Leandro<span> Silva.</span></span><span>© {new Date().getFullYear()} · {t.footer}</span><a href="#top">Voltar ao topo ↑</a></footer>
  </div>;
}
