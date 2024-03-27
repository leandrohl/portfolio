import Card from "./card";
import LuppiImage from "../../assets/images/luppi-web.png"
import ArenaCrossImage from "../../assets/images/arenacross-web.png"
import EcoletaImage from "../../assets/images/ecoleta.png"

export default function Projects(){
    return(
        <section id="projects" className="flex flex-col justify-center items-center w-full px-8 md:px-20 py-20">
            <h2 className="text-white text-center text-3xl mb-4 font-semibold">Projetos</h2>
            <Card 
                title="Luppi"
                description="O Luppi é um projeto inovador de venda de ingressos online, no qual ao adquirir um ingresso para um evento, você ganha acesso a uma área especial de relacionamento. "
                image={LuppiImage}
                redirect="https://www.luppi.app/organizadores"
            />
            <Card 
                title="Arena Cross"
                description="Projeto de um site de uma academia de Crossfit chamada Arena Cross. "
                image={ArenaCrossImage}
                redirect="https://arenacross.vercel.app/"
            />
            <Card 
                title="Ecoleta"
                description="Projeto de um marketplace de coleta de resíduos (Mobile e Web)."
                image={EcoletaImage}
                redirect="https://github.com/leandrohl/ecoleta"
            />
        </section>
    )
}