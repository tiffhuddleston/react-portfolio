import React from 'react';
import { Carousel, Card, Button, ButtonGroup } from 'react-bootstrap';
import rickAndMorty from '../images/RickandMorty.png';
import gatherUp from '../images/GatherUp.png';
import nerdTrivia from '../images/nerd-trivia.png';
import groupLoop from '../images/GroupLoop1.png';

function MyWork() {
  return (
    <>
      <section id="mywork">
        <header className="work">
          <h1>My Work</h1>
        </header>
        <Carousel className="carousel">
          <Carousel.Item>
            <Card style={{ width: '35rem' }}>
              <Card.Img variant="top" src={rickAndMorty} />
              <Card.Body>
                <Card.Title>Rick and Morty Search</Card.Title>
                <Card.Text>
                  Deployed React app using hooks, React-Bootstrap, and a RESTful
                  API.
                </Card.Text>
                <div className="d-flex flex-column">
                  <ButtonGroup size="lg">
                    <Button
                      href="https://github.com/tiffhuddleston/angry-anteater"
                      target="_blank"
                    >
                      Code
                    </Button>

                    <Button
                      href="https://angry-anteater.herokuapp.com/"
                      target="_blank"
                    >
                      Deployed App
                    </Button>
                  </ButtonGroup>
                </div>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
            <Card style={{ width: '35rem' }}>
              <Card.Img variant="top" src={groupLoop} />
              <Card.Body>
                <Card.Title>GroupLoop</Card.Title>
                <Card.Text>
                  Deployed React app using hooks, React-Bootstrap, and a RESTful
                  API built with Python, Django, and PostgreSQL.
                </Card.Text>
                <div className="d-flex flex-column">
                  <ButtonGroup size="lg">
                    <Button
                      href="https://github.com/tiffhuddleston/grouploop_frontend"
                      target="_blank"
                    >
                      Frontend Code
                    </Button>
                    <Button
                      href="https://github.com/tiffhuddleston/grouploop-backend"
                      target="_blank"
                    >
                      Backend Code
                    </Button>
                    <Button
                      href="https://grouploop-fe.herokuapp.com/"
                      target="_blank"
                    >
                      Deployed App
                    </Button>
                  </ButtonGroup>
                </div>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
            <Card style={{ width: '35rem' }}>
              <Card.Img variant="top" src={gatherUp} />
              <Card.Body>
                <Card.Title>GatherUp</Card.Title>
                <Card.Text>
                  A small-town event page alternative to EventBrite or
                  TicketMaster using a full MERN stack.
                </Card.Text>
                <div className="d-flex flex-column">
                  <ButtonGroup size="lg">
                    <Button
                      href="https://github.com/2magpies/ibcc-frontend"
                      target="_blank"
                    >
                      Frontend Code
                    </Button>
                    <Button
                      href="https://github.com/2magpies/ibcc-backend"
                      target="_blank"
                    >
                      Backend Code
                    </Button>
                    <Button
                      href="https://gatherupapp.herokuapp.com/"
                      target="_blank"
                    >
                      Deployed App
                    </Button>
                  </ButtonGroup>
                </div>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
            <Card style={{ width: '35rem' }}>
              <Card.Img variant="top" src={nerdTrivia} />
              <Card.Body>
                <Card.Title>Nerd Trivia</Card.Title>
                <Card.Text>
                  A simple trivia game written with CSS, HTML and vanilla
                  JavaScript.
                </Card.Text>
                <div className="d-flex flex-column">
                  <ButtonGroup size="lg">
                    <Button
                      href="https://github.com/tiffhuddleston/nerd-game"
                      target="_blank"
                    >
                      Code
                    </Button>

                    <Button
                      href="https://tiffhuddleston.github.io/nerd-game/"
                      target="_blank"
                    >
                      Deployed App
                    </Button>
                  </ButtonGroup>
                </div>
              </Card.Body>
            </Card>
          </Carousel.Item>
        </Carousel>
      </section>
    </>
  );
}

export default MyWork;
