import React from 'react'
import logo from '../../assets/my_unsplash_logo.svg'
import Search from '../Search/Search'
import { useContext } from 'react'
import { DataContext } from '../../Context/Context'

import './Header.css'
function Header() {

  const {setGetImage}=useContext(DataContext)
  return (
    <div className='header' >
        <img className='header-logo' src={logo} />
        <Search></Search>
        <button  onClick={()=>{setGetImage(true)}} className='add-pic-button' >Add a photo</button>
    </div>
  )
}

export default Header