import React, { useState } from 'react';
import { Carousel, Card, Button, ButtonGroup, Modal } from 'react-bootstrap';
import rickAndMorty from '../images/RickandMorty2.png';
import gatherUp from '../images/GatherUp.png';
import nerdTrivia from '../images/nerd-trivia.png';
import groupLoop from '../images/GroupLoop2.png';

function MyWork() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);

  return (
    <>
      <section id="mywork">
        <header className="work">
          <h1>My Work</h1>
          <p>Click on image for more info</p>
        </header>
        <Carousel className="carousel">
          <Carousel.Item>
            <Button variant="info" onClick={() => setOpen1(true)}>
              <Card.Img variant="top" src={gatherUp} />
            </Button>
            <Modal show={open1} onHide={() => setOpen1(false)}>
              <Modal.Header closeButton>
                <Modal.Title>GatherUp</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                A small-town event page alternative to EventBrite or
                TicketMaster using a full MERN stack.
              </Modal.Body>
              <Modal.Footer>
                <Button
                  variant="info"
                  href="https://github.com/2magpies/ibcc-frontend"
                  target="_blank"
                >
                  Frontend Code
                </Button>
                <Button
                  variant="info"
                  href="https://github.com/2magpies/ibcc-backend"
                  target="_blank"
                >
                  Backend Code
                </Button>
                <Button
                  variant="info"
                  href="https://gatherupapp.herokuapp.com/"
                  target="_blank"
                >
                  Deployed App
                </Button>
                <Button variant="secondary" onClick={() => setOpen1(false)}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </Carousel.Item>
          <Carousel.Item>
            <Button variant="info" onClick={() => setOpen2(true)}>
              <Card.Img variant="top" src={rickAndMorty} />
            </Button>
            <Modal show={open2} onHide={() => setOpen2(false)}>
              <Modal.Header closeButton>
                <Modal.Title>Rick and Morty Search</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Deployed React app using hooks, React-Bootstrap, and a RESTful
                third party API.
              </Modal.Body>
              <Modal.Footer>
                <Button
                  variant="info"
                  href="https://github.com/tiffhuddleston/angry-anteater"
                  target="_blank"
                >
                  Code
                </Button>
                <Button
                  variant="info"
                  href="https://angry-anteater.herokuapp.com/"
                  target="_blank"
                >
                  Deployed App
                </Button>
                <Button variant="secondary" onClick={() => setOpen2(false)}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </Carousel.Item>
          <Carousel.Item>
            <Button variant="info" onClick={() => setOpen3(true)}>
              <Card.Img variant="top" src={groupLoop} />
            </Button>
            <Modal show={open3} onHide={() => setOpen3(false)}>
              <Modal.Header closeButton>
                <Modal.Title>GroupLoop</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Deployed React app using hooks, React-Bootstrap, and a RESTful
                API built with Python, Django, and PostgreSQL.
              </Modal.Body>
              <Modal.Footer>
                <Button
                  variant="info"
                  href="https://github.com/tiffhuddleston/grouploop_frontend"
                  target="_blank"
                >
                  Frontend Code
                </Button>
                <Button
                  variant="info"
                  href="https://github.com/tiffhuddleston/grouploop-backend"
                  target="_blank"
                >
                  Backend Code
                </Button>
                <Button
                  variant="info"
                  href="https://grouploop-fe.herokuapp.com/"
                  target="_blank"
                >
                  Deployed App
                </Button>
                <Button variant="secondary" onClick={() => setOpen3(false)}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </Carousel.Item>
          <Carousel.Item>
            <Button variant="info" onClick={() => setOpen4(true)}>
              <Card.Img variant="top" src={nerdTrivia} />
            </Button>
            <Modal show={open4} onHide={() => setOpen4(false)}>
              <Modal.Header closeButton>
                <Modal.Title>Nerd Trivia</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                A simple trivia game written with CSS, HTML and vanilla
                JavaScript.
              </Modal.Body>
              <Modal.Footer>
                <Button
                  variant="info"
                  href="https://github.com/tiffhuddleston/nerd-game"
                  target="_blank"
                >
                  Code
                </Button>
                <Button
                  variant="info"
                  href="https://tiffhuddleston.github.io/nerd-game/"
                  target="_blank"
                >
                  Deployed App
                </Button>
                <Button variant="secondary" onClick={() => setOpen4(false)}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </Carousel.Item>
        </Carousel>
        <footer>
          <p>Click on image for more info</p>
        </footer>
      </section>
    </>
  );
}

export default MyWork;
