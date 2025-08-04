import { useState } from "react";
import { professions } from "../../mock/professions";
import { useTranslation } from "react-i18next";

export default function Experiences() {
    const [selected, setSelected] = useState(0);
    const { t, i18n } = useTranslation();

    const companies = professions.map(item => item.company);
    const currentLang = i18n.language as 'pt' | 'en';

    return(
        <section id="experiences" className="flex flex-col justify-center items-center w-full px-2 md:px-40 py-20 bg-[#151515]">
            <h2 className="text-white text-center text-3xl mb-16 font-semibold">
              {t('experiences.experiences')}
            </h2>
            <div className="flex justify-center w-full">
                <div className="flex flex-col w-2/6 text-lg	items-start">
                    { companies.map((company, index) => {
                            return (
                                <button
                                    onClick={() => setSelected(index)}
                                    className={`py-4 px-8 text-sm md:text-base
                                      ${selected === index ? "text-primary border-l-4 border-primary": "text-white"}
                                    `}
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
                        <h2 className="text-white text-xl md:text-2xl">
                          {professions[selected].title[currentLang]}
                        </h2>
                        <span className="text-gray text-base md:text-lg	">
                          {professions[selected].period[currentLang]}
                        </span>
                    </div>
                    <h2 className="text-primary mt-1 mb-6 text-base md:text-xl">
                      {professions[selected].company}
                    </h2>
                    <p className="text-gray text-sm	md:text-base whitespace-pre-line text-justify">
                      {professions[selected].description[currentLang]}
                    </p>
                </div>
             </div>
        </section>
    )
}
