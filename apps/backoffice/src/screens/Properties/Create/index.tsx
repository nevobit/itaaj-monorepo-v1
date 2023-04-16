import React, { useState } from "react";
import { Property } from "@itaaj/types";
import { Button, Field, ImageInput, Input, TextEditor } from "@/components";
import styles from "./Create.module.css";
import {useDispatch} from 'react-redux'
import { createProperties } from "@/redux/states";
import { useNavigate } from "react-router-dom";
import { PrivateRoutes } from "@/constant-definitions";
import {v4 as uuid} from 'uuid'
const CreatePropety: React.FC = () => {
  const [property, setProperty] = useState({
    id: uuid(),
    name: "",
    address: "",
    city: "",
    state: "",
    country: "",
    price: 0,
    description: "",
    area: 0,
    garage: 0,
    bedrooms: 0,
    bathrooms: 0,
    antiquity: 0,
    balcony: 0,
    kitcken: 0,
    propertyStatus: "",
    type: "condo",
    createdAt: new Date().toString(),
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const onSubmit = (e: any) => {
    e.preventDefault();
    dispatch(createProperties(property) as any)
    navigate(`/${PrivateRoutes.PROPERTIES}`, {replace: true})
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setProperty((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <Field label="Property Name">
          <Input name="name" onChange={handleChange} />
        </Field>

        <Field label="Address">
          <Input name="address" onChange={handleChange} />
        </Field>

        <Field label="City">
          <Input name="city" onChange={handleChange} />
        </Field>

        <Field label="State">
          <Input name="state" onChange={handleChange} />
        </Field>

        <Field label="Country">
          <Input name="country" onChange={handleChange} />
        </Field>

        <Field label="Price">
          <Input name="price" onChange={handleChange} />
        </Field>
        <Field label="Property description">
          <TextEditor />
        </Field>
      </div>

      <div className={styles.section}>
        <Field label="Area">
          <Input name="area" onChange={handleChange} />
        </Field>

        <Field label="Garage">
          <Input name="garage" onChange={handleChange} />
        </Field>
        <Field label="Bedrooms">
          <Input name="bedrooms" onChange={handleChange} />
        </Field>
        <Field label="Bathrooms">
          <Input name="bathrooms" onChange={handleChange} />
        </Field>
        <Field label="Antiquity">
          <Input name="antiquity" onChange={handleChange} />
        </Field>
        <Field label="Balcony">
          <Input name="balcony" onChange={handleChange} />
        </Field>
        <Field label="Kitchen">
          <Input name="kitchen" onChange={handleChange} />
        </Field>
      </div>
      <div className={styles.sidebar}>
        <div className={styles.section}>
          <ImageInput />
        </div>
        <div className={styles.section}>
          <Field label="Property Status">
            <Input name="propertyStatus" onChange={handleChange} />
          </Field>

          <Field
            label="Type"
            tip="A property can be a House, Apartment, Condo, Townhouse or other."
          >
            <Input name="type" onChange={handleChange} />
          </Field>
        </div>
        <Button
          style={{
            height: 40,
          }}
          onClick={onSubmit}
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default CreatePropety;
