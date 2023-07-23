import React, { useContext } from 'react'
import { useState,useEffect } from 'react'
import { TagsInput } from "@enipx/react-tags-input"
import { DataContext } from '../../Context/Context';

function Search() {

    const[tags,setTags]=useState([]);
    const {allImages,setCurImages,}=useContext(DataContext);

    useEffect(()=>{
        changeDisplayCards();
    },[tags])

    

    let checkSubset = (parentArray, subsetArray) => {
        let ans= subsetArray.every((el) => {
            return parentArray.includes(el)
        })
        return ans;
    }
    function changeDisplayCards(){
        setCurImages(allImages.filter((img)=>checkSubset(img.tags,tags) ));
    }

    function addTag(tag){
        console.log(tag);
        setTags([...tags,tag]);
    }
    function removeTag(tag){
        console.log(tag)
        setTags(tags.filter((ele)=>tag!=ele))
    }
    return (
        <TagsInput
          placeholder='enter tags to search'
          onAdd={addTag}
          onRemove={removeTag}
          style={{width:'40%',wordWrap:"normal"}}
          tagStyle={{
          }}
        
        />
      )

}

export default Search