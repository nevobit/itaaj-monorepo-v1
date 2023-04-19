import Layout from '@/components/Layout';
import SEO from '@/components/seo/seo';
import type { NextPage } from 'next';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { DivisaFormater } from '@/types/divisa-formater';
// import properties from '@/_mock_/properties';
import Link from 'next/link';

const Home: NextPage<{properties: any}> = ({properties}) => {
  
  console.log(properties)
  return (
    <Layout>
      <SEO title="Inicio" />
      <div className={styles.banner}>
          <div className={styles.container_banner}>
            <Image src='/img/banner.jpg' width={1920} height={650} objectFit='cover' />
          </div>
          <div className={styles.search_container}>
            <h2>Todos tenemos un sitio</h2>
            <div className={styles.search}>
              <select name="" id="">
                <option value="">Vivienda</option>
              </select>
              <input type="text" placeholder='Buscar vivienda en ciudad, municipio, barrio' />
            </div>
          </div>
        
      </div>

      <section className={styles.properties_section}>
        <div className={styles.header}>
          <div>
            <h2>Propidades Exclusivas</h2>
            <p>Proyectos revisados detalladamente con el fin de asegurarnos que tengan viabilidad financiera, legal y técnica.</p>          
          </div>
          <Link href="/">Ver todos los inmuebles </Link>
        </div>
        <div className={styles.properties}>
          
        {properties?.filter((property:any) => property.category == 'exclusive').map((property:any) => (
          <div className={styles.property}>
            <div className={styles.image}>
              <Image
                src={property.images[0]}
                width={500}
                height={350}
                alt={property.name}
                objectFit="cover"
              />
            </div>
            <div className={styles.property_content}>
              <span className={styles.price}>
                {DivisaFormater({ value: property.price })}
              </span>
              <p className={styles.title}><strong>{property.type}</strong> en {property.city} </p>
              <ul className={styles.list}>
                <li>{property.bedroom} habs</li>
                &middot;
                <li>{property.bathroom} baños</li>
                &middot;
                <li>{property.area.total} m&sup2;</li>
              </ul>
            </div>
          </div>
        ))}
        </div>
        
      </section>

      <section className={styles.why}>
        <h2>¿Por qué escoger Itaaj?</h2>
        <div className={styles.image}>
        <Image src="/img/value.png" width={1200} height={600} alt='Propuesta de Valor Itaaj' />          
        </div>
      </section>
      <section className={styles.properties_section}>
        <div className={styles.header}>
          <div>
            <h2>Propidades en General</h2>
            <p>Viviendas en Mexico</p>          
          </div>
          <Link href="/">Ver todos los inmuebles </Link>
        </div>
        <div className={styles.properties}>
          
        {properties?.filter((property:any) => property.category != 'exclusive').map((property:any) => (
          <div className={styles.property}>
            <div className={styles.image}>
               <Image
                src={property.images[0]}
                width={500}
                height={350}
                alt={property.name}
                objectFit="cover"
              />
            </div>
            <div className={styles.property_content}>
              <span className={styles.price}>
                {DivisaFormater({ value: property.price })}
              </span>
              <p className={styles.title}><strong>{property.type}</strong> en {property.city} </p>
              <ul className={styles.list}>
                <li>{property.bedroom} habs</li>
                &middot;
                <li>{property.bathroom} baños</li>
                &middot;
                <li>{property.area.total} m&sup2;</li>
              </ul>
            </div>
          </div>
        ))}
        </div>
        
      </section>
      <section className={styles.vision}>
        <div className={styles.vision_box}>
          
        <div className={styles.content}>
          <h2>Nuestra Visión</h2>
          <p>Creemos en la casa como epicentro del calor humano, centro de convivencia, familia y felicidad. Nos interesa CREAR las mejores oportunidades para contribuir de manera significativa a que cualquier persona pueda <strong>alcanzar</strong> la casa de sus sueños.</p>
          <Link href='/'>Descubre más sobre Itaaf</Link>
        </div>
          <div className={styles.image}>
            <Image src="/img/vision.jpg" width={1000} height={700} objectFit='cover' />
          </div>
        </div>
          
      </section>
      
      <section className={styles.track}>
        <h2>El camino hacia tu nuevo hogar</h2>
        <div className={styles.image}>
            <Image src="/img/track.png" width={1200} height={250} objectFit='contain' />
          </div>
      </section>
    </Layout>
  );
};

export default Home;



export const getServerSideProps: any = async () => {
  const res = await fetch(
    "https://itaaf-api-production.up.railway.app/api/v1/properties", {
      method: "GET",
      headers: {
            "Content-Type": "application/json",
      }
    }
  );

  const result: any = await res.json();
  // const resultsProducts: GetComputersResults = await resProducts.json();

  return {
    props: {
      properties: result.items,
    },
  };
};
