import Image from 'next/image'
import styles from './PostCard.module.css'

const PostCard = ({category, image, title}: any) => {
  return (
    <div className={styles.card}>
      <span>{category}</span>
      <div className={styles.picture}>
      <Image src={image} width={400} height={180} alt='Post title' objectFit='cover'/> 
      </div>
      
      <h2>{title}</h2>
     <p>Si piensas invertir en propiedad raiz seguro quieres saber si le apuestas al...</p>
     <div className={styles.footer}>
      <span>Por: Pavel Challini</span> &bull; <span>Mar 20, 2023</span>
     </div>
    </div>
  )
}

export default PostCard
