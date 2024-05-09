import { useState } from "react";

export default function Experiences() {
    const [selected, setSelected] = useState(0);
    const companies = ['MB Labs', 'ZAZ Vendas', 'Fapesp'];

    const data = [
        {
            title: 'Frontend Developer',
            company: 'MB Labs',
            period: 'Nov 2022 - Presente',
            description: 'Como parte da equipe de desenvolvimento do aplicativo de conta digital da VR Benefícios, utilizando React Native, desempenhei um papel essencial na criação das funcionalidades bancárias cruciais, abrangendo pagamentos de boletos, transferências via Pix, gerenciamento de limites, cadastro de chaves pix e outras funcionalidades. Consegui uma notável cobertura de 80% nos testes unitários utilizando Jest e Testing Library, abrangendo detalhadamente todos os aspectos dos módulos, incluindo Statements, Branches, Functions e Lines. Participei também da equipe do MB Sustain, focando na correção de bugs e implementação de novas funcionalidades nos projetos Luteranos, Kronos, OverA e Luppi. Participei em conjunto com a equipe para garantir a qualidade e a estabilidade dos projetos. Neles tive uma colaboração eficaz na resolução de problemas e no aprimoramento das funcionalidades desses sistemas.'
        },
        {
            title: 'Frontend Developer',
            company: 'ZAZ Vendas',
            description: '-Desenvolvimento de aplicações para a ZAZ Vendas, aplicando meus conhecimentos em React.js para criar interfaces interativas e responsivas. \n -Utilização de tecnologias complementares, como Typescript, Styled Components, Context API, Material-UI e Yup, para garantir a escalabilidade, reusabilidade e uma experiência visual agradável aos usuários. \n -Manipulação da API do Google Maps para implementar recursos avançados, como visualização de mapas, roteirização e geolocalização, proporcionando uma experiência personalizada aos usuários. \n -Integração de relatórios com o Microstrategy Embedding SDK, permitindo a incorporação de análises de dados avançadas nos sistemas da ZAZ Vendas. \n -Utilização de ferramentas como Jira Software e Azure DevOps para o controle de tempo e atividades, garantindo uma gestão eficiente do fluxo de trabalho e a colaboração com a equipe.',
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