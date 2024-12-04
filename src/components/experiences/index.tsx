import { useState } from "react";

export default function Experiences() {
    const [selected, setSelected] = useState(0);
    const companies = ['The Brooklyn Brothers', 'MB Labs', 'Marttech', 'Fapesp'];

    const data = [
        {
            title: 'Desenvolvedor Pleno',
            company: 'The Brooklyn Brothers',
            period: 'Jun 2024 - Presente',
            description: 'Faço parte do Squad de Inovação da Unilever, onde focamos em criar websites inovadores e altamente funcionais. Nesse squad, trabalho para criar um site para Tresemmé (UK), em que o foco principal é listar todos os produtos Tresemmé de forma abrangente, além de apresentar coleções, artigos úteis e outros conteúdos relevantes. Além de desenvolver novos componentes, também me envolvo em entender as necessidades das marcas internacionais da Unilever. Eu ofereço suporte durante todo o ciclo de desenvolvimento de software para garantir que nossas entregas sejam de alta qualidade e estejam alinhadas com as expectativas.'
        },
        {
            title: 'Desenvolvedor Frontend',
            company: 'MB Labs',
            period: 'Nov 2022 - Jun 2024 (1 ano e 8 meses)',
            description: 'Eu trabalhei no app crédito, que oferece produtos financeiros, como Antecipação de FGTS até Crédito Consignado e Antecipação de Salário. Além disso, estive envolvido no projeto Portal Consignado, que utiliza tecnologia de Microfrontend com Module Federation. Essa experiência me permitiu explorar novas tecnologias que garantem escalabilidade e a eficiência do projeto. \n Fiz parte também da equipe de desenvolvimento do aplicativo de conta digital da VR Benefícios, utilizando React Native, desempenhei um papel essencial na criação das funcionalidades bancárias cruciais, abrangendo pagamentos de boletos, transferências via Pix, gerenciamento de limites, cadastro de chaves pix e outras funcionalidades. Nesses projetos citados, consegui uma notável cobertura de 80% nos testes unitários utilizando Jest e Testing Library, abrangendo detalhadamente todos os aspectos dos módulos, incluindo Statements, Branches, Functions e Lines.'
        },
        {
            title: 'Desenvolvedor Frontend',
            company: 'Marttech',
            description: 'Como parte da equipe de desenvolvimento para ZAZ Vendas, tive a oportunidade de desenvolver aplicações utilizando React.js e React Native e uma variedade de tecnologias complementares, como Typescript, Styled Components, Context API, Material-UI e Yup. Essas ferramentas foram essenciais para garantir a escalabilidade, reusabilidade e proporcionar uma experiência visual agradável aos usuários finais. Um dos aspectos mais interessantes do meu trabalho foi a manipulação da API do Google Maps. Isso me permitiu implementar recursos avançados, como visualização de mapas, roteirização e geolocalização.  Outro desafio empolgante foi a integração de relatórios com o Microstrategy Embedding SDK. Essa integração permitiu que incorporássemos análises de dados avançadas diretamente nos sistemas da ZAZ Vendas, fornecendo insights valiosos para nossos clientes. Para garantir uma gestão eficiente do projeto, utilizamos ferramentas como Jira Software e Azure DevOps. Essas plataformas foram cruciais para o controle de tempo e atividades, facilitando a colaboração com a equipe e mantendo o fluxo de trabalho organizado e eficaz.',
            period: 'Jun 2021 - Nov 2022 (1 ano e 6 meses)',
        },
        { 
            title: 'Pesquisador',
            company: 'FAPESP',
            description: 'Como bolsista de Iniciação Científica, tive a oportunidade de participar do projeto "Detecção de pessoas em ambiente não controlado utilizando classificador Haar Cascade." Este projeto foi financiado pela Fundação de Amparo à Pesquisa do Estado de São Paulo (FAPESP) e meu orientador foi o Prof. Dr. Celso Olivete Júnior. Durante minha participação nesse projeto, meu foco principal era a aplicação de técnicas de visão computacional para a detecção de pessoas em ambientes não controlados. Utilizamos o classificador Haar Cascade, que é uma técnica popular para detecção de objetos, e adaptamos sua aplicação para identificar e localizar pessoas. Essa experiência me permitiu aprofundar meu conhecimento em visão computacional e desenvolver habilidades de pesquisa científica, além de trabalhar em um projeto financiado pela FAPESP, o que me proporcionou uma perspectiva valiosa sobre a importância e o impacto da pesquisa acadêmica.',
            period: 'Jul 2020 - Jun 2021 (1 ano)',
        }
    ]


    return(
        <section id="experiences" className="flex flex-col justify-center items-center w-full px-2 md:px-40 py-20 bg-[#151515]">
            <h2 className="text-white text-center text-3xl mb-16 font-semibold">Experiências</h2>
            <div className="flex justify-center w-full">
                <div className="flex flex-col w-2/6 text-lg	items-start">
                    { companies.map((company, index) => {
                            return (
                                <button 
                                    onClick={() => setSelected(index)} 
                                    className={`py-4 px-8 text-sm md:text-base ${selected === index ? "text-primary border-l-4 border-primary": "text-white"}`}
                                    key={index}
                                >
                                    {company}
                                </button>
                            )
                        })
                    }
                </div>
                <div className="w-4/6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                        <h2 className="text-white text-xl md:text-2xl" > {data[selected].title} </h2>
                        <span className="text-gray text-base md:text-lg	">{data[selected].period}</span>
                    </div>
                    <h2 className="text-primary mt-4 text-base md:text-xl"> {data[selected].company} </h2>
                    <p className="text-gray text-sm	md:text-base mt-2">{data[selected].description}</p>
                </div>
             </div>
        </section>
    )
}