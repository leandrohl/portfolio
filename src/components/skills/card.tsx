interface CardSkillProps {
    id: number,
    tecnology: string,
    description: string,
    image: string,
}


export default function CardSkill({ 
    id,
    tecnology, 
    description, 
    image, 
}: CardSkillProps) {
    return (
        <button 
            className={`text-left duration-700 bg-black p-8 border-primary hover:border-b-8 hover:border-primary'}`}
        >
            <img src={image} alt="tecnology-imagem" className="h-12"/>
            <h2 className="text-white font-semibold  mt-8 text-lg">{tecnology}</h2>
            <p className="text-gray text-sm	mt-2"> {description}</p>
        </button>
    )
}