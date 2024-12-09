import Card from "./card";
import LuppiImage from "../../assets/images/Luppi.png"
import ArenaCrossImage from "../../assets/images/arenacross.png"
import Tresseme from "../../assets/images/tresseme.png"
import VR from "../../assets/images/VR.png"
import EduardoFonseca from "../../assets/images/eduardo-fonseca.png"
import Eventia from "../../assets/images/Eventos.png"

export default function Projects(){
    return(
        <section id="projects" className="flex flex-col justify-center items-center w-full px-8 md:px-20 py-20">
            <h2 className="text-white text-center text-3xl mb-4 font-semibold">Projetos</h2>
            <div className="grid xl:grid-cols-2 lg:grid-cols-2 gap-4">
                <Card
                    title="TRESemmé"
                    description="Site oficial da TRESemmé UK, uma plataforma moderna e funcional para apresentar seus produtos de cuidados capilares."
                    image={Tresseme}
                    redirect="https://www.tresemme.com/uk/home.html"
                    associate="The Brooklyn Brothers"
                />
                <Card
                    title="Luppi"
                    description="O Luppi é um projeto inovador de venda de ingressos online, no qual ao adquirir um ingresso para um evento, você ganha acesso a uma área especial de relacionamento. "
                    image={LuppiImage}
                    redirect="https://www.luppi.app/organizadores"
                    associate="MB Labs"
                />
                <Card
                    title="VR"
                    description="Aplicativo para VR Soluções Financeiras, composta por miniapps de conta digital e crédito dentro do SuperApp VR."
                    image={VR}
                    redirect="https://play.google.com/store/apps/details?id=ws.hanzo.Vrrh&hl=pt_BR&gl=US"
                    associate="MB Labs"
                />
                <Card
                    title="Eduardo Fonseca"
                    description="Sistema da Barbearia Eduardo Fonseca, desenvolvido para controle interno dos clientes, comandas, funcionários, serviços e produtos da barbearia. "
                    image={EduardoFonseca}
                />
                <Card
                    title="Arena Cross"
                    description="Site Institucional para academia de Crossfit."
                    image={ArenaCrossImage}
                    redirect="https://arenacross.vercel.app/"
                />
                <Card
                    title="Eventia"
                    description="Aplicativo de gestão de eventos integrado com Firebase."
                    image={Eventia}
                    redirect="https://github.com/leandrohl/event-management-app"
                />
            </div>
        </section>
    )
}
