import React, {useState} from "react";
import { Container, InputGroup, Nav, NavItem, NavLink, Navbar, NavbarBrand, Button, Form, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import HouseFill from "react-bootstrap-icons/dist/icons/house-fill";
import BookFill from "react-bootstrap-icons/dist/icons/book-fill";
import { Link, Navigate } from "react-router-dom";
import SearchResults from "./SearchResults";
import { useDispatch } from "react-redux";
import { searchterm } from "../actions/searchResultsAction";
import { useNavigate } from "react-router-dom";

export default function VerticalSidebar() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const dispatch = useDispatch()

  return (
    <Container className="col-2">
      <Navbar
        className="navbar navbar-expand-md navbar-white bg-navbar fixed-left justify-content-between"
        id="sidebar"
      >
        <Container className="nav-container d-flex flex-column">
          <NavbarBrand className="navbar-brand" as={Link} to={"/"}>
            <Image
              src="logo/Spotify_Logo.png"
              alt="Spotify_Logo"
              width="131"
              height="40"
            />
          </NavbarBrand>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <Nav>
              <NavItem>
                
                  <NavLink  className="nav-item nav-link" as={Link} to={'/'}>
                    <HouseFill />
                    &nbsp; Home
                  </NavLink>
                
                
                  <NavLink className="nav-item nav-link" as={Link} to={'/library'}>
                    <BookFill />
                    &nbsp; Your Library
                  </NavLink>
                
                
                  <InputGroup className="mt-3">
                  <Form.Control
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                  className="mb-2"
                  value={searchTerm}
                  onChange={handleInputChange}
                />
                <Button
                  variant="outline-secondary"
                  id="button-addon2"
                  className="mb-2"
                  onClick={() => {dispatch(searchterm(searchTerm)); navigate(`/search/${searchTerm}`)}}
                >GO</Button>
                </InputGroup>
                
              </NavItem>
              
            </Nav>
          </div>
            
          <SearchResults/>
        </Container>

        <Container className="nav-btn d-flex flex-column">
          <Button className="signup-btn">
            Sign Up
          </Button>
          <Button className="login-btn">
            Sign Up
          </Button>
          <p><a href="#">Cookie Policy</a> |
          <a href="#"> Privacy</a></p>
        </Container>
      </Navbar>
    </Container>
  );
}
