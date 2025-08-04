import { useTranslation } from "react-i18next";

export default function Banner(){
    const { t } = useTranslation();

    return(
        <div id="banner" className="flex pt-8 md:pt-0">
            <div className="h-screen w-full flex flex-col text-white items-center justify-center">
                <h1 className="mt-4 mx-6 text-3xl text-center md:text-4xl uppercase font-bold"> {t('banner.title')}
                    <span className="text-primary"> {t('banner.name')} </span>
                </h1>
                <p className="text-lg text-center mt-8 w-10/12 md:w-7/12 text-gray">
                    {t('banner.description')}
                </p>
                <a href="#about-me" className="mt-20 border-2 border-primary text-white bg-primary py-4 px-20 rounded-md font-semibold hover:bg-transparent hover:text-primary duration-700">
                    {t('banner.learn_more')}
                </a>
            </div>
        </div>
    )
}
