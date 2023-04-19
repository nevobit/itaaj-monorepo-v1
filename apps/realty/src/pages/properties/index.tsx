import Layout from '@/components/Layout'
import SEO from '@/components/seo/seo'
import React from 'react'
import styles from './Properties.module.css'
import Property from '@/components/Property'
import { NextPage } from 'next'

const Properties:NextPage<{properties: any, count: number}> = ({properties, count}) => {
  return (
    <Layout>
     <SEO title='Propiedades' />
      <div className={styles.header}>
       <h2>Filtros</h2>
       <select name="" id="">
        <option value="">Provincia</option>        
       </select>
       <select name="" id="">
        <option value="">Tipo de vivienda</option>        
       </select>
       <select name="" id="">
        <option value="">Tipo de construccion</option>        
       </select>
       <select name="" id="">
        <option value="">Precio</option>        
       </select>
       <select name="" id="">
        <option value="">Habitaciones</option>        
       </select>
       <select name="" id="">
        <option value="">Banos</option>        
       </select>
      </div>
     {count == 0? (
      <div className={styles.notProperties}>
        <div><i className='bx bx-shape-circle'></i></div>
        <h2>No hay Propiedades</h2>
        </div>
     ): (
      
      <div className={styles.properties}>
      <div>
        <h2 className={styles.title}>Viviendas y casas en venta en Mexico</h2>
        <p>14.556 usadas y 3.194 de obra nueva</p>
        <div className={styles.option}>
          <span>
          <i className='bx bx-info-circle'></i>
            <p>Ordenar</p>
          </span>
          <select name="" id="">
            <option value="">Puntuacion</option>
            <option value="">Mas recientes</option>
            <option value="">Mas baratos</option>
            <option value="">Mas caros</option>
            <option value="">Mas grandes</option>
            <option value="">Mas pequenos</option>
          </select>
        </div>
      </div>
      {properties?.map((property:any) => (
       <Property key={property.uuid} {...property} />      
      ))}
      </div>
     )}
      
    </Layout>
  )
}

export default Properties

export const getServerSideProps: any = async () => {
  const res = await fetch(
    "https://itaaf-api-production.up.railway.app/api/v1/properties", {
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
      properties: result.items,
      count: result.count
    },
  };
};