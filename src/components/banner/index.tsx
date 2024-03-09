export default function Banner(){
    return(
        <div id="banner" className="flex">
            <div className="h-screen flex flex-col text-white items-center justify-center	">
                <h1 className="text-4xl uppercase font-bold"> Olá, eu sou 
                    <span className="text-primary"> Leandro Silva</span>
                </h1>
                <p className="text-lg text-center mt-8 w-7/12 text-gray">
                    Sou um apaixonado pelo mundo da tecnologia, 
                    especialmente quando se trata de desenvolvimento móvel e web. 
                    Com 3 anos de atuação na área, meu objetivo é buscar 
                    constantemente maneiras de tornar a experiência do usuário mais incrível.
                </p>
                <a href="#about-me" className="mt-20 bg-primary py-4 px-20 rounded-md font-semibold ">
                    Quem sou
                </a>
            </div>
        </div>
    )
}