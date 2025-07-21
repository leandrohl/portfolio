import ImageProfile from '../../assets/images/image.png'
import pdf from '../../assets/docs/Currículo-Leandro-Silva.pdf'

export default function AboutMe(){
    return(
        <section id="about-me" className="flex w-full items-center justify-center">
            <div className="flex flex-col md:flex-row justify-center bg-[#151515] rounded-md px-4 m-8 sm:m-20 border-2 border-[#1f1f1f]">
                <img className='  my-8 rounded-md md:w-2/6' src={ImageProfile} alt='profile-leandro' />
                <div className='md:ml-8 md:w-2/4'>
                    <h2 className='text-primary font-semibold text-lg md:mt-8 '> Quem sou </h2>
                    <h1 className='text-white font-semibold mt-4 text-2xl'> Leandro Silva </h1>
                    <h2 className='text-white  mt-2 text-lg'> Software Engineer </h2>
                    <div className='mt-6 text-gray text-sm'>
                        Olá! Sou um engenheiro de software com 5 anos de atuação na área, especializado em tecnologias como React Native, React.js, Next.js, TypeScript e JavaScript. Estou constantemente buscando aprimorar minhas habilidades e conhecimentos, priorizando boas práticas de código, performance e usabilidade.<br /><br />
                        Minha experiência técnica abrange uma variedade de habilidades:
                        <ul>
                            <li>Tecnologias: React.js, React Native, Next.js e Node.js</li>
                            <li>Linguagens: JavaScript e TypeScript</li>
                            <li>Gerenciamento de estado: Zustand, Context API e Redux</li>
                            <li>Estilização: Styled-Components, Tailwind CSS, Bootstrap, CSS, Sass, Less e Material UI</li>
                            <li>Princípios: Clean Code, SOLID e Clean Architecture</li>
                            <li>Outras ferramentas: React Hooks, Axios, Firebase, Google Analytics, Express.js, Swagger, Git.</li>
                        </ul>
                        <br />
                        Além de habilidades técnicas, também tenho habilidades interpessoais, como trabalho em equipe, gerenciamento de tempo, comunicação com clientes, tomada de decisões e inteligência emocional.
                    </div>
                    <div className='flex justify-center mb-8'>
                        <a
                            href={pdf}
                            download="Curriculo-Leandro-Silva.pdf"
                            className="mt-12 border-2 border-primary bg-primary py-4 px-6 md:px-20 rounded-md font-semibold text-white hover:bg-transparent hover:text-primary duration-700"
                        >
                            Baixar Curriculo
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
