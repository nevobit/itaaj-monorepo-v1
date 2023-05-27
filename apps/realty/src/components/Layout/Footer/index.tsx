import React from 'react';
import styles from './Footer.module.css';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';

const language:any = {
  "en": "English",
  "es": "Español", 
  "fr": "French"
}

const Footer = () => {
  const { lang } = useTranslation();
  
  const {push, pathname, locales, asPath} = useRouter();
  
  const changeLanguage = (e:any) => {
    const locale = e.target.value;
    push(pathname, asPath, { locale });
  }
  
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div></div>
        <div className={styles.social}>
          <h2 className={styles.copy}>
          </h2>
          <div className={styles.networks}>
            <Link href="https://instagram.com/itaaj.mx?igshid=YmMyMTA2M2Y=" passHref>
              <a target="_blank" rel="noopener noreferrer"> 
                <i className="bx bxl-instagram"></i>
              </a>
            </Link>
            <Link href="https://www.facebook.com/itaajrealty" passHref>
              <a target="_blank" rel="noopener noreferrer"> 
                <i className="bx bxl-facebook"></i>
              </a>
            </Link>
            <Link href="/" passHref>
              <a target="_blank" rel="noopener noreferrer"> 
                <i className="bx bxl-youtube"></i>
              </a>
            </Link>
            <Link href="/" passHref>
              <a target="_blank" rel="noopener noreferrer"> 
                <i className="bx bxl-twitter"></i>
              </a>
            </Link>
            <Link href="https://www.linkedin.com/company/itaajonchain/" passHref>
              <a target="_blank" rel="noopener noreferrer"> 
                <i className="bx bxl-linkedin"></i>
              </a>
            </Link>
          </div>
        </div>
        <div className={styles.nav}>
          <ul>
            <li className={styles.title}>Sobre Itaaj</li>
            <li>Quienes somos?</li>
            <li>Nuestro Equipo</li>
            <li>Terminos y condiciones</li>
            <li>Tecnologia Blockchain</li>
          </ul>
          <ul>
            <li className={styles.title}>Links Rapidos</li>
            <Link href="/agents" >
              <a > 
                <li>Asesores Externos</li>              
              </a>
            </Link>
            
            <Link href="/blog" >
              <a > 
                <li>Blog</li>              
              </a>
            </Link>
            <Link href="/deals" >
              <a > 
                <li>Portafolio de desarrolladores</li>
              </a>
            </Link>
          </ul>
          <ul>
            <li className={styles.title}>Contactanos</li>
            <li>Rio Panuco 91. Int 22 Colonia Cuauhtémoc Ciudad de México</li>
            <li>+52 1 999 547 1508</li>
            <li>contacto@itaaj.com.mx</li>
          </ul>
        </div>
        
        <div className={styles.legal}>
          <div className={styles.options}>            
          <p>&copy; Copyright 2023, Itaaj Realty</p>
          <Link href='/legal'>Aviso legal</Link>
          <Link href='/data'>Proteccion de datos</Link>
          <Link href='/legal'>Politica de cookies</Link>
          </div>
          <select value={lang} onChange={changeLanguage} >
        {locales?.map((locale) => (
          <option key={locale} value={locale}>{language[locale.toString()]}</option>        
        ))}
       </select>
        </div>
      </div>
      <div className={styles.float}>
        <Link href="https://api.whatsapp.com/send?phone=5219995471508&text=Hola, me interesa hacer una consulta">
          <a title="Boton Whatsapp">
            <i className="bx bxl-whatsapp"></i>{' '}
          </a>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
