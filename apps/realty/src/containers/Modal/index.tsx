import states from '@/utilities/states';
import styles from './Modal.module.css'
import { ArrowRight, Calendar, Edit, Globe, Link, List, Mail, MapPin, MoreVertical, Phone, Send, ShoppingCart } from 'react-feather'
import countries from '@/utilities/countries';
import { useEffect, useState } from 'react';

interface Props {
 open: boolean;
 closeModal: () => void; 
}

const Modal = ({ open, closeModal }: Props) => {
  
  const [proposal, setProposal] = useState({
    name: '',
    nationality: '',
    email: '',
    phone: '',
    economic_proposal: 0,
    apartado: 50000,
    enganche: 0,
    rest: 0
  }) 
  
  const handleChange = (e:any) => {
    // setProposal((prev) => ({...prev, ['enganche']: ((proposal.economic_proposal * 0.2) - prev.apartado) }))
    setProposal((prev) => ({...prev, [e.target.name]: e.target.value }))
    
  }
  
   useEffect(() => {
     setProposal((prev) => ({...prev, ['enganche']: (prev.economic_proposal * 0.2) - 50000 }))
     setProposal((prev) => ({...prev, ['rest']: prev.economic_proposal - prev.enganche + 50000 }))
     
  }, [proposal.economic_proposal]);
  
  
  return (
    <>
       <div
        className={
          !open
            ? styles.modal_overlay
            : `${styles.modal_overlay} ${styles.open}`
        }
        onClick={closeModal}
      />
      <div className={!open ? styles.modal : `${styles.modal} ${styles.open}`}>
        <div className={styles.header}>
          <div>
            <h2>Realizar una propuesta</h2>
          </div>
          <button>
            <MoreVertical />{" "}
          </button>
        </div>
        
        <form className={styles.form}>
        <h3>Datos personales</h3>
          <div className={styles.field}>
            <label htmlFor="">
            Nombre
            <input type="text" placeholder='Nombre' />            
              
            </label>
          </div>
          
          <div className={styles.field}>
          <label htmlFor="">
            Nacionalidad
              <select name="" id="">
                <option value="">Selecciona una nacionalidad</option>
                {countries.map((state) => (
                  <option value={state.countryName}>{state.countryName}</option>
                ))}
                </select>              
            </label>
          </div>
          <div className={styles.field}>
          <label htmlFor="">
            Correo electronico
              <input type="text" placeholder='Ingresa tu correo' />            
            </label>
          </div>
          <div className={styles.field}>
          <label htmlFor="">
            Telefono
             <input type="text" placeholder='Ingresa tu telefono' />          
            </label>
          </div>
          
          <h3>Propuesta</h3>
          
          <div className={styles.field}>
          <label htmlFor="">
            Propuesta economica
             <input type="text" name='economic_proposal' value={proposal.economic_proposal} placeholder='Ingresa la propuesta economica' onChange={handleChange} />          
            </label>
          </div>
          
          <div className={styles.field}>
          <label htmlFor="">
            Apartado
             <input type="text" value='50,000' readOnly />          
            </label>
          </div>
          
          <div className={styles.field}>
          <label htmlFor="">
            Enganche
             <input type="text" value={proposal.enganche}  readOnly />          
            </label>
          </div>
          
          <div className={styles.field}>
          <label htmlFor="">
            Restante
             <input type="text" value={proposal.rest} readOnly />          
            </label>
          </div>
          {/* <div className={styles.field}>
          <label htmlFor="">
            Plazo
             <input type="text" placeholder='Ingresa la propuesta economica' />          
            </label>
          </div> */}
          
          <h3>Fondeo</h3>
          <div className={styles.field}>
          <label htmlFor="">
            Como piensas fondearlo
              <select>
                <option value="">Efectivo</option>
                <option value="">Efectivo & Crédito</option>
                <option value="">Crypto</option>
                <option value="">Fiat (Efectivo o Crédito) y Crypto</option>
              </select>
            </label>
          </div>
          
          <button className={styles.proposal_btn}>Enviar propuesta</button>
        </form>
      </div> 
    </>
  )
}

export default Modal