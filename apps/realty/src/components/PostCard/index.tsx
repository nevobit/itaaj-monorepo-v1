import Image from 'next/image'
import styles from './PostCard.module.css'

const PostCard = () => {
  return (
    <div className={styles.card}>
      <span>Consejos de vivienda</span>
      <div className={styles.picture}>
      <Image src='/post.jpg' width={400} height={180} alt='Post title' objectFit='cover'/> 
      </div>
      
      <h2>Alquiler de apartamentos de larga y corta estancia: ventajas para el arrendatario</h2>
     <p>Si piensas invertir en propiedad raiz seguro quieres saber si le apuestas al...</p>
     <div className={styles.footer}>
      <span>Por: Dagna Vesquez</span> &bull; <span>Mar 20, 2023</span>
     </div>
    </div>
  )
}

export default PostCard
