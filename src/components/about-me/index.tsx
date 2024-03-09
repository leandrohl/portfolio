import ImageProfile from '../../assets/images/image-profile.jpeg'
import pdf from '../../assets/docs/Curriculo-Leandro-Silva.pdf'

export default function AboutMe(){
    return(
        <section id="about-me" className="flex w-full items-center justify-center">
            <div className="flex flex-col md:flex-row justify-center bg-[#151515] rounded-md px-4 m-8 sm:m-20 border-2 border-[#1f1f1f]">
                <img className='md:h-[32rem] my-8 rounded-md' src={ImageProfile} alt='profile-leandro' />
                <div className='md:ml-8 md:w-2/4'>
                    <h2 className='text-primary font-semibold text-lg md:mt-12 '> Quem sou </h2>
                    <h1 className='text-white font-semibold mt-4 text-2xl'> Leandro Silva </h1>
                    <h2 className='text-white  mt-2 text-lg'> Desenvolvedor Frontend </h2>
                    <p className='mt-6 text-gray text-sm'>
                        Olá! Sou um apaixonado pelo mundo da tecnologia, especialmente quando se trata de desenvolvimento móvel e web. Com 3 anos de atuação na área, meu objetivo é buscar constantemente maneiras de tornar a experiência do usuário mais incrível.
                        <br /><br />
                        Integro a equipe de desenvolvimento na MB Labs, contribuindo para o aplicativo de conta digital da VR Benefícios. Minha experiência abrange desde o desenvolvimento de funcionalidades bancárias cruciais em React Native até a garantia da qualidade através de testes unitários.
                        <br />
                        Além disso estou cursando Análise e Desenvolvimento de Sistemas na Unoeste, participando ativamente nos eventos de tecnologia e aprimorando minhas habilidades técnicas.
                        <br /><br />
                        O que me destaca é o meu fascínio constante por aprender e evoluir. Estou sempre em busca de oportunidades para aprimorar minhas habilidades e adquirir novas experiências.
                    </p>
                    <div className='flex justify-center mb-8'>
                        <a 
                            href={pdf} 
                            download="Curriculo-Leandro-Silva.pdf" 
                            className="mt-12 border-2  border-primary py-4 px-4 md:px-20 rounded-md font-semibold text-primary"
                        >
                            Baixar Curriculo
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}