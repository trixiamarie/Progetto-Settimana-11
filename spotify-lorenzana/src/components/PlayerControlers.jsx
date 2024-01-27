import React from "react";
import "../App.css";
import { Col, Container, ProgressBar, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function PlayerControls() {
  const selectedsong = useSelector((state) => state.songclick);

  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row>
        <Col md={{ span: 2, offset: 3 }}>
          <div className="d-flex">
            <img src={selectedsong.album.cover_small} />
            <p>
              Title: <span>{selectedsong.title}</span>
              <br />
              Artist: <span>{selectedsong.artist.name}</span>
            </p>
          </div>
        </Col>
        <Col md={{ span: 7 }} className="d-flex flex-column align-items-center">
          <Row className="rowPlayer playerControls">
            <a href="#">
              <img src="playerbuttons/Shuffle.png" alt="shuffle" />
            </a>
            <a href="#">
              <img src="playerbuttons/Previous.png" alt="shuffle" />
            </a>
            <a href="#">
              <img src="playerbuttons/Play.png" alt="shuffle" />
            </a>
            <a href="#">
              <img src="playerbuttons/Next.png" alt="shuffle" />
            </a>
            <a href="#">
              <img src="playerbuttons/Repeat.png" alt="shuffle" />
            </a>
          </Row>
          <Row className=" playBar py-3">
            <Col>
              <div className="progress">
                <ProgressBar
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></ProgressBar>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
