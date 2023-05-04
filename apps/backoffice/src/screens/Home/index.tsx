import { Layout } from '@/components'
import styles from './Home.module.css'
import { useGetPosts } from '@/hooks/useGetPosts'
import { useGetProperties } from '@/hooks/useGetProperties';

const Home = () => {
 const { loading, posts } = useGetPosts();
 const { properties } = useGetProperties();
 
  return (
    <>
      <div className={styles.elements}>
        <div className={styles.card}>
          {posts.items?.length} Posts
        </div>
        <div className={styles.card}>
          {properties.items?.length} Properties
        </div>
      </div>
    </>
  )
}

export default Home
