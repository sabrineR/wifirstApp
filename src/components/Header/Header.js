import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>Star Wars</Navbar.Brand>
        <Nav className="me-auto">
          <NavLink
            exact
            to="/"
            className="nav-link"
            activeClassName="selected-link"
          >
            Accueil
          </NavLink>

          <NavLink
            exact
            to="/films"
            className="nav-link"
            activeClassName="selected-link"
          >
            Films
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};
