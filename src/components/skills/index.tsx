import { useTranslation } from "react-i18next";
import CardSkill from "./card"
import { skills } from "./data"

export default function Skills() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as 'pt' | 'en';

    return (
        <section id="skills" className="flex flex-col justify-center items-center px-8 w-full md:px-40 py-20 bg-[#151515]">
            <h2 className="text-white text-center text-3xl mb-16 font-semibold">{t("skills.title")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                {skills.map(skill => {
                    return (
                        <CardSkill
                            id={skill.id}
                            tecnology={skill.tecnology[lang]}
                            description={skill.description[lang]}
                            image={skill.image}
                        />
                    )
                })}
            </div>
        </section>
    )
}
