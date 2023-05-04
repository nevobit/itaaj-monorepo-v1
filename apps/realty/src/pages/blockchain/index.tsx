import Layout from '@/components/Layout'
import styles from './Blockchain.module.css'
import Image from 'next/image'

const Blockchain = () => {
  return (
    <Layout>
     <div className={styles.hero_back}>      
     <section className={styles.hero}>
      <div>
       <h2>Ahora puedes hacer operaciones en bienes raices con Crypto</h2>
       <p>Si eres amante de la tecnología y quieres adquirir una propiedad, ahora puedes hacerlo en Itaaj. Te ofrecemos una oportunidad única: separa en el proyecto de tus sueños usando Bitcoin.</p>
       <p>Hemos seleccionado proyectos innovadores y muy interesantes, en los cuales podrás acceder a la selección del apartamento que quieras adquirir, apartándolo con la red monetaria más innovadora, eficiente y segura.</p>
       <p>La revolución de las criptomonedas es una realidad y tú, con La Itaaj, puedes ser parte.</p>
      </div>
      <Image src='/btc-hero.avif' width={428} height={480} alt='Ahora puedes hacer operaciones en bienes raices con Crypto' /> 
     </section>
     </div>
     
      <section className={styles.how}>
        <h1>¿Cómo adquirir una vivienda usando Crypto?</h1>
        <Image src='/blockpro.png' width={400} height={400} />
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
