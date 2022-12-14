import React from 'react'
import Axios from 'axios'
import { useState,useEffect } from 'react';
import SingleImage from '../components/singleImage'
import { useGlobalContext } from '../globalContext';
export default function History() {
  const [images, setimages] = useState('');
  const {userId,imageList,setImageList} = useGlobalContext()
  const fetchAllData = async()=>{
    try {
      const res = await Axios.get('http://localhost:5000/image/all',{
        headers:{userId:userId}
      })
      const values = res.data.images
      setImageList(values)
    } catch (error) {
        
    }
  }
  useEffect (()=>{
    fetchAllData()
  },[])
  return (
    <div className='image-list'>
      {imageList.map((item) => {
        const searchTerm = item.prompt
        const imageUrl = item.src
        return <SingleImage id = {item._id} props ={{searchTerm,imageUrl}}></SingleImage>;
      })}
    </div>
  );
}
