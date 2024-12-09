import { useState } from "react";
import Redirect from "../../assets/images/redirect.png"

interface CardPropos {
    title: string;
    description: string;
    image: string;
    redirect?: string;
    associate?: string;
}

export default function Card({ title, description, image, redirect, associate }: CardPropos){
    const [open, setOpen] = useState(false);


    return(
        <div
            className="flex flex-col my-12 relative duration-700 ease-in-out transform hover:scale-105"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            { open
            ? (
                <div className="absolute top-0 bottom-0 w-full flex flex-col justify-center items-center mt-4">
                    <h2 className="text-2xl text-white font-bold">{title}</h2>
                    <p className="text-gray w-3/4 mt-2 text-center">{description}</p>
                    {associate && <p className="text-gray w-3/4 mt-2 text-center"> Associado com {associate}</p>}
                    {redirect && (
                      <div className="flex  justify-center ">
                        <a href={redirect} target="blank" className="mt-4 bg-primary p-4 rounded-full font-semibold text-white ">
                            <img className="h-8" src={Redirect} alt={title}></img>
                        </a>
                      </div>
                    )}
                </div>
            )
            : <img className="min-h-96" src={image} alt={title}></img>
            }
        </div>
    )
}
