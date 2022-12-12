import React from "react";
import { Navbar, Container, Nav, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Foooter() {
  return (
    <Navbar className="text-black" bg="warning" variant="light">
      <Container>
        <Row style={{ width: "100%" }}>
          <Col sm={8}>
            <Link className="navbar-brand" to={"/"}>
              React Food
            </Link>
          </Col>
          <Col sm={4}>
            <Nav className="justify-content-end">
              <Link to={"/"} className="nav-link">
                &copy; All rights reserved {new Date().getFullYear()}
              </Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default Foooter;
