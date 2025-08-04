import ImageProfile from '../../assets/images/image.png'
import pdf from '../../assets/docs/Currículo-Leandro-Silva.pdf'
import { useTranslation } from 'react-i18next';

export default function AboutMe(){
  const { t } = useTranslation();

    return(
        <section id="about-me" className="flex w-full items-center justify-center">
            <div className="flex flex-col md:flex-row justify-center bg-[#151515] rounded-md px-4 m-8 sm:m-20 border-2 border-[#1f1f1f]">
                <img className='my-8 rounded-md md:w-2/6' src={ImageProfile} alt='profile-leandro' />
                <div className='md:ml-8 md:w-2/4'>
                    <h2 className='text-primary font-semibold text-lg md:mt-8 '> {t('about.who_am_i')}</h2>
                    <h1 className='text-white font-semibold mt-4 text-2xl'> {t('about.name')} </h1>
                    <h2 className='text-white  mt-2 text-lg'> {t('about.profission')} </h2>
                    <div className='mt-6 text-gray text-sm'>
                        {t('about.resume')}
                        <ul className='mt-4'>
                            <li>{t('about.technology')}</li>
                            <li>{t('about.languages')}</li>
                            <li>{t('about.state_management')}</li>
                            <li>{t('about.styling')}</li>
                            <li>{t('about.principles')}</li>
                            <li>{t('about.other_tools')}</li>
                        </ul>
                        <br />
                        {t('about.soft_skills')}
                    </div>
                    <div className='flex justify-center mb-8'>
                        <a
                            href={pdf}
                            download="Curriculo-Leandro-Silva.pdf"
                            className="mt-12 border-2 border-primary bg-primary py-4 px-6 md:px-20 rounded-md font-semibold text-white hover:bg-transparent hover:text-primary duration-700"
                        >
                           {t('about.download_resume')}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
