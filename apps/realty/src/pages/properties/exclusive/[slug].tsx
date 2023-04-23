import Layout from '@/components/Layout';
import SEO from '@/components/seo/seo';
import React, { useState } from 'react';
import styles from './Exclusive.module.css';
import { NextPage } from 'next';
import Image from 'next/image';

const Property: NextPage<{ property: any }> = ({ property }) => {
  const [actualImage, setActualImage] = useState(property.images[0]);
  const [actualImageIn, setActualImageIn] = useState(0);

  const prevImage = () => {
    if(actualImageIn == 0){
      setActualImageIn(property.images.length - 1);
    }else{
      setActualImageIn((prev) => prev - 1);
    }
    setActualImage(property.images[actualImageIn])
  }
  
  const nextImage = () => {
    const index = property.images.length;
    if(actualImageIn == index - 1){
      setActualImageIn(0);
    }else{
      setActualImageIn((prev) => prev + 1);
    }
    setActualImage(property.images[actualImageIn])
  }
  return (
    <Layout>
      <SEO title="Propiedades" />
      <div className={styles.banner}>
        <div className={styles.info_banner}>
          <h2>
            {property.type} en venta en {property.city}
          </h2>
          <p>
            {property.type} de {property.area.total_area} m&sup2;
          </p>
        </div>
        <Image
          src={property.images[0]}
          alt={property.name}
          width={1920}
          height={1200}
          objectFit="cover"
        />
      </div>
      <div className={styles.header}>
        <div className={styles.title}>
          <h2>CONOCE TU PROXIMO DEPARTAMENTO EN RIO EBREO 33</h2>
          <p>
            La calle de Río Ebro se localiza muy cerca de la Avenida Reforma,
            una de las más importantes en la Ciudad. En distintas fechas durante
            el año, se realizan varios eventos, éstos usualmente se localizaban
            desde la glorita de la Diana Cazadora hasta la glorieta del Ángel de
            la Independencia. Este corredor también es utilizado montar
            exposiciones fotográficas, arte, escultura, entre otras.
          </p>
        </div>
        <div className={styles.info}>
          <div className={styles.image}></div>
          <p>{property.bedrooms} - RECAMARAS </p>
          <p>{property.bathrooms} - BAÑOS </p>

          <span>LOCALIZADO EN</span>
          <p>{property.city}</p>
          <p>RIO EBRO 33</p>
          <button>CONTACTO</button>
        </div>
      </div>

      <div className={styles.specs}>
         <div className={styles.swiper}>
            <div  className={styles.slide}>
            <Image src={actualImage} width={600} height={600} objectFit='cover' alt='Imagen Propiedad' />
            <div className={styles.buttons}>
            <button onClick={prevImage}><i className='bx bx-chevron-left'></i></button>
            <button onClick={nextImage}><i className='bx bx-chevron-right'></i></button>
            </div>
          </div>
        
            
         </div>
         <div className={styles.caract}>
          <h2>Caracteristicas</h2>
          <ul>
            <li>{property.type} de {property.area.total_area} m&sup2;</li>
            <li>{property.bedrooms} recamaras</li>
            <li>{property.bathrooms} banos</li>
          </ul>
         </div>
      </div>
    </Layout>
  );
};

export default Property;

export const getServerSideProps: any = async (context: any) => {
  const { params } = context;
  const { slug } = params;
  const res = await fetch(
    `https://itaaf-api-production.up.railway.app/api/v1/properties/${slug}`, {
    // `http://localhost:8000/api/v1/properties/${slug}`,
    // {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
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