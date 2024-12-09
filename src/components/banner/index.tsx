export default function Banner(){
    return(
        <div id="banner" className="flex ">
            <div className="h-screen w-full flex flex-col text-white items-center justify-center">
                <h1 className="mt-24 mx-6 text-3xl text-center md:text-4xl uppercase font-bold"> Olá, eu sou
                    <span className="text-primary"> Leandro Silva </span>
                </h1>
                <p className="text-lg text-center mt-8 w-10/12 md:w-7/12 text-gray">
                    Sou um apaixonado pelo mundo da tecnologia,
                    especialmente quando se trata de desenvolvimento móvel e web.
                    Com 4 anos de atuação na área, meu objetivo é buscar
                    constantemente aprimorar minhas habilidades e conhecimentos para construir aplicações de alta qualidade.
                </p>
                <a href="#about-me" className="mt-20 border-2 border-primary text-black bg-primary py-4 px-20 rounded-md font-semibold hover:bg-transparent hover:text-primary duration-700">
                    Saiba mais
                </a>
            </div>
        </div>
    )
}
