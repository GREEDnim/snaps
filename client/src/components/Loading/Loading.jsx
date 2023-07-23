import LoadingSpin from "react-loading-spin";
import React from 'react'

export default function Loading() {
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <LoadingSpin
            duration="2s"
            width="50px"
            timingFunction="ease-in-out"
            direction="alternate"
            size="500px"
            primaryColor="yellow"
            secondaryColor="red"
            numberOfRotationsInAnimation={2}
        />
    </div>
    
  )
}
