import Layout from '@/components/Layout'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '../styles/Home.module.css'

const NotFount = () => {
  return (
    <Layout>
      <section className={styles.not_found}>
        <div>
          <h2>La página no existe</h2>
          <span>Error [404]</span>
          <p>Seguramente encuentres lo que necesites desde nuestra pagina de inicio.</p>
          <Link href='/'>Volver al inicio</Link>
        </div>
        <Image src='/error_404.svg' width={500} height={500} alt="Error 404" />
      </section>
    </Layout>
  )
}

export default NotFount
