import Layout from '@/components/Layout'
import SEO from '@/components/seo/seo'
import React from 'react'
import styles from './Properties.module.css'
import Link from 'next/link'
import { DivisaFormater } from '@/types/divisa-formater'
import Image from 'next/image'

const Property = () => {
  return (
    <Layout>
     <SEO title='Propiedades' />
      <div className={styles.header}>
       <Link href='/properties'><a><i className='bx bx-arrow-back' ></i> Volver</a></Link>
      </div>
      <div className={styles.images}>
       <div className={styles.photo1}>
        <Image src="/img/properties/p1.png"   width={800} height={450} objectFit='cover' />        
       </div>
       <Image src="/img/properties/p2.jpeg"  width={500} height={400} />
       <Image src="/img/properties/p3.jpg"   width={500} height={400} />
       <Image src="/img/properties/p1.png"   width={500} height={400} />
       <Image src="/img/properties/p2.jpeg"  width={500} height={400} />
       
      </div>
      <div className={styles.container}>
       <div>
       <div className={styles.main}>
        <p className={styles.price}>{DivisaFormater({value: 900000})}</p>       
        <Link href="/"><a><i className='bx bx-share-alt' ></i> Compartir</a></Link>
       </div>
       <Link href="/"><a className={styles.price_sug}><i className='bx bx-purchase-tag-alt'></i> Sugerir precio</a></Link>
       <div className={styles.amenities}>
        <div>
        <i className='bx bx-bed' ></i>
        <p>{1} habs.</p>
        </div>
        <div>
        <i className='bx bx-bath' ></i>
        <p>{1} banos</p>
        </div>
        <div>
        <i className='bx bx-area' ></i>
        <p>{1600} m&sup2;</p>
        </div>
        <div>
        <i className='bx bx-building-house' ></i>
          <p>1 planta</p>
        </div>
       </div>
       <h2 className={styles.title_property}><strong>Apartamento</strong> en venta en Ciudad de Mexico</h2>
       <p className={styles.description}>En una de las calles mas centricas y tranquilas del pueblo, nos encontramos este coqueto piso de 51m2, su distribución es ideal por ser tan cuadrado, llegamos a la entrada y nos encontramos el salón-comedor, con cocina abierta, dos dormitorios dobles, uno de los dormitorios tiene acceso al patio interior donde está la zona de lavadero, baño con ducha espacioso y una terraza orientada a sur. No te lo pierdas, a 150m2 de la playa, restaurants, centros médicos y todos los servicios.</p>
       <h2 className={styles.title_property}>
        Caracteristicas
       </h2>
       <div className={styles.specs}>
         
         <div>
         <i className='bx bx-home-heart'></i>
        <span>
         <p>Tipo de inmueble</p>
         <h3>Apartamento</h3>
        </span>
        </div>
        <div>
        <i className='bx bx-bed' ></i>
        <span>
         <p>Tipo de inmueble</p>
         <h3>Apartamento</h3>
        </span>
        </div>
        <div>
        <i className='bx bx-timer' ></i>
        <span>
         <p>Antigüedad</p>
         <h3>20 a 30 anos</h3>
        </span>
        </div>
        <div>
        <i className='bx bx-chair' ></i>
        <span>
         <p>Amueblado</p>
         <h3>No</h3>
        </span>
        </div>
        <div>
        <i className='bx bx-buildings' ></i>
        <span>
         <p>Planta</p>
         <h3>1 planta</h3>
        </span>
        </div>
        <div>
        <i className='bx bx-wrench'></i>
        <span>
         <p>Estado</p>
         <h3>Casi nuevo</h3>
        </span>
        </div>
         
       </div>
       
       <h2 className={styles.title_property}>
        Ciudad de Mexico, Mexico
       </h2>
       <div className={styles.map}>
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15021635.698595606!2d-113.2586835703016!3d23.192397844676776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84043a3b88685353%3A0xed64b4be6b099811!2sMexico!5e0!3m2!1sen!2sco!4v1681829545463!5m2!1sen!2sco" width="800" height="450" style={{border:0}} loading="lazy"></iframe>
       <p>Itaaj Realty no se responsabiliza de los errores que la información mostrada a continuación pueda contener. La posición en el mapa puede ser aproximada por deseo del propietario. El usuario será el responsable del uso que dé a dicha información.</p>
       </div>
       
       <h2 className={styles.title_property}>
        Propiedades similares...
       </h2>
       </div>
       
       <form className={styles.form}>
        <h2>Contactanos</h2>
        <input type="text" placeholder='Tu nombre' />
        <input type="text" placeholder='Tu e-mail(obligatorio)' />
        <input type="text" placeholder='Tu telefono' />
        <select name="" id="">
         <option>Cual es el motivo de tu contacto?</option>
        </select>
        <label htmlFor="">
         <input type="checkbox" name="" id="" />
         <p>Quiero recibir alertas de inmuebles similares a este</p>
        </label>
        <label htmlFor="">
         <input type="checkbox" name="" id="" />
         <p>Acepto las condiciones de uso, la información basica de Proteccion de Datos y darme de alto en itaaj</p>
        </label>
        <button>Contactar</button>
       </form>
       
      </div>
    </Layout>
  )
}

export default Property
