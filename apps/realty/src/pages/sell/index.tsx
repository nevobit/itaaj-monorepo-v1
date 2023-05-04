import Layout from '@/components/Layout'
import SEO from '@/components/seo/seo'
import React from 'react'
import styles from './Sell.module.css'
import Image from 'next/image'
import states from '@/utilities/states'

const Sell = () => {
  return (
    <Layout>
     <SEO title='Sell' description='Page to sell properties' />
      <div className={styles.banner}>
        <div className={styles.image}>
        {/* <Image src='/mexico.jpg' width={1600} height={468} alt='Mexico' objectFit='cover' />           */}
        </div>
        <div className={styles.banner_content}>
          <div>
            <p>BIENVENIDO!</p>
            <h2>Te ofertamos por tu inmueble en menos de 7 dias</h2>
          </div>
          <form action="">
            <h3>Dejanos tus datos y te contactamos</h3>
            <div className={styles.field}>
              <label htmlFor="">Nombre*</label>
              <input type="text" placeholder='Nombre de contacto' />
            </div>
            <div className={styles.field}>
              <label htmlFor="">Email*</label>
              <input type="text" placeholder='Email de contacto' />
            </div>
            <div className={styles.field}>
              <label htmlFor="">Estado</label>
              <select name="" id="">
                {states.map(state => (
                  <option key={state.clave} value={state.nombre}>{state.nombre}</option>
                ))}
              </select>
            </div>
            <div className={styles.field}>
              <label htmlFor="">Telefono</label>
              <input type="text" placeholder='Telefono de contacto' />
            </div>
            
            <div className={styles.field_box}>
              <input type="checkbox" />
              <label htmlFor="">Acepto la Proteccion de datos</label>
            </div>
            <button>Me interesa</button>
            
            <span>
              <p>O llamanos al telefono</p>
              <h4>+52 1 999 547 1508</h4>
            </span>
          </form>
        </div>
      </div>
      
      <section className={styles.section}>
        <div className={styles.left}>
          
        <h2>Recibe una propuesta</h2>
        <p>Si por algún motivo te urge vender tu propiedad, recibe una propuesta comercial para comprar tu inmueble en plazo no mayor a 7 días.</p>
        
        <p>Prueba nuestro servicio, configúralo a tu medida y gestiona de forma sencilla y eficiente tus inmuebles.
          <br /> ¿Te interesa captar público extranjero? Con Itaaj tendrás difusión de tus inmuebles nacional e internacionalmente.</p>
          <div className={styles.image}>
          <Image src='/proposal.jpg' width={450} height={250} alt='Recibe una propuesta' />            
          </div>
        
        </div>
        
        <div className={styles.right}>
          <h2>Solicitud de Propuesta Personalizada</h2>
          <p>Obtén una propuesta de compra personalizada para tu propiedad completando nuestro formulario. Uno de nuestros expertos se pondrá en contacto contigo para explicarte la oferta en detalle y responder a cualquier pregunta que tengas. ¡Solicita tu propuesta hoy mismo!</p>
        </div>
      </section>
      
      <section className={styles.section}>
        <div className={styles.left_two}>
        <h2>Promocionamos tu Propiedad</h2>
        <p>Obtén una propuesta de compra personalizada para tu propiedad completando nuestro formulario. Uno de nuestros expertos se pondrá en contacto contigo para explicarte la oferta en detalle y responder a cualquier pregunta que tengas. ¡Solicita tu propuesta hoy mismo!</p>
        </div>
        <div className={styles.image_two}>
        <Image src='/promotion.png' width={550} height={500} />
        </div>
      </section>
    </Layout>
  )
}

export default Sell
