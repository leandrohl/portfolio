import Card from "./card";
import LuppiImage from "../../assets/images/Luppi.png"
import Tresseme from "../../assets/images/tresseme.png"
import VR from "../../assets/images/VR.png"
import CEA from "../../assets/images/C&A.png"
import Degree from "../../assets/images/degree-us.png"
import IECLB from "../../assets/images/IECLB.png"

export default function Projects(){
    return(
        <section id="projects" className="flex flex-col justify-center items-center w-full px-4 md:px-20 py-20">
            <h2 className="text-white text-center text-3xl mb-4 font-semibold">Projetos</h2>
            <div className="grid xl:grid-cols-2 lg:grid-cols-2 gap-4 w-full">
              <Card
                    title="C&A"
                    description="Aplicativo da C&A, uma loja de roupas online! O app oferece uma vasta seleção de moda feminina, masculina, infantil, moda praia, moda esportiva e moda plus size, garantindo que milhões de clientes tenham acesso fácil e rápido às novidades e ofertas da C&A na palma da mão."
                    image={CEA}
                    redirect="https://apps.apple.com/us/app/c-a-comprar-roupas/id1168148250"
                />
                <Card
                    title="VR"
                    description="Aplicativo da VR Soluções Financeiras, composta por miniapps de conta digital e crédito dentro do SuperApp VR."
                    image={VR}
                    redirect="https://apps.apple.com/br/app/superapp-vr/id667577139"
                />
                <Card
                    title="TRESemmé"
                    description="Site oficial da TRESemmé UK, uma plataforma moderna e funcional para apresentar seus produtos de cuidados capilares."
                    image={Tresseme}
                    redirect="https://www.tresemme.com/uk/home.html"
                />
                <Card
                    title="Rexona"
                    description="Site oficial da Rexona nos Estados Unidos, onde a marca é conhecida como Degree. Uma plataforma moderna e funcional, ideal para apresentar sua linha de desodorantes e antitranspirantes."
                    image={Degree}
                    redirect="https://www.degreedeodorant.com/us/en/home.html"
                />
                <Card
                    title="IECLB"
                    description="Aplicativo da Igreja Evangélica de Confissão Luterana no Brasil (IECLB) que tem como objetivo de divulgar a palavra de Deus, trazer informações sobre a igreja e aproximar pessoas."
                    image={IECLB}
                    redirect="https://apps.apple.com/br/app/ieclb/id1565273790"
                />
                <Card
                    title="Luppi"
                    description="O Luppi é um projeto inovador de venda de ingressos online, no qual ao adquirir um ingresso para um evento, você ganha acesso a uma área especial de relacionamento. "
                    image={LuppiImage}
                    redirect="https://www.luppi.app/organizadores"
                />
            </div>
        </section>
    )
}
