import Layout from '@/components/Layout'
import SEO from '@/components/seo/seo'
import React from 'react'
import styles from './Post.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { NextPage } from 'next'

const Post: NextPage<{post: any}> = ({post}) => {
  
  const whatsappLink = `https://api.whatsapp.com/send?phone=+5219995471508&text=Te hablo de la pagina Itaaj.com por la sigueinte propiedad`;

  return (
    <Layout>
     <SEO title={post.title} description={post.description} />
     <div className={styles.container}>
      <h1>{post.title}</h1>
      <div>
       <span>
       </span>
      </div>
       <p className={styles.description} dangerouslySetInnerHTML={{ __html: post.content }}></p>
     </div>
     
     <section className={styles.questions}>
        <div className={styles.image}>
          <Image
            src="/agent.jpg"
            width={300}
            height={400}
            alt="Agente Itaaj"
            objectFit="contain"
          />
        </div>
        <div>
          <h2>¿Aún tienes dudas?</h2>
          <p>
            Contáctanos a través de nuestro WhatsApp y recibe ayuda de nuestros
            asesores.
          </p>
          <Link href={whatsappLink}>
            <a> Habla con un agente</a>
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export default Post

export const getServerSideProps: any = async (context:any) => {
  const { params } = context;
  const { slug } = params;
  
  console.log(slug);
  
  const res = await fetch(
    `https://itaaf-api-production.up.railway.app/api/v1/posts/${slug}`, {
    // `http://localhost:8000/api/v1/properties/${slug}`, {
      method: "GET",
      headers: {
            "Content-Type": "application/json",
      }
    }
  );
  
  console.log(res);  
  
  const result: any = await res.json();

  return {
    props: {
      post: result[0],
    },
  };
};