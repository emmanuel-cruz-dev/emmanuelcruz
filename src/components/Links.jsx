import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import EmailCopyButton from './EmailCopyButton';
import { AiOutlineDownload } from 'react-icons/ai';


const Links = () => {
  const { t } = useTranslation(); // Accede a la función de traducción

  return (
    <div className='flex flex-col gap-5'>
      <p>{t('sections.about.description')}</p>
      <div className='flex flex-col gap-5'>
        <div className='flex gap-4'>
          <a className='w-10 h-10 hover:text-colorTertiary transition-colors duration-500 ease-in-out' href="https://www.linkedin.com/in/emmanuel-cruz-6a242430b/" target='_blank' rel='noopener noreferrer'>
            <FaLinkedin className='w-full h-full' />
          </a>
          <a className='w-10 h-10 hover:text-colorTertiary transition-colors duration-500 ease-in-out' href="https://github.com/EmmaLCruz" target="_blank" rel="noopener noreferrer">
            <FaGithub className='w-full h-full' />
          </a>
        </div>
        <div className='flex gap-3'>
          <a className='btn btn--red' href="/Emmanuel-Cruz-CV.pdf" target="_blank" rel="noopener noreferrer">
            {t('sections.about.cv')} CV
            <AiOutlineDownload size={30}/>
          </a>
          <EmailCopyButton />
        </div>
      </div>
    </div>
  )
}

export default Links;