import React, { useState } from 'react'
import styles from './Header.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
import { Menu, X } from 'react-feather'

const language:any = {
  "en": "English",
  "es": "Español", 
  "fr": "French"
}

const Header = () => {
  const { t, lang } = useTranslation();
  const [open, setOpen] = useState(false);
  const {push, pathname, locales, asPath} = useRouter();
  
  const changeLanguage = (e:any) => {
    const locale = e.target.value;
    push(pathname, asPath, { locale });
  }
  
  
  return (
    <header className={styles.header}>
      
      <nav className={styles.nav}>
      <button onClick={() => setOpen(true)} className={styles.mobile_menu_btn}>
          <Menu size={25} />
      </button>
        <Link href='/'>
          <a className={styles.logo}>
        <Image src="/img/logos/isotipo.png" width={20} height={40} alt='Itaaj logo' />
        <h2>Itaaj</h2>      
        </a>
      </Link>
      <Link href="/">{t('common:buy')}</Link>
       <Link href="/sell">{t('common:sell')}</Link>
       <Link href="/deals">{t('common:projects')}</Link>
       <Link href="/agents">Meta Agentes Itaaj</Link>
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
      
      <div className={open? `${styles.mobile_menu} ${styles.active}`: styles.mobile_menu}>
        <span>
          
      <button className={styles.mobile_menu_btn} onClick={() => setOpen(false)}>
          <X size={25} />
      </button>
        <Link href='/' onClick={() => setOpen(false)}>
          <a className={styles.logo}>
        <Image src="/img/logos/isotipo.png" width={20} height={40} alt='Itaaj logo' />
        <h2>Itaaj</h2>      
        </a>
      </Link>
      </span>
      
      <Link  onClick={() => setOpen(false)} href="/">{t('common:buy')}</Link>
       <Link onClick={() => setOpen(false)} href="/sell">{t('common:sell')}</Link>
       <Link onClick={() => setOpen(false)} href="/deals">{t('common:projects')}</Link>
       <Link onClick={() => setOpen(false)} href="/agents">Meta Agentes Itaaj</Link>
       <Link onClick={() => setOpen(false)} href="/blog">{t('common:blog')}</Link>
       <select value={lang} onChange={changeLanguage} >
        {locales?.map((locale) => (
          <option key={locale} value={locale}>{language[locale.toString()]}</option>        
        ))}
       </select>
      </div>
    </header>
  )
}

export default Header
