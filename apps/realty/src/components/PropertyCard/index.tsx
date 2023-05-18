import Link from 'next/link'
import styles from './PropertyCard.module.css'
import Image from 'next/image'
import { DivisaFormater } from '@/types/divisa-formater'

const PropertyCard = (property:any) => {
  return (
    <Link
    href={`/properties/${property.slug}`}
    key={property.uuid}
    className={styles.property}
  >
    <a>
      <div className={styles.image}>
        <Image
          src={property.images[0]}
          width={500}
          height={350}
          alt={property.name || 'Image'}
          objectFit="cover"
        />
      </div>
      <div className={styles.property_content}>
        <span className={styles.price}>
          {DivisaFormater({ value: property.price })}
        </span>
        <p className={styles.title}>
          <strong>{property.type}</strong> en {property.city}
        </p>
        <ul className={styles.list}>
          <li>{property.bedrooms} habs</li>
          &middot;
          <li>{property.bathrooms} baños</li>
          &middot;
          <li>{property.area.total_area} m&sup2;</li>
        </ul>
      </div>
    </a>
  </Link>
  )
}

export default PropertyCard
