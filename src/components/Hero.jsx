import { useTranslation } from 'react-i18next';
import picture from '../assets/images/img-profile.jpg';
import Links from './Links';


const Hero = () => {
  const { t } = useTranslation(); // Accede a la función de traducción

  return (
    <section className='mx-4 md:mx-auto md:w-5/6'>
      <article className="flex flex-col gap-6 sm:flex-row">
        <div className='flex flex-col gap-2 my-auto'>
          <h1 className='font-bold text-2xl'>{t('sections.welcome')}</h1>
          <h2 className='font-bold text-xl'>{t('sections.about.title')}</h2>
          <div className='hidden sm:flex'>
            <Links />
          </div>
        </div>
        <div className='relative w-88 h-88'>
          <figure className="w-full h-full rounded-full overflow-hidden">
            <img className="w-full h-full object-cover" src={picture} alt="Imagen de perfil" />
          </figure>
        </div>
        <div className='sm:hidden'>
            <Links />
        </div>
      </article>
    </section>
  )
}

export default Hero;