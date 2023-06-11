import Layout from '@/components/Layout'
import styles from './Blockchain.module.css'
import SEO from '@/components/seo/seo'

const Blockchain = () => {
  return (
    <Layout>
      <SEO title='Blockchain' description='Si eres amante de la tecnología y quieres adquirir una propiedad, ahora puedes hacerlo en Itaaj. Te ofrecemos una oportunidad única: separa en el proyecto de tus sueños usando Bitcoin.' />
     <div className={styles.hero_back}>      
     <section className={styles.hero}>
      <div>
        <h4 className={styles.title}>
        Compra tu inmueble en 4 pasos!          
        </h4>
        
        <ul className={styles.list}>
          <li>1. Realiza una propuesta económica en nuestra plataforma.</li>
          <li>2. Una vez aceptada, realiza el pago del apartado con el fín de formalizar la propuesta.</li>
          <li>3. Fijaremos fecha de firma del contrato de compraventa. El comprador deberá pagar el enganche en ese evento y fijar los tiempos para el pago total de inmueble.</li>
          <li>4. A la feha de liquidación recibirás el 100% de los derechos sobre tu propiedad de forma compretamente digital. </li>
        </ul>
       
      </div>
     </section>
     </div>
     
     <section>
     <ul className={styles.list_down}>
          <li>• Los contratos firmados digitalmente quedarán registrados y encriptados en una Blockchain privada, asegurando con ello su inalterabilidad y confidencialidad.</li>
          <li>•	Cada documento procesado se vuelve único, irrepetible e inalterable. </li>
          <li>•	Comprueba que la persona que firma o acepta es realmente quien dice ser, cumple con regulaciones de KYC.</li>
        </ul>
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
