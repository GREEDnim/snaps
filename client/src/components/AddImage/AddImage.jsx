import './AddImage.css'
import { useState,useEffect, useContext } from 'react'
import { TagsInput } from "@enipx/react-tags-input"
import { DataContext } from '../../Context/Context';
import { postImage } from '../../API/images';
export default function AddImage(){

    const {setGetImage,allImages,setAllImages} = useContext(DataContext);
    const styleInput={
        height:"55px",
        width:"552px",
        borderRadius:"12px",
        border:' 1px solid #4F4F4F',
        paddingLeft:"20px",
        boxSizing:'border-box',
    }
    const[tags,setTags]=useState([]);
    const[url,setUrl]=useState('');

    function addTag(tag){
        console.log(tag);
        setTags([...tags,tag]);
    }
    function removeTag(tag){
        console.log(tag)
        setTags(tags.filter((ele)=>tag!=ele))
    }
    function addUrl(e){
        setUrl(e.target.value);
    }

    async function submitImage(){

        const image=await postImage({url,tags});
        console.log(allImages);
        setAllImages([image,...allImages]);
        quit();

    }

    function quit(){

        setTags([]);
        setUrl('');
        setGetImage(false);

    }
    return(
        <>
        <div className="input-container">
            <div className="input-text"> Add a new photo</div>
            <label  htmlFor='input-tags' >Tags</label>
            <TagsInput
                id='input-tags'
                style={styleInput}
                placeholder='enter tags to add'
                onAdd={addTag}
                onRemove={removeTag}
            />
            <label htmlFor='input-url'>Photo Url</label>
            <input 
            id='input-url' 
            style={styleInput} 
            onChange={addUrl}
            placeholder="enter photo's url"
            ></input>

            <div className='control-buttons'>
            <button className='cancel button' onClick={quit}>Cancel</button>
            <button className='submit button' onClick={submitImage}>Submit</button>
            </div>
            
        </div>

        <div className=" input-overlay overlay"></div>
        </>
        
    )
}