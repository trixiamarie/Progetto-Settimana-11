import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Container } from 'react-bootstrap';
import SongCard from './SongCard';
import { useParams } from 'react-router-dom';

export default function AlbumMain() {
  const [searchResults, setSearchResults] = useState(null);
  const { id } = useParams();

  const search = async () => {
    try {
      const response = await axios.get(
        `https://striveschool-api.herokuapp.com/api/deezer/album/${id}`,
        {
          headers: {
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
            'X-RapidAPI-Key': '9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0',
          },
        }
      );

      if (response) {
        setSearchResults(response.data);
      } else {
        console.error('Error: No data received from the API');
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  useEffect(() => {
    search();
  }, [id]);

  console.log(searchResults);

  return (
    <>
      {searchResults !== null ? (
        <>
        <Container className='ContainerAlbum d-flex'>
        <Container  className='d-flex flex-column align-items-center'>
          <img src={searchResults.cover_xl} alt="Album" style={{height:
          "15rem", width:"15rem"}}/>
          <div className="mt-4 text-center">
            <p className="album-title">{searchResults.title}</p>
          </div>
          <div className="text-center">
            <p className="artist-name">{searchResults.artist.name}</p>
          </div>
          <div className="mt-4 text-center">
            <Button id="btnPlay" className="btn-success" type="button">
              Play
            </Button>
          </div></Container>
          {searchResults.tracks && searchResults.tracks.data && (
            <Container>
              <h2>Tracks</h2>
              {searchResults.tracks.data.map((song, index) => (
              <SongCard song={song} key={index} />
            ))}  
            </Container>
          )}
        </Container></>
      ) : (
        <div>Loading...</div>
      )}
      
    </>
  );
}
