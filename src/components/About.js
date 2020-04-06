import React, { useState } from 'react';
import { Jumbotron, Button, Modal } from 'react-bootstrap';
import resume from '../assets/SoftwareResume.pdf';

function About() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <section id="about">
      <div>
        <header>
          <h1>About</h1>
        </header>
        <Jumbotron className="description">
          <h4>
            A software developer with 10+ years of hospitality and business
            leadership experience. Whether it is workplace dynamics,
            productivity flow, interpersonal team building within the business,
            or building trustful, lasting relationships with customers and
            partners, I find ways to achieve those goals.
          </h4>
          <br />
          <h5>
            I am a career changer. I have personally managed over 50 employees
            as I grew a local business from one to four locations over the span
            of five years. I have a masters degree in English that has
            contributed to my excellent and specific communication skills. I
            have a history as a person unafraid to make changes or take
            calculated risks with both the foresight to think big and the
            follow-through to implement those big changes. I am on course to
            spend my entire life learning, growing, and evolving and I want to
            work for and with a company that has motivations just as
            aspirational as my own.
          </h5>
          <br />
          <h4>
            As a human, I am a horsewoman, a reader, a writer, a traveller, an
            excellent friend, a voice of reason, a lazy laundress, and a
            mediocre cook.
          </h4>
          <Button className="about-button" variant="info" onClick={handleShow}>
            Contact Me
          </Button>{' '}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Contact Me</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <ul>
                <p>Phone Number: (931)510-5866</p>
                <p>Email: tiffhuddleston@gmail.com</p>
                <p>
                  Click Here to Visit&nbsp;
                  <a
                    href="https://www.linkedin.com/in/tiffhuddleston/"
                    target="_blank"
                    style={{ color: 'teal' }}
                  >
                    LinkedIn
                  </a>
                </p>
              </ul>
            </Modal.Body>
          </Modal>
          <Button variant="info" className="about-button">
            <a href={resume} target="_blank" style={{ color: 'white' }}>
              See My Resume
            </a>
          </Button>
        </Jumbotron>
      </div>
    </section>
  );
}

export default About;
