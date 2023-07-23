import React from 'react'
import './Card.css'
import { useState } from 'react'
import { deleteImage } from '../../../API/images';
import { useContext } from 'react';
import { DataContext } from '../../../Context/Context';
function Card({image,span}) {

  // console.log(image);
  const {allImages,setAllImages}=useContext(DataContext);

  async function deleteSelectedImage(){
      await deleteImage(image);
      setAllImages(removeImage(image));
  }
  function removeImage(image){
      return allImages.filter((ele)=>image._id!=ele._id);
  }
  const[hover,setHover]=useState(false);
  const cd=`card-delete ${hover?"":'none'}`;
  const ct=`card-tags ${hover?"":'none'}`;
  const overlay=`overlay  ${hover?"":'none'}`;

  return (
    <div
     className="card-container"
     style={{ gridRow:`span ${span}`, backgroundImage: `url(${image.url})` }}
     onMouseEnter={() => setHover(true)}
     onMouseLeave={() => setHover(false)}
    >
      <button 
        onClick={deleteSelectedImage}
        className={cd} >
          delete
      </button>
      <div 
        className={ct}>
          {image.tags.map((ele)=>ele+" ")}
      </div>
      <div className={overlay}></div>

    </div>
  )
}

export default Card