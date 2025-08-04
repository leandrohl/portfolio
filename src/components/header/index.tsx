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
          className={`fixed z-50 h-24 w-full flex items-center justify-between ${!active && 'px-9 md:px-0'} md:justify-around text-white duration-700
          ${scrolled ? 'bg-black' : ''}`}
        >
            <h1 className="font-semibold text-lg hover:text-primary duration-700">{t("header.name")}</h1>
            <nav className={`
              ${active
              ? 'h-screen w-full z-50 fixed top-0 flex items-center text-center justify-center bg-black'
              : 'hidden md:block'
            }`}>
                <ul
                  onClick={() => setActive(false)}
                  className={`flex flex-col md:flex-row gap-6 text-gray ${active && 'font-semibold text-xl gap-8'} `}
                >
                    <li className={classMenu}><a href="#banner">{t("header.home")}</a></li>
                    <li className={classMenu}><a href="#about-me">{t("header.about")}</a></li>
                    <li className={classMenu}><a href="#experiences">{t("header.experiences")}</a></li>
                    <li className={classMenu}><a href="#projects">{t("header.projects")}</a></li>
                    <li className={classMenu}><a href="#skills">{t("header.skills")}</a></li>
                    <li className={classMenu}><a href="#footer">{t("header.contact")}</a></li>
                    <div className="flex justify-between md:hidden mt-12">
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
                className={`flex flex-col md:flex-row gap-6 text-gray ${active && 'font-semibold text-xl gap-8'} `}
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
