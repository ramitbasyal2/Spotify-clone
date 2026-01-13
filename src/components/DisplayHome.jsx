import React from "react";
import Navbar from "./Navbar";
import { albumsData   } from "../assets/assets";
import { songsData } from "../assets/assets";
import AlbumItem from "./AlbumItem";
import SongItem from "./SongItem";


const DisplayHome = () => {
  return (
    <div>
      <Navbar />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Featured charts</h1>
        <div className="flex overflow-auto">
               {albumsData.map((item,index)=>{
            return <AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />})}
        </div> 
      </div>
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Todays biggest hits</h1>
        <div className="flex overflow-auto">
               {songsData.map((item,index)=>{
            return <SongItem key={index} name={item.name} image={item.image} id={item.id} desc={item.desc} />  })}
        </div> 
      </div>

    </div>
  );
};

export default DisplayHome;
