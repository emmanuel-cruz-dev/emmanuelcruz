import { useTranslation } from 'react-i18next';
import Logo from '../assets/icons/logo-blanco.svg';
import Background from '../assets/images/front_end-background.webp';
import Commitment from './Commitment';

const About = () => {
  const { t } = useTranslation();

  return (
    <section className='py-10 scroll-top flex flex-col gap-8' id='about'>
      <h2 className='font-bold text-2xl text-center'>Sobre mi</h2>
      <article className="grid md:grid-cols-3 gap-4 md:mx-auto lg:w-5/6">
      <div className="bg-orange-900 md:col-span-2 rounded-xl flex flex-col justify-between p-8">
        <h2>{t('sections.about.paragraph')}</h2>
        <div className='flex justify-between'>
          <a href="#">{t('sections.about.contactMe')}</a>
          <a href="#">Mi compromiso</a>
        </div>
      </div>
      <div className="bg-green-400 rounded-xl p-8">
        <img className='h-32' src={Logo} alt="" />
      </div>
      <figure className="rounded-xl overflow-hidden max-w-fit">
        <img className='object-cover w-full' src={Background} alt="" />
      </figure>
      <div className='flex flex-col md:flex-row gap-4 md:col-span-2'>
        <div className="h-full flex md:flex-col gap-4">
          <div className="bg-slate-400 w-full h-full rounded-xl">
            <p className='flex flex-col text-center'><span>+10</span>{t('sections.about.courses')}</p>
          </div>
          <div className="bg-orange-500 w-full h-full rounded-xl">
            <p className='flex flex-col text-center'><span>+500</span>{t('sections.about.practice')}</p>
          </div>
        </div>
        <div className="bg-red-600 rounded-xl w-full p-8 flex flex-col justify-between">
          <div className='md:flex justify-between gap-8'>
            <h3>¿{t('sections.about.subtitle')}?</h3>
            <p className='md:text-right'>{t('sections.about.copy')}
              </p>
          </div>
          <a href='#' className='inline-flex'>{t('sections.about.button')}</a>
        </div>
      </div>
      <Commitment />
      </article>
    </section>
  )
}

export default About;