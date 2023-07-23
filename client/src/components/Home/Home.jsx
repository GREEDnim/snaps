import { Cards } from '../Cards/Cards'
import './Home.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { DataContext } from '../../Context/Context'
import { useEffect,useState } from 'react'
import { getAllImages } from '../../API/images'

import AddImage from '../AddImage/AddImage'
function Home() {

  const[curImages,setCurImages]=useState([]);
  const[allImages,setAllImages]=useState([]);
  const [getImage,setGetImage]=useState(false);

  let fetchedImages=[];
  useEffect(()=>{
    async function fetchImages(){
        fetchedImages=await getAllImages() || [];
        setAllImages([...fetchedImages])
    }
    fetchImages();
},[]);

    useEffect(()=>{
      setCurImages(allImages);
    },[allImages])

  
  return (
    <DataContext.Provider value={{curImages,setCurImages,allImages,setAllImages,getImage,setGetImage}} >
      <div className='container'>
          <Header></Header>
          {getImage && <AddImage/> }
          <Cards></Cards>
          <Footer></Footer>
      </div>    
      
    </DataContext.Provider>
      
    
  )
}

export default Home
