import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row } from "react-bootstrap";
import AlbumCard from "./AlbumCard";

export default function AlbumRowHomepage(props) {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    search();
  }, [props.Call]);

  const search = async () => {
    try {
      const response = await axios.get(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${props.Call}`,
        {
          headers: {
            "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
            "X-RapidAPI-Key":
              "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
          },
        }
      );

      if (response) {
        setSearchResults(response.data.data.slice(0, 4));
      } else {
        console.log("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  console.log(searchResults);

  return (
    <Row className="mt-4">
      <div id={props.Name}>
        <h2>{props.Name}</h2>
        <Row id="rock">
          {searchResults.map((songInfo, index) => (
            <AlbumCard album={songInfo} key={index} />
          ))}
        </Row>
      </div>
    </Row>
  );
}
