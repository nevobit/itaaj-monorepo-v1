import Image from 'next/image'
import React from 'react'
import styles from './Property.module.css'
import { DivisaFormater } from '@/types/divisa-formater'

const Property = ({image, price, type, name}:any) => {
  return (
    <div>
      <Image src={image} width={100} height={100} />
      <div>
       <div className={styles.header}>
        <h2>CAPITAL VALUES</h2> Experto inmobiliario
       </div>
       <div className={styles.content}>
        <span>{DivisaFormater({value: price})}</span>
        <p><strong>{type}</strong> {name}</p>
       </div>
      </div>
    </div>
  )
}

export default Property
