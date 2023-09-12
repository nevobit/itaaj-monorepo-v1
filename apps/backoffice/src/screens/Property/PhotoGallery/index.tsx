import { ImageInput } from '@/components'
import React from 'react'

const PhotoGallery = () => {
  return (
    <div>
        <h3>Photos gallery</h3>
        <p>Organize and display your photos</p>
        <ImageInput 
            // preview={url || placeholderImage}
            // onChange={(e) => addImages(e)}
            // loading={isLoading}
            // src={url || placeholderImage}
            alt=""
            width={300}
            height={300}
          />
    </div>
  )
}

export default PhotoGallery