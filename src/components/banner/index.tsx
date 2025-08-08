import { useTranslation } from "react-i18next";

export default function Banner(){
  const { t } = useTranslation();

  return(
    <div id="banner" className="flex pt-8 md:pt-0">
      <div className="flex h-screen w-full flex-col items-center justify-center text-white">
        <h1 className="mx-6 mt-4 text-center text-3xl font-bold uppercase md:text-4xl"> {t('banner.title')}
          <span className="text-primary"> {t('banner.name')} </span>
        </h1>
        <p className="mt-8 w-10/12 text-center text-lg text-gray md:w-7/12">
          {t('banner.description')}
        </p>
        <a href="#about-me" className="mt-20 rounded-md border-2 border-primary bg-primary px-20 py-4 font-semibold text-white duration-700 hover:bg-transparent hover:text-primary">
          {t('banner.learn_more')}
        </a>
      </div>
    </div>
  )
}
