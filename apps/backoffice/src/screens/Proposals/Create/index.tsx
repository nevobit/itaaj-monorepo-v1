import React, { useEffect, useState } from "react";
import { Button, Field, ImageInput, Input, Layout, TextEditor } from "@/components";
import styles from "./Create.module.css";
import {useDispatch, useSelector} from 'react-redux'
import { createProperties, resetProperties } from "@/redux/states";
import { useNavigate } from "react-router-dom";
import { PrivateRoutes } from "@/constant-definitions";
import {v4 as uuid} from 'uuid'
import { useUploadImage } from "@/hooks/useUploadImage";
import countries from "@/utilities/countries";
import { AppStore } from "@/redux/store";
const placeholderImage = 'https://via.placeholder.com/300x300';



export enum PropertyType {
  HOUSE= 'house',
  APARTAMENT= 'apartament',
  CONDO= 'condo',
  TOWNHOUSE= 'townhouse',
  OTHER = 'other'
 }
 
const CreatePropety: React.FC = () => {
  const { isLoading, url, uploadImage, urls } = useUploadImage();
  
  const { loading, error, success } = useSelector((state: AppStore) => state.properties); 
  const [property, setProperty] = useState({
    id: uuid(),
    name: "",
    address: "",
    city: "",
    state: "",
    country: "Mexico",
    price: 0,
    description: "",
    area: {},
    images: [],
    garage: 0,
    bedrooms: 0,
    bathrooms: 0,
    antiquity: 0,
    balcony: 0,
    kitcken: 0,
    propertyStatus: "New",
    type: "condo",
    createdAt: new Date().toString(),
    category: "general",
    partner: ""
  });
  
  const addImages = (e: any) => {
    uploadImage(e?.target?.files![0]);
};

  const [amenities, setAmenities] = useState<any[]>([]);
  const addAmenities = () => {
    const amenity = {
      id: Date.now().toString(),
      text: ''
    }
    
    setAmenities([...amenities, amenity])
  }

  const handleText = (e:any, id:string) => {
    e.preventDefault();
    const index = amenities.findIndex((a:any) => a.id == id)
    amenities[index].text = e.target.value;
  }
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const onSubmit = (e: any) => {
    e.preventDefault();
    const newAmenities: string[] = []
    amenities.map(amenity => {
      newAmenities.push(amenity.text)
    })
    dispatch(createProperties({...property, images: urls, amenities: newAmenities}) as any)
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setProperty((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleChangeArea = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProperty((prev) => ({ ...prev, area: { ...prev.area, [name]: value}}));
};


useEffect(() => {
  if(success){
    dispatch(resetProperties())
    navigate(`/${PrivateRoutes.PROPERTIES}`, {replace: true})    
  }
}, [dispatch, navigate, success])

  return (
    <Layout>  
    <div className={styles.container}>
      
      <div>
        
      <div className={styles.station}>
        <h3>Basic information</h3>
        <p>Describe the property. you can see this information in ItaajRealty</p>
        <Field label="Property Name">
          <Input name="name" onChange={handleChange} />
        </Field>

        <Field label="Property description">
          <TextEditor   onChange={(e) =>
                                setProperty({
                                    ...property,
                                    description: e,
                                })
                            } />
        </Field>
      </div>
      
      <div className={styles.station}>
      <h3>Location</h3>
          <p>Add all data of location of the property</p>
          
        <div className={styles.grid}>
          
      <Field label="Address">
          <Input name="address" onChange={handleChange} />
        </Field>

        <Field label="City">
          <Input name="city" onChange={handleChange} />
        </Field>

        <Field label="State">
          <Input name="state" onChange={handleChange} />
        </Field>
        
        <Field label="Neighborhood">
          <Input name="neighborhood" onChange={handleChange} />
        </Field>

        <Field label="Country">
          <select name="country" defaultValue={'Mexico'} onChange={handleChange} >
            {countries.map((country) => (
              <option key={country.countryName} value={country.countryName}>{country.countryName}</option>
            ))}
          </select>
        </Field>
        
        <Field label="Street">
          <Input name="street"  onChange={handleChange} />
        </Field>
        
        <Field label="External Number" >
          <Input name="external_number" onChange={handleChange} />
        </Field>
        
        <Field label="Internal Number">
          <Input name="internal_number" onChange={handleChange} />
        </Field>
        </div>
        
      </div>
      
      <div className={styles.station}>
        <h3>Property Features</h3>
        <p>Add features to the property</p>
        <div className={styles.grid}>
          <Field label="Bedrooms">
          <Input name="bedrooms" onChange={handleChange} />
        </Field>
        
        <Field label="Bathrooms">
          <Input name="bathrooms" onChange={handleChange} />
        </Field>
        
        <Field label="Antiquity">
          <Input name="antiquity" onChange={handleChange} type="number" />
        </Field>
 
          </div>
      </div>
      
      <div className={styles.station}>
      <h3>Dimensions</h3>
      <p>Specify the dimensions of the property</p>
      <div className={styles.grid}>
        
      <Field label="Land Area">
          <Input name="land_area" onChange={handleChangeArea} />
        </Field>
        
        <Field label="Building Area">
          <Input name="building_area" onChange={handleChangeArea} />
        </Field>
        
        <Field label="Total Area">
          <Input name="total_area" onChange={handleChangeArea} />
        </Field>
      </div>
        
      </div>
      </div>
      <div>
        
        <div className={styles.station}>
          <h3>Image</h3>
          <p>Upload an image for the property.</p>
          <ImageInput 
             preview={url || placeholderImage}
             onChange={(e) => addImages(e)}
             loading={isLoading}
             src={url || placeholderImage}
             alt=""
             width={300}
             height={300}
          />
             <div className={styles.preview_container}>
                            {urls?.map((image) => (
                                <img key={image} className={styles.preview_img} src={image} alt="" />
                            ))}
                        </div>
        </div>
        
        <div className={styles.station}>
          <h3>Others</h3>
          <Field label="Price">
          <Input name="price" onChange={handleChange} />
        </Field>
        
        <Field label="Property Status">
          <select name="propertyStatus" defaultValue='New' onChange={handleChange} >
            <option value="New">New</option>
            <option value="Used">Used</option>
            <option value="UsedLikeNew">Used Like New</option>
          </select>
            <Input  />
          </Field>
          
          <Field
            label="Type"
            tip="A property can be a House, Apartment, Condo, Townhouse or other."
          >
            <select name="type" onChange={handleChange} >
            {Object.values(PropertyType).map((type) => (
            <option key={type} value={type}>{type.toUpperCase()}</option>
            ))}
          </select>
          </Field>
          
          <Field
            label="Partner"
          >
            <Input name="partner" onChange={handleChange} />
          </Field>
          
          <Field label="Property Category">
            <select name="category" onChange={handleChange}>
              <option value="general">General</option>
              <option value="exclusive">Exclusive</option>
              <option value="investment">Investment</option>
            </select>
          </Field>
        </div>
        
        <div className={styles.station}>
        <h3>Amenities</h3>
          
        <Field label="Amenities" error={error} >
          {amenities.map((amenity) => (
            <div 
            key={amenity}
            style={{
              marginBottom: 10
            }}>
            <Input onChange={(e) => handleText(e, amenity.id)} />
            </div>
  
          ))}
          <button className={styles.btn_add} onClick={addAmenities}>Add Amenity</button>
          </Field>
        </div>
        <Button
          style={{
            width: '100%',
            height: 40,
          }}
          onClick={onSubmit}
          loading={loading}
        >
          Save
        </Button>
        </div>
       
    </div>
    </Layout>
    
  );
};

export default CreatePropety;
