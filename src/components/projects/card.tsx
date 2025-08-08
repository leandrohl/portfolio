import { useState } from "react";
import Redirect from "../../assets/images/redirect.png"

interface CardPropos {
    title: string;
    description: string;
    image: string;
    redirect?: string;
}

export default function Card({ title, description, image, redirect }: CardPropos){
  const [open, setOpen] = useState(false);

  return(
    <div
      className={`relative my-8 flex flex-col duration-700 ease-in-out hover:scale-105${open && 'min-h-96'} w-full`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      { open
        ? (
          <div className="absolute inset-y-0 mt-4 flex min-h-96 w-full flex-col items-center justify-center">
            <h2 className="text-2xl font-bold text-white ">{title}</h2>
            <p className="mt-2 w-3/4 text-center text-gray">{description}</p>
            {redirect && (
              <div className="flex  justify-center ">
                <a href={redirect} target="blank" className="mt-4 rounded-full bg-primary p-4 font-semibold text-white ">
                  <img className="h-8" src={Redirect} alt={title}></img>
                </a>
              </div>
            )}
          </div>
        )
        : <img className="md:min-h-96" src={image} alt={title}></img>
      }
    </div>
  )
}
