import React, { useEffect, useState } from "react";
import axios from "axios";
import SongAlbumCard from "./SongAlbumCard";
import ArtistCard from "./ArtistCard";

export default function ArtistTracklist(props) {
  const [searchResults, setSearchResults] = useState(null);

  const search = async () => {
    try {
      const response = await axios.get(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${props.Artist}`,
        {
          headers: {
            "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
            "X-RapidAPI-Key":
              "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
          },
        }
      );

      if (response) {
        setSearchResults(response.data);
      } else {
        console.error("Error: No data received from the API");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  useEffect(() => {
    search();
  }, []);

  console.log(searchResults && searchResults.data && searchResults.data[0]);
  console.log(props.Artist);

  return (
    <>
    {searchResults !== null ? (
      <ArtistCard
        artist={searchResults.data[0].artist}
        Followers={props.Followers}
      />
    ) : (
      <div>Loading...</div>
    )}

    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {searchResults !== null ? (
        searchResults.data.map((album, index) => (
          <SongAlbumCard album={album} index={index} />
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
    </>
  );
}
