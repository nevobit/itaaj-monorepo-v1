import Image from 'next/image'
import styles from './PostCard.module.css'
import Link from 'next/link'

const PostCard = ({category, image, title, slug, createdAt, description}: any) => {
  
  const date = new Date(createdAt);
  
  return (
    <Link href={`/blog/${slug}`}>
      <a className={styles.card}>
        
      <span>{category}</span>
      <div className={styles.picture}>
      <Image src={image} width={400} height={180} alt='Post title' objectFit='cover'/> 
      </div>
      
      <h2>{title}</h2>
     <p className={styles.copy}>{description}</p>
     <div className={styles.footer}>
      <span>Por: Pavel Challini</span> &bull; <span>{date.toLocaleDateString('es-ES', {year:'numeric', month: 'long', day: 'numeric'})}</span>
     </div>
     </a>
     
    </Link>
  )
}

export default PostCard
