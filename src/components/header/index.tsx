export default function Header(){
    return(
        <header id="header" className="fixed h-24 w-full flex items-center justify-around text-white ">
            <h1 className="font-semibold text-lg">Leandro Silva</h1>
            <nav>
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