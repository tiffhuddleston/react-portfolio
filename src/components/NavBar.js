import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar
      className="nav-bar"
      fixed="top"
      collapseOnSelect
      expand="md"
      bg="dark"
      variant="dark"
    >
      <Navbar.Brand href="#home">Tiffany Huddleston</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About Me</Nav.Link>

          <Nav.Link href="#mywork">My Work</Nav.Link>
          <Nav.Link href="#skills">Skills</Nav.Link>
          <Nav.Link href="#blog">Blog</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
