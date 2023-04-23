import React from 'react'
import styles from './Header.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'

const language:any = {
  "en": "English",
  "es": "Español", 
  "fr": "French"
}

const Header = () => {
  const { t, lang } = useTranslation();
  
  const {push, pathname, locales, asPath} = useRouter();
  
  const changeLanguage = (e:any) => {
    const locale = e.target.value;
    push(pathname, asPath, { locale });
  }
  
  
  return (
    <header className={styles.header}>
      
      <nav className={styles.nav}>
        <div className={styles.logo}>
        <Image src="/img/logos/isotipo.png" width={20} height={40} alt='Itaaj logo' />
        <h2>Itaaj</h2>      
      </div>
      <Link href="/">{t('common:buy')}</Link>
       <Link href="/sell">{t('common:sell')}</Link>
       <Link href="/contact">{t('common:contact')}</Link>
       <Link href="/blog">{t('common:blog')}</Link>
      </nav>
      <div className={styles.options}>

       <select value={lang} onChange={changeLanguage} >
        {locales?.map((locale) => (
          <option key={locale} value={locale}>{language[locale.toString()]}</option>        
        ))}
       </select>
       <Link href="/">{t('common:contact')}</Link>

      </div>
    </header>
  )
}

export default Header
