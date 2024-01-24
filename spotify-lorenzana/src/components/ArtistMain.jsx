import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ArtistTracklist from './ArtistTracklist';
import MainNavbar from './MainNavbar';


export default function ArtistMain() {
  const [searchResults, setSearchResults] = useState(null);
  const { id } = useParams();

  const search = async () => {
    try {
      const response = await axios.get(
        `https://striveschool-api.herokuapp.com/api/deezer/artist/${id}`,
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
    <MainNavbar/>
    <Container style={{marginLeft:"30rem"}}>
    {searchResults !== null ? <ArtistTracklist Artist={searchResults.name} Followers={searchResults.nb_fan}/> : <div>Loading</div>}
    </Container>
    </>
  );
}
