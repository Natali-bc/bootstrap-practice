import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import image1 from '../images/pexels-photo-5725981.jpeg';
import image2 from '../images/pexels-photo-5919813.jpeg';
import image3 from '../images/pexels-photo-6062496.jpeg';
import styled from 'styled-components';
const Styles = styled.div`
  .jumbo {
    background: url(${image1}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 600px;
    position: relative;
    z-index: -2;
  }
  .overlay {
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: #000;
    opacity: 0.6;
  }
`;

const Jumbotron = () => {
  return (
    <Styles>
      <Jumbo className="jumbo" fluid>
        <div className="overlay"></div>
        <Container>
          <h1>Main Title</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            qui modi tempora. Architecto, dicta dolores laborum earum alias odit
            atque optio expedita debitis, modi nihil maxime quos. Hic eius rem
            iusto ex illum dicta aut, repudiandae tenetur velit molestiae. Animi
            pariatur beatae consectetur omnis voluptatem dolore. Facere atque
            omnis iusto.
          </p>
        </Container>
      </Jumbo>
    </Styles>
  );
};

export default Jumbotron;
