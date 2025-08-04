import LinkedinIcon from '../../assets/images/linkedin-log.png'
import GithubIcon from '../../assets/images/github-logo.png'
import { Email } from '../../assets/svg/email'
import PhoneIcon from '../../assets/images/whatsapp.png'
import { useTranslation } from 'react-i18next';

export default function Footer(){
  const { t } = useTranslation();

    return (
        <footer id="footer" className="px-8 md:px-20 pt-16 pb-8">
            <section className="flex flex-col md:flex-row md:items-center justify-between mb-8">
                <div className="md:w-1/4">
                    <h2 className="text-white font-bold mb-4 text-xl">{t("contact.name")}</h2>
                    <p className="text-gray">
                        {t("contact.description")}
                    </p>
                </div>
                <div className='mt-8 md:mt-0'>
                    <h2 className="text-white font-semibold mb-6 md:mb-8">{t("contact.reach_me")}</h2>
                    <div className="flex items-center gap-4">
                        <a href='https://wa.me/5518997649727' target='blank'><img className='w-10 h-10' src={PhoneIcon} alt="phone link"/></a>
                        <a href='https://www.linkedin.com/in/leandro-silva1/' target='blank'><img className='w-8 h-8' src={LinkedinIcon} alt="linkedin link"/></a>
                        <a href='https://github.com/leandrohl' target='blank'><img className='w-8 h-8 hover:text-primary' src={GithubIcon} alt="github link"/></a>
                        <a href='mailto:leandroesilva14@gmail.com' target='blank'><Email /></a>
                    </div>
                </div>
            </section>
            <div className="border-t-[0.5px] border-gray my-8 w-full h-1"></div>
            <section className="w-full text-center ">
                <span className="text-white text-xs ">{t("contact.copyright")}</span>
            </section>
        </footer>
    )
}
