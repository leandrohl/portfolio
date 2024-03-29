
interface CardPropos {
    title: string;
    description: string;
    image: string;
    redirect: string
}

export default function Card({ title, description, image, redirect }: CardPropos){
    return(
        <a href={redirect} target="blank" className="flex flex-col md:flex-row items-center my-12">
            <img  className="md:w-2/4" src={image} alt={title}></img>
            <div className="mt-4 md:mt-0 md:ml-8 md:w-2/4">
                <h2 className="text-2xl text-white font-bold">{title}</h2>
                <p className="text-gray mt-6 ">{description}</p>
                <div className="flex w-full justify-center md:justify-start">
                    <button className="mt-10 bg-primary py-4 px-10 rounded-md font-semibold text-white ">
                        Link do projeto
                    </button>
                </div>
            </div>
        </a>
    )
}