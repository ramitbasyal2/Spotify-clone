import React, { useEffect, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'
import { albumsData } from '../assets/assets'

const Display = () => {
 
  const  displayRef = useRef()
  const location = useLocation(); //to get the exact location route after items click
  const isAlbum = location.pathname.includes("album");
  const albumId = isAlbum ? location.pathname.slice(-1) : "" //this code help us to get the album id
  const bgColor = albumsData[Number(albumId)].bgColor;
  
  //setting the background color od the album using ref and when the web gets render
  useEffect(()=>{
    if(isAlbum){
      displayRef.current.style.background = `linear-gradient(${bgColor},#121212)`
    }else{
      displayRef.current.style.background = `#121212`
    }
  })
  
  

  return (
    <div ref={displayRef} className='w-[100%] m-2 pt-4 p-2 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0 '>
       <Routes>
           <Route path='/' element={<DisplayHome/>}/>
           <Route path='/album/:id'element={<DisplayAlbum/>} />
       </Routes>
    </div>
  )
}

export default Display