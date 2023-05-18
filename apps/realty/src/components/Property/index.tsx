import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styles from './Property.module.css'
import { DivisaFormater } from '@/types/divisa-formater'
import Link from 'next/link'

const Property = ({images, price, type, name, category, bedrooms, bathrooms, area, description, slug}:any) => {
  const [url, setUrl] = useState<string>('');
  
  const whatsappLink = `https://api.whatsapp.com/send?phone=+5219995471508&text=Te hablo de la pagina ${url} por la sigueinte propiedad ${url}/${slug}`;

  useEffect(() => {
    setUrl(window.location.href)
  }, [])
  return (
    <Link href={`/properties/${category == 'exclusive'? category+"/" : ''}${slug}`} >
      <a className={styles.card}>
      <Image src={images[0]} width={100} height={100} alt={name} objectFit='cover' />
      <div>
       <div className={styles.header}>
        <h2>ITAAJ &middot; Experto inmobiliario</h2>
       </div>
       <div className={styles.content}>
        <span className={styles.price}>{DivisaFormater({value: price})}</span>
        <p className={styles.title} ><strong>{type}</strong> {name}</p>
       </div>
       <div className={styles.amenities}>
        <div>
        <i className='bx bx-bed' ></i>
        <p>{bedrooms} habs.</p>
        </div>
        <div>
        <i className='bx bx-bath' ></i>
        <p>{bathrooms} baños</p>
        </div>
        <div>
        <i className='bx bx-area' ></i>
        <p>{area.total_area} m&sup2;</p>
        </div>
        <div>
        <i className='bx bx-building-house' ></i>
          <p>1 planta</p>
        </div>
       </div>
       <div className={styles.description}>
          <p  dangerouslySetInnerHTML={{ __html: description }}></p>
        </div>
       <div className={styles.options}>
        <Link href='/'><a><i className='bx bx-envelope'></i> Contactar</a></Link>
        <Link href={whatsappLink}><a><i className='bx bxl-whatsapp'></i> Mensaje</a></Link>
       </div>
      </div>
      </a>
      
    </Link>
  )
}

export default Property
