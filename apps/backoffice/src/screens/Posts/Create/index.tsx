import React, { useState } from "react";
import { Button, Field, ImageInput, Input, TextEditor } from "@/components";
import styles from "./Create.module.css";
import {useDispatch} from 'react-redux'
import { createPosts, createProperties } from "@/redux/states";
import { useNavigate } from "react-router-dom";
import { PrivateRoutes } from "@/constant-definitions";
import {v4 as uuid} from 'uuid'
import { useUploadImage } from "@/hooks/useUploadImage";
import { categories } from "./categories";

const placeholderImage = 'https://via.placeholder.com/300x300';


const CreatePost: React.FC = () => {
  const { isLoading, url, uploadImage } = useUploadImage();
  
  const [post, setPost] = useState({
    id: uuid(),
    title: '',
    image: '',
    category: '',
    description: '',
    content: '',
    createdAt: new Date().toString(),
  });
  
  const addImage = (e: any) => {
    uploadImage(e?.target?.files![0]);
  };
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const onSubmit = (e: any) => {
    e.preventDefault();

    dispatch(createPosts({...post, image: url}) as any)
    navigate(`/${PrivateRoutes.POSTS}`, {replace: true})
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setPost((prev) => ({ ...prev, [name]: value }));
  };
  
  return (
    <div className="screen screen-100">
    
     <div className="grid_page">
      <div className={styles.elements}>
      <Field label="Title" tip="Write a title for your post">
            <Input value={post.title} name="title" onChange={handleChange} />
          </Field>
          <Field label="Category">
            <select name="category">
              {categories.map((category) => (                
              <option key={category.value} value={category.value}>{category.name}</option>
              ))}

              </select>
          </Field>
          <Field label="Image">
            <ImageInput  
              preview={url || placeholderImage}
              onChange={(e) => addImage(e)}
              loading={isLoading}
              src={url || placeholderImage}
              alt=""
             />
          </Field>
          <Field label="Description" tip="Write a description">
            <textarea name="description" value={post.description} onChange={handleChange} cols={40} ></textarea>
          </Field>
      </div>
      <div>
        <Field label="Content">
        <TextEditor className="page" onChange={(e) => setPost({...post, content: e}) } />
          </Field>
        </div>
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
  );
};

export default CreatePost;
