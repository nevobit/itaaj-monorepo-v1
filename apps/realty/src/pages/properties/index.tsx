import Layout from '@/components/Layout'
import SEO from '@/components/seo/seo'
import React from 'react'
import styles from './Properties.module.css'
import Property from '@/components/Property'
import properties from '@/_mock_/properties'

const Properties = () => {
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
      {properties.map((property) => (
       <Property {...property} />      
      ))}
    </Layout>
  )
}

export default Properties
