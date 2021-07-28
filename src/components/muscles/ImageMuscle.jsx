import React, { useEffect } from 'react'
import { useImage } from '../../hooks/useImage';

const ImageMuscle = ({nombre}) => {


    const {image, getImage} = useImage("muscles");


    useEffect(() => {
        getImage(nombre);
    }, [])

    

    return (
        <div style={{
            flex: 1
        }}>
             <img
        src={image}
        alt=""
        style={{
          
          width: 150,
          height: 150,
        }}
      />
        </div>
    )
}

export default ImageMuscle
