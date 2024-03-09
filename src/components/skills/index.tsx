import CardSkill from "./card"
import { skills } from "./data"

export default function Skills() {
    return (
        <section id="skills" className="flex flex-col justify-center items-center w-full px-40 py-20 bg-[#151515]">
            <h2 className="text-white text-center text-3xl mb-16 font-semibold">Skills</h2>
            <div className="grid grid-cols-3 gap-8">
                {skills.map(s => {
                    return (
                        <CardSkill 
                            tecnology={s.tecnology}  
                            description={s.description}
                            image={s.image}
                        />
                    )
                })}
            </div>
        </section>
    )
}