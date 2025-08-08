import { useTranslation } from "react-i18next";
import CardSkill from "./card"
import { skills } from "./data"

export default function Skills() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as 'pt' | 'en';

  return (
    <section id="skills" className="flex w-full flex-col items-center justify-center bg-[#151515] px-8 py-20 md:px-40">
      <h2 className="mb-16 text-center text-3xl font-semibold text-white">{t("skills.title")}</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
        {skills.map(skill => {
          return (
            <CardSkill
              key={skill.id}
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
