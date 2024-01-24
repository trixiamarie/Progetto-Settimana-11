import React from "react";
import '../App.css'
import { Col, Container, ProgressBar, Row } from "react-bootstrap";

export default function PlayerControls() {
  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row>
        <Col className="col-lg-10 offset-lg-2">
          <Row className="rowPlayer">
            <div
              className="col-6 col-md-4 col-lg-2 offset-1  playerControls mt-1"
            >
              <div className="row">
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
              </div>
            </div>
          </Row>
          <Row className="justify-content-center playBar py-3">
            <Col className="col-8 col-md-6">
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
