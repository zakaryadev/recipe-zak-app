import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar className="text-black" bg="warning" variant="light">
      <Container>
        <Link className="navbar-brand" to={"/"}>
          React Food
        </Link>
        <Nav className="me-auto">
          <Link className="nav-link" to="/search">
            Search
          </Link>
          <Link className="nav-link" to="/about">
            About
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
