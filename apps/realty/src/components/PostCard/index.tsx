import Image from 'next/image'
import styles from './PostCard.module.css'
import Link from 'next/link'

<<<<<<< HEAD
const PostCard = ({category, image, title, slug, createdAt, description}: any) => {
  
  const date = new Date(createdAt);
  
  return (
    <Link href={`/blog/${slug}`}>
      <a className={styles.card}>
        
=======
const PostCard = ({category, image, title}: any) => {
  return (
    <div className={styles.card}>
>>>>>>> 3a2f2097101c63c4b3e12a7ddaf38509b021bf31
      <span>{category}</span>
      <div className={styles.picture}>
      <Image src={image} width={400} height={180} alt='Post title' objectFit='cover'/> 
      </div>
      
      <h2>{title}</h2>
<<<<<<< HEAD
     <p className={styles.copy}>{description}</p>
     <div className={styles.footer}>
      <span>Por: Pavel Challini</span> &bull; <span>{date.toLocaleDateString('es-ES', {year:'numeric', month: 'long', day: 'numeric'})}</span>
=======
     <p>Si piensas invertir en propiedad raiz seguro quieres saber si le apuestas al...</p>
     <div className={styles.footer}>
      <span>Por: Pavel Challini</span> &bull; <span>Mar 20, 2023</span>
>>>>>>> 3a2f2097101c63c4b3e12a7ddaf38509b021bf31
     </div>
     </a>
     
    </Link>
  )
}

export default PostCard
