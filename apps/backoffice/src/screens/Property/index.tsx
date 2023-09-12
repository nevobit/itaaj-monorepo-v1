import { Button, Field, Input } from '@/components'
import styles from './Property.module.css'
import { Codesandbox, Columns, File, FileText, Grid, Home, Image, Info, List, Map, MousePointer, Sunset, ThumbsDown, Video } from 'react-feather'
import { useState } from 'react'
import PhotoGallery from './PhotoGallery'
import Floorplants from './Floorplants'

const Property = () => {

    const [options, setOptions] = useState('overview');
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <h3><Info color='rgba(0, 0, 0, 0.65)' size={20} /> Property info</h3>
            <div className={styles.buttons}>
                <Button variant='cancel'>View</Button>
                <Button>Save</Button>
            </div>

        </div>
        <div className={styles.main}>
        <div className={styles.options}>
            <ul>
                <li><Grid color='rgba(0, 0, 0, 0.65)' size={18} /> <button onClick={() => setOptions('overview')}>Overview</button></li>
                <li><List color='rgba(0, 0, 0, 0.65)' size={18} />     <button> Details       </button> </li>
                <li><Image color='rgba(0, 0, 0, 0.65)' size={18} />       <button onClick={() => setOptions('photo')}> Photo Gallery </button> </li>
                <li><Video color='rgba(0, 0, 0, 0.65)' size={18} />       <button> Videos        </button> </li>
                <li><Codesandbox color='rgba(0, 0, 0, 0.65)' size={18} /> <button> 3D Tours      </button> </li>
                <li><Columns color='rgba(0, 0, 0, 0.65)' size={18} />     <button onClick={() => setOptions('floor')}> Floorplans    </button> </li>
                <li><FileText color='rgba(0, 0, 0, 0.65)' size={18} />    <button> Documents     </button> </li>
            </ul>
            
        </div>
        {options == 'overview' && (

        <div className={styles.content}>
            <h3>General details</h3>
            <p className={styles.subtitle}>A brief description of these settings</p>

            <Field label='Street'>
                <Input />
            </Field>

            <div className={styles.col}>

            <Field label='City'>
                <Input />
            </Field>

            <Field label='State'>
                <Input />
            </Field>
            </div>

            <div className={styles.col}>

            <Field label='Zipcode'>
                <Input />
            </Field>

            <Field label='Country'>
                <Input />
            </Field>
            </div>

            <div className={styles.col}>

            <Field label='Property price (From)'>
                <Input />
            </Field>


            <Field label='Property price (To)'>
                <Input />
            </Field>

            
            </div>

            <h3>Property details</h3>
            <p className={styles.subtitle}>A brief description of these settings</p>
            <Field label='Property name'>
                <Input />
            </Field>

            <div className={styles.col}>

            <Field label='Property type'>
                <Input />
            </Field>

            <Field label='Antiquity'>
                <Input />
            </Field>
            </div>

            <div className={styles.divider}>

            <Field label='Property description'>
            <textarea cols={30} > 

            </textarea>
            </Field>
            </div>
        </div>
        )}

            {options == 'photo' && (
                <PhotoGallery />
            )}

{options == 'floor' && (
                <Floorplants />
            )}
        </div>
      
    </div>
  )
}

export default Property