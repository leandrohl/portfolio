export default function Header(){
    return(
        <header className="fixed h-24 w-full flex items-center justify-around text-white ">
            <h1 className="font-semibold">Leandro Silva</h1>
            <nav>
                <ul className="flex gap-6">
                    <li>Home</li>
                    <li>Quem sou</li>
                    <li>Experiências</li>
                    <li>Projetos</li>
                    <li>Skills</li>
                </ul>
            </nav>
        </header>
    )
}