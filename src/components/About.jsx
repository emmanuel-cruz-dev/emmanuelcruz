import { useTranslation } from 'react-i18next';
import Logo from '../assets/icons/logo-negro.svg';
import Screens from '../assets/images/responsive-screens.png';
import Background from '../assets/images/front_end-background.webp';
import { useTheme } from './ThemeContext';
import Commitment from './Commitment';

const About = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <section className='py-10 scroll-top flex flex-col gap-8 w-11/12 mx-auto' id='about'>
      <h2 className='font-bold text-3xl text-center'>{t('navbar.about')}</h2>
      <article className="grid md:grid-cols-3 gap-4 md:mx-auto lg:w-11/12">
        <div className="bg-gradient-to-br from-gray-200/50 to-gray-700/50 md:col-span-2 rounded-xl flex flex-col gap-8 justify-between p-6">
        <div className='flex flex-col gap-8 lg:flex-row lg:justify-between'>
          <h3 className='font-bold text-2xl'><span className='font-medium'>{t('sections.about.hi')}</span> Emmanuel Cruz,<br />{t('sections.hero.title')}.</h3>
          <p className='text-sm lg:text-right lg:w-3/5'>{t('sections.about.paragraph')}</p>
        </div>
          <div className='flex items-center gap-2 text-white bg-black rounded-full px-6 py-3 w-fit transition-colors duration-300 hover:bg-colorTertiary'>
            <a className='font-semibold' href="#">
              {t('sections.about.contactMe')}
            </a>
            <span className="text-[28px] material-icons-outlined">
              keyboard_double_arrow_right
            </span>
          </div>
        </div>
        <div className="bg-gradient-to-br from-cyan-200/80 to-blue-400/80 rounded-xl p-2 overflow-hidden">
          <figure className='flex justify-self-end bg-gradient-to-t from-gray-300 to-white rounded-full p-2 aspect-square w-12'>
            <img className='h-full' src={Logo} alt="Una letra e, entre corchetes" />
          </figure>
          <figure className='w-full'>
            <img className='-ml-8 -mb-2' src={Screens} alt="" />
          </figure>
        </div>
        <figure className="rounded-xl overflow-hidden max-w-fit">
          <img className='object-cover w-full' src={Background} alt="" />
        </figure>
        <div className='flex flex-col md:flex-row gap-4 md:col-span-2'>
          <div className="h-full flex md:flex-col gap-4">
            <div className="bg-slate-400 w-full h-full rounded-xl py-4">
              <p className='flex flex-col text-center'><span>+10</span>{t('sections.about.courses')}</p>
            </div>
            <div className="bg-orange-500 w-full h-full rounded-xl py-4">
              <p className='flex flex-col text-center'><span>+500</span>{t('sections.about.practice')}</p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-red-500/40 to-colorTertiary/60 rounded-xl w-full p-8 flex flex-col gap-8 justify-between">
            <div className='flex flex-col gap-8'>
              <h3 className='text-2xl font-medium'>{t('sections.about.subtitle')} <span className='font-bold lowercase'>{t('sections.about.button')}</span><span className='font-bold'>?</span></h3>
              <p className='md:text-right'>{t('sections.about.copy')}
                </p>
            </div>
            <div className='flex items-center gap-2 bg-black text-white rounded-full px-6 py-3 w-fit transition-colors duration-300 hover:bg-colorTertiary'>
              <a className='font-semibold' href='#'>{t('sections.about.button')}</a>
              <span className="text-[28px] material-icons-outlined">
                search
              </span>
            </div>
          </div>
        </div>
        {/* <Commitment /> */}
      </article>
    </section>
  )
}

export default About;