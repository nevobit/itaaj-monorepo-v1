import Layout from '@/components/Layout';
import SEO from '@/components/seo/seo';
import type { NextPage } from 'next';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { DivisaFormater } from '@/types/divisa-formater';
// import properties from '@/_mock_/properties';
import Link from 'next/link';

const Home: NextPage<{ properties: any }> = ({ properties }) => {
  const whatsappLink = `https://api.whatsapp.com/send?phone=+5219995471508&text=Te hablo de la pagina Itaaj.com por la sigueinte propiedad`;

  return (
    <Layout>
      <SEO title="Inicio" />
      <div className={styles.banner}>
        <div className={styles.container_banner}>
        </div>
        <div className={styles.search_container}>
          <h2>Todos tenemos un sitio</h2>
          <div className={styles.search_options}>
            <button className={styles.active} >Comprar</button>
            <button >Obra nueva</button>
          </div>
          <div className={styles.search}>
            <select name="" id="">
              <option value="">Vivienda</option>
            </select>
            <input
              type="text"
              placeholder="Buscar vivienda en ciudad, municipio, barrio"
            />
          </div>
        </div>

        <div className={styles.options}>
          <h2>Te acompanamos en todo el proceso</h2>
          <div className={styles.boxs}>
            <Link href="/blockchain">
              <a className={styles.box}>
                <Image
                  src="/blockchain.png"
                  width={48}
                  height={48}
                  alt="TecnologiaBlockchain"
                />
                <h3>Tecnologia Blockchain</h3>
              </a>
            </Link>
            <div className={styles.box}>
              <Image
                src="/value.png"
                width={48}
                height={48}
                alt="Valora tu casa"
              />
              <h3>Valora tu casa</h3>
            </div>
            <div className={styles.box}>
              <Image
                src="/investment.png"
                width={48}
                height={48}
                alt="Invierte"
              />

              <h3>Invierte</h3>
            </div>
            <div className={styles.box}>
              <Image
                src="/guarantee.png"
                width={48}
                height={48}
                alt="Invierte"
              />

              <h3>Protege tu casa</h3>
            </div>
          </div>
        </div>
      </div>

      <section className={styles.properties_section}>
        <div className={styles.header}>
          <div>
            <h2>Propidades Exclusivas</h2>
            <p className={styles.copy}>
              Proyectos revisados detalladamente con el fin de asegurarnos que
              tengan viabilidad financiera, legal y técnica.
            </p>
          </div>
          <Link href="/properties">Ver todos los inmuebles </Link>
        </div>
        <div className={styles.properties}>
          {properties
            ?.filter((property: any) => property.category == 'exclusive')
            .map((property: any) => (
              <Link
                href={`/properties/exclusive/${property.slug}`}
                key={property.uuid}
                className={styles.property}
              >
                <a>
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
                    <p className={styles.title}>
                      <strong>{property.type}</strong> en {property.city}{' '}
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
            ))}
        </div>
      </section>

      <section className={styles.why}>
        <h2>¿Por qué escoger Itaaj?</h2>
        <div className={styles.image}>
          <Image
            src="/img/value.png"
            width={1200}
            height={600}
            alt="Propuesta de Valor Itaaj"
          />
        </div>
      </section>
      <section className={styles.properties_section}>
        <div className={styles.header}>
          <div>
            <h2>Propidades en General</h2>
            <p className={styles.copy}>Viviendas en Mexico</p>
          </div>
          <Link href="/properties">Ver todos los inmuebles </Link>
        </div>
        <div className={styles.properties}>
          {properties
            ?.filter((property: any) => property.category == 'general')
            .map((property: any) => (
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
                    <strong>{property.type}</strong> en {property.city}{' '}
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
            ))}
        </div>
      </section>
      <section className={styles.vision}>
        <div className={styles.vision_box}>
          <div className={styles.content}>
            <h2>Nuestra Visión</h2>
            <p>
              Creemos en la casa como epicentro del calor humano, centro de
              convivencia, familia y felicidad. Nos interesa CREAR las mejores
              oportunidades para contribuir de manera significativa a que
              cualquier persona pueda <strong>alcanzar</strong> la casa de sus
              sueños.
            </p>
            <Link href="/">Descubre más sobre Itaaf</Link>
          </div>
          <div className={styles.image}>
            <Image
              src="/img/vision.jpg"
              width={1000}
              height={700}
              objectFit="cover"
            />
          </div>
        </div>
      </section>

      <section className={styles.track}>
        <h2>El camino hacia tu nuevo hogar</h2>
        <div className={styles.image}>
          <Image
            src="/img/track.png"
            width={1200}
            height={250}
            objectFit="contain"
            alt="Image"
          />
        </div>
      </section>
      <section className={styles.questions}>
        <div className={styles.image}>
          
        <Image src='/agent.jpg' width={300} height={400} alt='Agente Itaaj' objectFit='cover' />
        </div>
        <div>
          <h2>¿Aún tienes dudas?</h2>
          <p>Contáctanos a través de nuestro WhatsApp y recibe ayuda de
nuestros asesores.</p>
        <Link href={whatsappLink}><a> Habla con un agente</a></Link>
            
        </div>
      </section>
    </Layout>
  );
};

export default Home;

export const getServerSideProps: any = async () => {
  const res = await fetch(
    'https://itaaf-api-production.up.railway.app/api/v1/properties',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
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
