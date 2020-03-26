import React from 'react';
import { Jumbotron } from 'react-bootstrap';

function About() {
  return (
    <section id="about">
      <div>
        <header>
          <h1>About</h1>
        </header>
        <Jumbotron className="description">
          <h3>
            Software developer with 10+ years of hospitality and business
            leadership experience. Whether it is workplace dynamics,
            productivity flow, or interpersonal team building within the
            business or building trustful, lasting relationships with customers
            and partners, I find ways to achieve those goals.
          </h3>
        </Jumbotron>
      </div>
    </section>
  );
}

export default About;
