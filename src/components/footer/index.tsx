import LinkedinIcon from '../../assets/images/linkedin-log.png'
import GithubIcon from '../../assets/images/github-logo.png'

export default function Footer(){
    return (
        <footer id="footer" className="px-20 pt-16 pb-8">
            <section className="flex items-center justify-between mb-8">
                <div className="w-1/4">
                    <h2 className="text-white font-bold mb-4 text-xl">Leandro Silva</h2>
                    <p className="text-gray">
                        Sou um apaixonado pelo mundo da tecnologia, 
                        especialmente quando se trata de desenvolvimento móvel e web. 
                    </p>
                </div>
                <div>
                    <h2 className="text-white font-semibold mb-8">Entre com contato</h2>
                    <div className="flex items-center gap-4">
                        <a href='https://www.linkedin.com/in/leandro-silva-frontend/' target='blank'><img className='w-8 h-8' src={LinkedinIcon} alt="linkedin link"/></a>
                        <a href='https://github.com/leandrohl' target='blank'><img className='w-8 h-8' src={GithubIcon} alt="github link"/></a>
                    </div>
                </div>
            </section>
            <div className="border-t-[0.5px] border-gray my-8 w-full h-1"></div>
            <section className="w-full text-center ">
                <span className="text-white text-xs ">© Copyright 2024. Feito por Leandro Silva</span>
            </section>
        </footer>
    )
}