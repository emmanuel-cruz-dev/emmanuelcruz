import { useTranslation } from 'react-i18next';
import picture from '../assets/images/img-profile.jpg';
import Links from './Links';


const Hero = () => {
  const { t } = useTranslation(); // Accede a la función de traducción

  return (
    <section className='py-4 mx-4 md:py-10 md:mx-auto md:w-5/6 xl:my-10'>
      <article className="flex flex-col gap-4 sm:flex-row lg:w-full lg:mx-auto lg:justify-between">
        <div className='flex flex-col gap-2 my-auto md:gap-8'>
          <div>
            <h1 className='font-bold text-2xl'>{t('sections.welcome')}</h1>
            <h2 className='font-bold text-xl capitalize'>{t('sections.hero.title')}.</h2>
          </div>
          <div className='hidden sm:flex'>
            <Links />
          </div>
        </div>
        <div className="min-w-[338px] w-[338px] mx-auto md:mx-0">
          <figure className="w-80 h-80 mx-auto md:mx-0 rounded-full overflow-hidden">
            <img 
              className="w-full h-full object-cover rounded-full" 
              src={picture} 
              alt="Imagen de perfil" 
            />
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