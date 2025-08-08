interface CardSkillProps {
    id: number,
    tecnology: string,
    description: string,
    image: string,
}

export default function CardSkill({
  tecnology,
  description,
  image,
}: CardSkillProps) {
  return (
    <button
      className={`border-primary bg-black p-8 text-left duration-700 hover:border-b-8 hover:border-primary`}
    >
      <img src={image} alt="tecnology-imagem" className="h-12"/>
      <h2 className="mt-8 text-lg  font-semibold text-white">{tecnology}</h2>
      <p className="mt-2 text-sm	text-gray"> {description}</p>
    </button>
  )
}
