import Layout from '@/components/Layout'
import styles from './Deals.module.css'
import Image from 'next/image'
import SEO from '@/components/seo/seo'
import { NextPage } from 'next'

const Deals: NextPage<{ properties: any }> = ({ properties })  => {
  return (
    <Layout>
      <SEO />
      <div className={styles.banner}>
        <h1>Forma parte del Equipo de Desarroladores Inmobiliarios</h1>
        <h2>Conoce nuestros proyectos</h2>
        <p>Proyectos estructurados hacia el complimiento. <br /> Solides y transparencia de la estructura <strong>Jurídica, Financiera y Fiscal</strong> de cada proyecto.</p>
      </div>
      
      <section className={styles.info}>
        <h2>Nuestros proyectos se estructuran hacia la <strong>portabilidad de derechos</strong> y <strong>seguridad jurídica</strong> del equipo de desarrolladores.</h2>
      </section>
      
      <div className={styles.selling}>
        <h2>Proyectos en curso</h2>
        <div className={styles.projects}>
          
          {properties
            ?.filter((property: any) => property.category == 'investment')
            .map((property: any, index:number) => (
              <div key={property.uuid} className={`${styles.project} ${styles['pro'+ index]}`}>
                <div className={styles.picture}>
                  <Image src={property.images[0]} width={1000} height={1000} objectFit='cover' />                  
                </div>
                <div className={styles.project_info}>
                  <span>{property.city}, {property.state}</span>
                  <h2>{property.name}</h2>
                    <p dangerouslySetInnerHTML={{ __html: property.description }}></p>      
                  
                  <div className={styles.class_info}>
                    <ul>
                      <li><i className='bx bx-calendar'></i></li>
                      <li className={styles.blue}>8 a 12 meses</li>
                      <li>Duración del Proyecto</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className={styles.rent}>RENTABILIDAD DEL PROYECTO</h4>
                    <h3 className={styles.percent}><i className='bx bx-up-arrow-alt' ></i> {index == 1? "18.5%" : "20%"} </h3>
                  </div>
                  <div className={styles.property_footer}>
                    <button>¡Quiero mas información!</button>
                  </div>
                </div>
              </div>
            ))}
        </div>
            
     
      </div>
      
      <div className={styles.invesment_back}>
        
      <section className={styles.invesment}>
        <h2>¿Cómo invertir en nuestros deals?</h2>
        <ul>
          <li>
            <Image src='/building.png' width={100} height={90} alt='Agenda una reunion' />
            <div>
              <h3>Agenda una reunion con nuestros asesores</h3>
              <p>Conoce mas sobre Itaaj Activos en Movimiento</p>
            </div>
          </li>
          <li>
            <Image src='/savei.png' width={100} height={90} alt='Agenda una reunion' />
            <div>
              <h3>Eliges el deal que mas se ajuste a tu perfil</h3>
              <p>Invirtiendo a partir de USD 10.000</p>
            </div>
          </li>
          <li>
            <Image src='/security.png' width={100} height={90} alt='Agenda una reunion' />
            <div>
              <h3>Recibes utilidades desde el primer dia</h3>
              <p>Rentabilidad estimada entre el 10% y el 20% por peoyecto</p>
            </div>
          </li>
        </ul>
        <button className={styles.investment_btn}>¡Quiero invertir!</button>
      </section>
      </div>
      
    </Layout>
  )
}

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


export default Deals
