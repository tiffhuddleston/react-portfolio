import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

function NavBar() {
  return (
    <header className="nav-bar">
      <Container>
        <Navbar expand="lg">
          <nav>
            <a className="topic" href="#home">
              Home
            </a>
            <a className="topic" href="#about">
              About Me
            </a>
            <a className="topic" href="#mywork">
              My Work
            </a>
            <a className="topic" href="#skills">
              Skills
            </a>
            <a className="topic" href="#blog">
              Blog
            </a>
          </nav>
        </Navbar>
      </Container>
    </header>
  );
}

export default NavBar;
