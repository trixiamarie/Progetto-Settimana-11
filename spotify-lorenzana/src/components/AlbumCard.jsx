import React from "react";
import { Col, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AlbumCard(props) {
  return (
    <Col key={props.index} className="col text-center">
      <Container style={{ height: "20rem", width: "20rem" }}>
        <Link to={`/albumpage/${props.album.album.id}`}>
          <Image
            className="img-fluid"
            src={props.album.album.cover_medium}
            alt="1"
            style={{ height: "15rem", width: "15rem" }}
          />
        </Link>
        <p>
          <Link to={`/albumpage/${props.album.album.id}`}>
            Album: "
            {props.album.album.title.length < 16
              ? `${props.album.album.title}`
              : `${props.album.album.title.substring(0, 16)}...`}
            "
          </Link>
          <Link to={`/artistpage/${props.album.artist.id}`}>
            Artist: {props.album.artist.name}
          </Link>
        </p>
      </Container>
    </Col>
  );
}
