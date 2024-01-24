import React from 'react'
import { Row } from 'react-bootstrap'

export default function MainNavbar() {
  return (
    <Row className="mainLinks d-none d-md-flex m-5">
            <a href="#">TRENDING</a>
            <a href="#">PODCAST</a>
            <a href="#">MOODS AND GENRES</a>
            <a href="#">NEW RELEASES</a>
            <a href="#">DISCOVER</a>
          </Row>
  )
}
