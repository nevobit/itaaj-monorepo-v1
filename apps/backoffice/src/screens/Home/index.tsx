import { Layout } from '@/components'
import styles from './Home.module.css'
import { useGetPosts } from '@/hooks/useGetPosts'
import { useGetProperties } from '@/hooks/useGetProperties';

const Home = () => {
 const { loading, posts } = useGetPosts();
 const { properties } = useGetProperties();
 
  return (
<<<<<<< HEAD
    <Layout>
=======
    <>
>>>>>>> 3a2f2097101c63c4b3e12a7ddaf38509b021bf31
      <div className={styles.elements}>
        <div className={styles.card}>
          {posts.items?.length} Posts
        </div>
        <div className={styles.card}>
          {properties.items?.length} Properties
        </div>
      </div>
<<<<<<< HEAD
    </Layout>
=======
    </>
>>>>>>> 3a2f2097101c63c4b3e12a7ddaf38509b021bf31
  )
}

export default Home
