import ImageProfile from '../../assets/images/image.png'
import resume from '../../assets/docs/Currículo-Leandro-Silva.pdf'
import resumeES from '../../assets/docs/Currículo-Leandro-Silva-EN.pdf'

import { useTranslation } from 'react-i18next';

export default function AboutMe(){
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language as 'pt' | 'en';

  return(
    <section id="about-me" className="flex w-full items-center justify-center">
      <div className="m-8 flex flex-col justify-center rounded-md border-2 border-[#1f1f1f] bg-[#151515] px-4 sm:m-20 md:flex-row">
        <img className='my-8 rounded-md md:w-2/6' src={ImageProfile} alt='profile-leandro' />
        <div className='md:ml-8 md:w-2/4'>
          <h2 className='text-lg font-semibold text-primary md:mt-8 '> {t('about.who_am_i')}</h2>
          <h1 className='mt-4 text-2xl font-semibold text-white'> {t('about.name')} </h1>
          <h2 className='mt-2  text-lg text-white'> {t('about.profission')} </h2>
          <div className='mt-6 text-sm text-gray'>
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
          <div className='mb-8 flex justify-center'>
            <a
              href={currentLang === 'en' ? resumeES : resume}
              download="Curriculo-Leandro-Silva.pdf"
              className="mt-12 rounded-md border-2 border-primary bg-primary px-6 py-4 font-semibold text-white duration-700 hover:bg-transparent hover:text-primary md:px-20"
            >
              {t('about.download_resume')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
