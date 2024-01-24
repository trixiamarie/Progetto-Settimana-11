import React from 'react'
import { useSelector } from 'react-redux'

import SongCard from './SongCard';
import { Container } from 'react-bootstrap';


export default function LikedSongs(){
    const dati = useSelector((state) => state.reducer);
    console.log(dati)
    return(
        <>
        <Container className='ContainerAlbum mt-5'>
        <h2 className=' '>Your Library</h2>
      {dati.map((x,index) => <SongCard song={x} key={index}/>)}
      </Container>
      </>
    )
       
}