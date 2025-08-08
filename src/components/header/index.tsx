import { useEffect, useState } from "react";
import { Menu } from "../../assets/svg/menu";
import { useTranslation } from "react-i18next";

export default function Header(){
  const { t, i18n } = useTranslation();

  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(false);

  const switchLanguage = (lang: 'en' | 'pt') => {
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const classMenu = "duration-200 border-primary hover:border-b-2 cursor-pointer";

  return(
    <header
      id="header"
      className={`fixed z-50 flex h-24 w-full items-center justify-between ${!active && 'px-9 md:px-0'} text-white duration-700 md:justify-around
          ${scrolled ? 'bg-black' : ''}`}
    >
      <h1 className="text-lg font-semibold duration-700 hover:text-primary">{t("header.name")}</h1>
      <nav className={`
              ${active
      ? 'fixed top-0 z-50 flex h-screen w-full items-center justify-center bg-black text-center'
      : 'hidden md:block'
    }`}>
        <ul
          onClick={() => setActive(false)}
          className={`flex flex-col gap-6 text-gray md:flex-row ${active && 'gap-8 text-xl font-semibold'} `}
        >
          <li className={classMenu}><a href="#banner">{t("header.home")}</a></li>
          <li className={classMenu}><a href="#about-me">{t("header.about")}</a></li>
          <li className={classMenu}><a href="#experiences">{t("header.experiences")}</a></li>
          <li className={classMenu}><a href="#projects">{t("header.projects")}</a></li>
          <li className={classMenu}><a href="#skills">{t("header.skills")}</a></li>
          <li className={classMenu}><a href="#footer">{t("header.contact")}</a></li>
          <div className="mt-12 flex justify-between md:hidden">
            <li className={classMenu} onClick={() => switchLanguage("en")}>
              {t("header.lang_en")}
            </li>
            <li className={classMenu} onClick={() => switchLanguage("pt")}>
              {t("header.lang_pt")}
            </li>
          </div>
        </ul>
      </nav>
      <nav className="hidden md:flex">
        <ul
          className={`flex flex-col gap-6 text-gray md:flex-row ${active && 'gap-8 text-xl font-semibold'} `}
        >
          <li
            className={classMenu}
            onClick={() => switchLanguage("en")}
          >
            {t("header.lang_en")}
          </li>
          <li
            className={classMenu}
            onClick={() => switchLanguage("pt")}
          >
            {t("header.lang_pt")}
          </li>
        </ul>
      </nav>
      <button className="md:hidden" onClick={() => setActive(true)}>
        <Menu />
      </button>
    </header>
  )
}
