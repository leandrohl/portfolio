import { useState } from "react";

export default function Experiences() {
    const [selected, setSelected] = useState(0);
    const companies = ['C&A Brasil', 'Sysmap Solutions', 'The Brooklyn Brothers', 'MB Labs', 'Marttech', 'Fapesp'];

    const data = [
        {
            title: 'Desenvolvedor Mobile Pleno',
            company: 'C&A Brasil',
            period: 'Abr 2025 - Presente',
            description: `Atuo no time responsável pela migração de aplicativos nativos para React Native, utilizando TypeScript e seguindo boas práticas de desenvolvimento e arquitetura moderna. Trabalhamos com as tecnologias mais atuais do ecossistema React Native, sempre focando em performance, escalabilidade e facilidade de manutenção. \n \n Também participo da manutenção e melhoria contínua de mini apps integrados via WebView, contribuindo com code reviews e garantindo a qualidade do código com boas práticas. \n \n No dia a dia, usamos o Azure DevOps para organizar tarefas, acompanhar entregas e manter a colaboração fluida entre os times, garantindo um fluxo de trabalho ágil e bem estruturado.`
        },
         {
            title: 'Desenvolvedor Mobile Pleno',
            company: 'Sysmap Solutions',
            period: 'Abr 2025 - Presente',
        },
        {
            title: 'Desenvolvedor Frontend Pleno',
            company: 'The Brooklyn Brothers',
            period: 'Jun 2024 - Mar 2025',
            description: `Atualmente, faço parte do Squad de Inovação da Unilever, onde estamos focados em criar novos websites inovadores e super funcionais. Meu trabalho envolve desde o desenvolvimento de novos componentes até a compreensão das necessidades das marcas internacionais da Unilever. Ofereço suporte durante todo o ciclo de desenvolvimento de software, garantindo que nossas entregas sejam de alta qualidade e atendam às expectativas de nossos parceiros e clientes. \n \n Este ano, tive a chance de trabalhar em projetos empolgantes, como os sites para as campanhas Textspañol da Verizon, a segunda maior empresa de telecomunicações global, e Welcome to Mountain Time da Mountain Dew/PepsiCo. E isso demonstra minha capacidade de adaptação e competência para fornecer serviços de alto nível para as maiores empresas do mundo.`
        },
        {
            title: 'Desenvolvedor Mobile',
            company: 'MB Labs - Consultoria e Desenvolvimento de Software',
            period: 'Nov 2022 - Jun 2024',
            description: 'Eu trabalhei no app crédito da VR, que oferecia produtos financeiros essenciais, como Antecipação de FGTS, Crédito Consignado e Antecipação de Salário. Além disso, estive envolvido no projeto Portal Consignado, que utilizava a tecnologia de Microfrontend com Module Federation. Essa experiência me permitiu explorar novas tecnologias que garantiam escalabilidade e eficiência ao projeto. \n \n Também fiz parte da equipe de desenvolvimento do aplicativo de conta digital da VR Benefícios. Utilizando React Native, desempenhei um papel essencial na criação de funcionalidades bancárias cruciais, como pagamentos de boletos, transferências via Pix, gerenciamento de limites, cadastro de chaves Pix e outras funcionalidades. \n\n Nesses projetos, consegui uma notável cobertura de 80% nos testes unitários utilizando Jest e Testing Library, abrangendo detalhadamente todos os aspectos dos módulos, incluindo Statements, Branches, Functions e Lines.'
        },
        {
            title: 'Desenvolvedor Frontend',
            company: 'Marttech - Desenvolvimento de Software',
            description: 'Como parte da equipe de desenvolvimento para ZAZ Vendas, tive a oportunidade de desenvolver aplicações utilizando React.js e React Native e uma variedade de tecnologias complementares, como Typescript, Styled Components, Context API, Material-UI e Yup. Essas ferramentas foram essenciais para garantir a escalabilidade, reusabilidade e proporcionar uma experiência visual agradável aos usuários finais. \n\n Um dos aspectos mais interessantes do meu trabalho foi a manipulação da API do Google Maps. Isso me permitiu implementar recursos avançados, como visualização de mapas, roteirização e geolocalização.  \n\n Outro desafio empolgante foi a integração de relatórios com o Microstrategy Embedding SDK. Essa integração permitiu que incorporássemos análises de dados avançadas diretamente nos sistemas da ZAZ Vendas, fornecendo insights valiosos para nossos clientes. \n\n Para garantir uma gestão eficiente do projeto, utilizamos ferramentas como Jira Software e Azure DevOps. Essas plataformas foram cruciais para o controle de tempo e atividades, facilitando a colaboração com a equipe e mantendo o fluxo de trabalho organizado e eficaz.',
            period: 'Jun 2021 - Nov 2022',
        },
        {
            title: 'Pesquisador',
            company: 'FAPESP',
            description: 'Como pesquisador acadêmico, tive a oportunidade de participar do projeto "Detecção de pessoas em ambiente não controlado utilizando classificador Haar Cascade." Este projeto foi financiado pela Fundação de Amparo à Pesquisa do Estado de São Paulo (FAPESP) e meu orientador foi o Prof. Dr. Celso Olivete Júnior. \n\n Durante minha participação nesse projeto, meu foco principal era a aplicação de técnicas de visão computacional para a detecção de pessoas em ambientes não controlados. Utilizamos o classificador Haar Cascade, que é uma técnica popular para detecção de objetos, e adaptamos sua aplicação para identificar e localizar pessoas. \n\n Essa experiência me permitiu aprofundar meu conhecimento em visão computacional e desenvolver habilidades de pesquisa científica, além de trabalhar em um projeto financiado pela FAPESP, o que me proporcionou uma perspectiva valiosa sobre a importância e o impacto da pesquisa acadêmica.',
            period: 'Jul 2020 - Jun 2021',
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
                    <h2 className="text-primary mt-1 mb-6 text-base md:text-xl"> {data[selected].company} </h2>
                    <p className="text-gray text-sm	md:text-base whitespace-pre-line text-justify">{data[selected].description}</p>
                </div>
             </div>
        </section>
    )
}
