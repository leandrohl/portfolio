import { useEffect, useState } from "react";

export default function Header(){
    const [scrolled, setScrolled] = useState(false);

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
  
    return(
        <header id="header" className={`fixed h-24 w-full flex items-center justify-around text-white duration-700 ${
            scrolled ? 'bg-black' : ''
          }`}>
            <h1 className="font-semibold text-lg">Leandro Silva</h1>
            <nav className="hidden md:block">
                <ul className="flex gap-6 text-gray">
                    <li><a href="#banner">Home</a></li>
                    <li><a href="#about-me">Quem sou</a></li>
                    <li><a href="#experiences">Experiências</a></li>
                    <li><a href="#projects">Projetos</a></li>
                    <li><a href="#skills">Skills</a></li>
                </ul>
            </nav>
        </header>
    )
}