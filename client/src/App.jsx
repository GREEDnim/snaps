import React from 'react'
import Home from './components/Home/Home'
import Loading from './components/Loading/Loading';
import { useState,useEffect } from 'react';
import { checkServerStarted } from './API';
export default function App () {
    const [isServerReady, setServerReady] = useState(false);

  useEffect(() => {
        async function renderWhenLoad(){
            const started=await checkServerStarted();
            setServerReady(started);
        }
        renderWhenLoad();
  }, []);

  return (
        isServerReady? <Home/>: <Loading/>
  )
}
