import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";

export class Navigation extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Nav className="me-auto">
            <NavLink to="/" className="d-inline p-2 bg-dark text-white">
              Home
            </NavLink>
            <NavLink to="/employee" className="d-inline p-2 bg-dark text-white">
              Employee
            </NavLink>
            <NavLink
              to="/department"
              className="d-inline p-2 bg-dark text-white"
            >
              Department
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}
