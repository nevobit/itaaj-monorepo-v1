import Layout from '@/components/Layout'
import SEO from '@/components/seo/seo'
import React from 'react'
import styles from './Post.module.css'
import { NextPage } from 'next'
import Link from 'next/link'
import PostCard from '@/components/PostCard'

const Blog:NextPage<{posts: any, count: number}> = ({posts}) => {
  return (
    <Layout>
     <SEO title='Blog' description='Vienvenido al blog de Itaaj, aqui podra encontrar todo lo relacionado con como comprar una vivienda.' />
      <div className={styles.header}>
        <Link href='/'>
          Inicio
        </Link>
        <Link href='/'>
          Consejos de vivienda
        </Link>
        <Link href='/'>
        Guia de credito
        </Link>
        <Link href='/'>
        Tips Financieros
        </Link>
        <Link href='/'>
        Zonas
        </Link>
        <Link href='/'>
        Lifestyle
        </Link>
        <Link href='/'>
        Tendencias
        </Link>
        <Link href='/'>
        Blockchain
        </Link>
      </div>
      <h1 className={styles.title}>Tips, guias y consejos para comprar vivienda</h1>
      
      <div className={styles.posts}>
        {posts.map((post: any) => (
          <PostCard key={post.uuid} {...post} />        
        ))}
      </div>
      
      
     
     {/* {count == 0? (
      <div className={styles.notProperties}>
        <div><i className='bx bx-shape-circle'></i></div>
        <h2>No hay Posts</h2>
        </div>
     ): (
      
      <div className={styles.posts}>
    
      {posts?.map((post:any) => (
       <PostCard />
       // <Property key={property.uuid} {...property} />      
      ))}
      </div>
     )}
       */}
    </Layout>
  )
}

export default Blog

export const getServerSideProps: any = async () => {
  const res = await fetch(
    "https://itaaf-api-production.up.railway.app/api/v1/posts"
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