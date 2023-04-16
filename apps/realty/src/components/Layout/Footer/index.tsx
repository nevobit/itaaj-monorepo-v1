import React from 'react';
import styles from './Footer.module.css';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
      <div>
       
        
      </div>

      <div className={styles.social}>
      <h2 className={styles.copy}>
          &copy; Copyright 2023, Itaaj Realty All Rights Reserved <span>+</span>
        </h2>
        <div className={styles.networks}>
          <Link href="/">
            <i className="bx bxl-instagram"></i>
          </Link>
          <Link href="/">
            <i className="bx bxl-facebook"></i>
          </Link>
          <Link href="/">
            <i className="bx bxl-twitter"></i>
          </Link>
          <Link href="/">
            <i className="bx bxl-youtube"></i>
          </Link>
          <Link href="/">
            <i className="bx bxl-linkedin"></i>
          </Link>
        </div>
      </div>
      </div>
      
    </footer>
  );
};

export default Footer;
