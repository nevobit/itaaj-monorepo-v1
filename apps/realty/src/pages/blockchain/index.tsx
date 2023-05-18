import Layout from '@/components/Layout'
import styles from './Blockchain.module.css'
import Image from 'next/image'
import SEO from '@/components/seo/seo'

const Blockchain = () => {
  return (
    <Layout>
      <SEO title='Blockchain' description='Si eres amante de la tecnología y quieres adquirir una propiedad, ahora puedes hacerlo en Itaaj. Te ofrecemos una oportunidad única: separa en el proyecto de tus sueños usando Bitcoin.' />
     <div className={styles.hero_back}>      
     <section className={styles.hero}>
      <div>
        <p>
        Si eres DESARROLLADOR de proyectos inmobiliarios o llevas a cabo un proceso de lotificación de tierra con enfoque industrial o habitacional, nuestra solución sobre la cadena de bloques (Blockchain) facilitará tu proceso de comercialización.
        </p>
        <p>
        Los Derechos de propiedad de tu proyecto integrados a un <strong>Proceso de Tokenización</strong> te permitirá <strong>Portabilidad de Derechos</strong> con la finalidad de.
        </p>
        
        <ul>
          <li>Incrementar el <strong>dinamismo de los tiempos</strong> de formalización de compraventa y apartado de propiedades.</li>
          <li>Incrementar el <strong>dinamismo de los tiempos del proceso de traslado de dominio</strong> de cada lote o propiedad.</li>
          <li>Portabilidad de derechos y contratos inteligentes que gobiernan el proceso de traslado de dominio.</li>
          <li>Acceso a un <strong>Marketplace Web3 que permitirá la compraventa instantánea</strong> de propiedades.
Firma de documentos y autenticación de identidad desde cualquier parte del mundo.
</li>
        </ul>
      </div>
      <Image src='/btc-hero.avif' width={428} height={480} alt='Ahora puedes hacer operaciones en bienes raices con Crypto' /> 
     </section>
     </div>
     
      <section className={styles.how}>
        <h1>¿Cómo adquirir una vivienda usando Crypto?</h1>
        <Image src='/blockpro.png' width={600} height={600} alt='Blockchain como adquirir vivienda' />
      </section>
      <section className={styles.future}>
       <h2>¡Súmate al futuro!</h2>
       <div>
        <h2>Itaaj esta respaldado por inversores de clase mundial como:</h2>
       </div>
      </section>
    </Layout>
  )
}

export default Blockchain
