import React from 'react'
import { useGlobalContext } from '../globalContext';
import './singleImage.css'
function SingleImage({props}) {
  const {imageUrl,searchTerm} = useGlobalContext()
  return (
    <div className='image-container'>
      <img src={imageUrl} alt='asdf' className='image'></img>
      <h4>{searchTerm}</h4>
    </div>
  );
}

export default SingleImage