import Card from "./card";
import LuppiImage from "../../assets/images/Luppi.png"
import ArenaCrossImage from "../../assets/images/arenacross.png"
import Ecoleta from "../../assets/images/ecoleta.png"
import VR from "../../assets/images/VR.png"
import MoveIt from "../../assets/images/moveit.png"
import Eventia from "../../assets/images/Eventos.png"

export default function Projects(){
    return(
        <section id="projects" className="flex flex-col justify-center items-center w-full px-8 md:px-20 py-20">
            <h2 className="text-white text-center text-3xl mb-4 font-semibold">Projetos</h2>
            <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-4">
                <Card 
                    title="Luppi"
                    description="O Luppi é um projeto inovador de venda de ingressos online, no qual ao adquirir um ingresso para um evento, você ganha acesso a uma área especial de relacionamento. "
                    image={LuppiImage}
                    redirect="https://www.luppi.app/organizadores"
                    associate="MB Labs"
                />
                <Card 
                    title="Arena Cross"
                    description="Projeto de um site de uma academia de Crossfit chamada Arena Cross. "
                    image={ArenaCrossImage}
                    redirect="https://arenacross.vercel.app/"
                />
                <Card 
                    title="VR"
                    description="Integrei a equipe de desenvolvimento da VR Soluções Financeiras, composta por miniapps de conta digital e crédito dentro do SuperApp VR. "
                    image={VR}
                    redirect="https://play.google.com/store/apps/details?id=ws.hanzo.Vrrh&hl=pt_BR&gl=US"
                    associate="MB Labs"
                />
                <Card 
                    title="Ecoleta"
                    description="Projeto de um marketplace de coleta de resíduos."
                    image={Ecoleta}
                    redirect="https://github.com/leandrohl/ecoleta"
                />
                 <Card 
                    title="Moveit"
                    description="Projeto inspirado no Pomodoro, uma técnica que te ajuda a ter a habilidade de gerenciar o tempo e de controlar as distrações."
                    image={MoveIt}
                    redirect="https://github.com/leandrohl/moveit-next"
                />
                <Card 
                    title="Eventia"
                    description="Aplicativo de gestão de eventos integrado com Firebase"
                    image={Eventia}
                    redirect="https://github.com/leandrohl/event-management-app"
                />
            </div>
        </section>
    )
}