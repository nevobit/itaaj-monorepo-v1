import Layout from '@/components/Layout'
import SEO from '@/components/seo/seo'
import React from 'react'
import styles from './Post.module.css'
import Property from '@/components/Property'
import { NextPage } from 'next'

const Blog:NextPage<{posts: any, count: number}> = ({posts, count}) => {
  return (
    <Layout>
     <SEO title='Blog' />
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
        <h2>No hay Posts</h2>
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
            <option value="score">Puntuacion</option>
            <option value="recents">Mas recientes</option>
            <option value="low">Mas baratos</option>
            <option value="high">Mas caros</option>
            <option value="big">Mas grandes</option>
            <option value="small">Mas pequenos</option>
          </select>
        </div>
      </div>
      {posts?.map((property:any) => (
       <div>
        <h2>{property.title}</h2>
       </div>
       // <Property key={property.uuid} {...property} />      
      ))}
      </div>
     )}
      
    </Layout>
  )
}

export default Blog

export const getServerSideProps: any = async () => {
  const res = await fetch(
    "http://localhost:8000/api/v1/posts"
  );

  const result: any = await res.json();
  // const resultsProducts: GetComputersResults = await resProducts.json();

  return {
    props: {
     posts: result.items,
      count: result.count
    },
  };
};