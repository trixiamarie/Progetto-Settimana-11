import React from 'react';
import { Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function SongAlbumCard(props) {
  return (
    <div key={props.index}  xs={12} sm={6} md={4} lg={3} className="mb-4 text-center">
    <Container style={{height:"20rem", width:"20rem"}}>
      <Link to={`/album_page.html?id=${props.album.album.id}`}>
        <Image
          className="img-fluid"
          src={props.album.album.cover_medium}
          alt="1"
          style={{height: "15rem", width: "15rem"}}
        />
      </Link>
      <p>
        <Link to={`/albumpage/${props.album.album.id}`}>
          Track: "{props.album.title.length < 16
            ? `${props.album.title}`
            : `${props.album.title.substring(0, 16)}...`}"
        </Link>
        <Link to={`/artistpage/${props.album.artist.id}`}>
          Artist: {props.album.album.title}
        </Link>
      </p>
      </Container>
    </div>
  );
}