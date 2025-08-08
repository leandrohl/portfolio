import { useState } from "react";
import { professions } from "../../mock/professions";
import { useTranslation } from "react-i18next";

export default function Experiences() {
  const [selected, setSelected] = useState(0);
  const { t, i18n } = useTranslation();

  const companies = professions.map(item => item.company);
  const currentLang = i18n.language as 'pt' | 'en';

  return(
    <section id="experiences" className="flex w-full flex-col items-center justify-center bg-[#151515] px-2 py-20 md:px-40">
      <h2 className="mb-16 text-center text-3xl font-semibold text-white">
        {t('experiences.experiences')}
      </h2>
      <div className="flex w-full justify-center">
        <div className="flex w-2/6 flex-col items-start	text-lg">
          { companies.map((company, index) => {
            return (
              <button
                onClick={() => setSelected(index)}
                className={`px-8 py-4 text-sm md:text-base
                                      ${selected === index ? "border-l-4 border-primary text-primary": "text-white"}
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
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <h2 className="text-xl text-white md:text-2xl">
              {professions[selected].title[currentLang]}
            </h2>
            <span className="text-base text-gray md:text-lg	">
              {professions[selected].period[currentLang]}
            </span>
          </div>
          <h2 className="mb-6 mt-1 text-base text-primary md:text-xl">
            {professions[selected].company}
          </h2>
          <p className="whitespace-pre-line text-justify	text-sm text-gray md:text-base">
            {professions[selected].description[currentLang]}
          </p>
        </div>
      </div>
    </section>
  )
}
