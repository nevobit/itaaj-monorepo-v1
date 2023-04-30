import Layout from '@/components/Layout'
import SEO from '@/components/seo/seo'
import React from 'react'
import styles from './Properties.module.css'
import Link from 'next/link'
import { DivisaFormater } from '@/types/divisa-formater'
import Image from 'next/image'
import { NextPage } from 'next'

const Property: NextPage<{property: any}> = ({property}) => {
  
  console.log(property)
  return (
    <Layout>
     <SEO title='Propiedades' />
      <div className={styles.header}>
       <Link href='/properties'><a><i className='bx bx-arrow-back' ></i> Volver</a></Link>
      </div>
      <div className={styles.images}>
       <div className={styles.photo1}>
        <Image src={property.images[0]}   width={800} height={800} objectFit='cover' />        
       </div>
       <Image src={property.images[1]}  width={500} height={500} />
       { property.images[2] && (
          <Image src={property.images[2]}  width={500} height={500} />        
       )}
       {property.images[3] && (
       <Image src={property.images[3]}  width={500} height={500} />
        
       )}
       {property.images[4] && (
       <Image src={property.images[4]}  width={500} height={500} />        
       )}
       
      </div>
      <div className={styles.container}>
       <div>
       <div className={styles.main}>
        <p className={styles.price}>{DivisaFormater({value: property.price})}</p>       
        <Link href="/"><a><i className='bx bx-share-alt' ></i> Compartir</a></Link>
       </div>
       <Link href="/"><a className={styles.price_sug}><i className='bx bx-purchase-tag-alt'></i> Sugerir precio</a></Link>
       <div className={styles.amenities}>
        <div>
        <i className='bx bx-bed' ></i>
        <p>{property.bedrooms} habs.</p>
        </div>
        <div>
        <i className='bx bx-bath' ></i>
        <p>{property.bathrooms} banos</p>
        </div>
        <div>
        <i className='bx bx-area' ></i>
        <p>{property.area.total_area} m&sup2;</p>
        </div>
        <div>
        <i className='bx bx-building-house' ></i>
          <p>1 planta</p>
        </div>
       </div>
       <h2 className={styles.title_property}><strong>{property.type}</strong> en venta en {property.city}</h2>
       <p className={styles.description} dangerouslySetInnerHTML={{ __html: property.description }}></p>
       <h2 className={styles.title_property}>
        Caracteristicas
       </h2>
       <div className={styles.specs}>
         
         <div>
         <i className='bx bx-home-heart'></i>
        <span>
         <p>Tipo de inmueble</p>
         <h3>{property.type}</h3>
        </span>
        </div>
        <div>
        <i className='bx bx-bed' ></i>
        <span>
         <p>Habitaciones</p>
         <h3>{property.bedrooms}</h3>
        </span>
        </div>
        <div>
        <i className='bx bx-timer' ></i>
        <span>
         <p>Antigüedad</p>
         <h3>{property.antiquity} años</h3>
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
         <h3>{property.propertyStatus}</h3>
        </span>
        </div>
         
       </div>
       
       <h2 className={styles.title_property}>
        {property.city}, {property.country}
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

export const getServerSideProps: any = async (context:any) => {
  const { params } = context;
  const { slug } = params;
  const res = await fetch(
    `https://itaaf-api-production.up.railway.app/api/v1/properties/${slug}`, {
    // `http://localhost:8000/api/v1/properties/${slug}`, {
      method: "GET",
      headers: {
            "Content-Type": "application/json",
      }
    }
  );

  const result: any = await res.json();
  // const resultsProducts: GetComputersResults = await resProducts.json();

  return {
    props: {
      property: result[0],
    },
  };
};