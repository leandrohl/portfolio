import { useEffect, useState } from "react";
import { Menu } from "../../assets/svg/menu";

export default function Header(){
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState(false)

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

    const classLI = "duration-200 border-primary hover:border-b-2 ";

    return(
        <header id="header" className={`fixed z-50 h-24 w-full flex items-center justify-between ${!active && 'px-9 md:px-0'} md:justify-around text-white duration-700 ${
            scrolled ? 'bg-black' : ''
          }`}>
            <h1 className="font-semibold text-lg hover:text-primary duration-700">Leandro Silva</h1>
            <nav className={`${active ? 'h-screen w-full z-50 fixed top-0 flex items-center text-center justify-center bg-black' : 'hidden md:block'}`}>
                <ul
                  onClick={() => setActive(false)}
                  className={`flex flex-col md:flex-row gap-6 text-gray ${active && 'font-semibold text-xl gap-8'} `}
                >
                    <li className={classLI}><a href="#banner">Início</a></li>
                    <li className={classLI}><a href="#about-me">Quem sou</a></li>
                    <li className={classLI}><a href="#experiences">Experiências</a></li>
                    <li className={classLI}><a href="#projects">Projetos</a></li>
                    <li className={classLI}><a href="#skills">Skills</a></li>
                    <li className={classLI}><a href="#footer">Contato</a></li>
                </ul>
            </nav>
            <button className="md:hidden" onClick={() => setActive(true)}>
              <Menu />
            </button>
        </header>
    )
}
