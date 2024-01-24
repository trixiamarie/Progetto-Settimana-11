import React from 'react';
import AlbumRowHomepage from './AlbumRowHomepage';
import { Col, Container, Row } from 'react-bootstrap';
import MainNavbar from './MainNavbar';
import { useParams } from 'react-router-dom';

export default function MainSearchHomepageRow() {

  let { query } = useParams()

  return (
    <>
  <MainNavbar/>
    <Container fluid className="my-5">
      <Row>
        <Col md={7} className="offset-md-3 mainPage">
          
          <Row>
            <Col md={10}>
            { query ? <AlbumRowHomepage Name={"Search Result"} Call={query}/> : null }
            </Col>
          </Row>
          <AlbumRowHomepage Name={"Rock"} Call={"rock"} />
          <AlbumRowHomepage Name={"Pop Culture"} Call={"popculture"} />
          <AlbumRowHomepage Name={"HipHop"} Call={"hiphop"} />
        </Col>
      </Row>
    </Container>
    </>
  );
}
