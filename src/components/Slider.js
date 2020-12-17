import React from 'react';
import image1 from '../images/pexels-photo-5725981.jpeg';
import image2 from '../images/pexels-photo-5919813.jpeg';
import image3 from '../images/pexels-photo-6062496.jpeg';
import { Carousel } from 'react-bootstrap';

const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item style={{ height: '500px' }}>
        <img src={image1} alt="img1" className="d-block w-100" />
        <Carousel.Caption>
          <h3>Title</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            qui modi tempora. Architecto, dicta dolores laborum earum alias odit
            atque optio expedita debitis, modi nihil maxime quos. Hic eius rem
            iusto ex illum dicta aut, repudiandae tenetur velit molestiae. Animi
            pariatur beatae consectetur omnis voluptatem dolore. Facere atque
            omnis iusto.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: '500px' }}>
        <img src={image2} alt="img2" className="d-block w-100" />
        <Carousel.Caption>
          <h3>Title</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            qui modi tempora. Architecto, dicta dolores laborum earum alias odit
            atque optio expedita debitis, modi nihil maxime quos. Hic eius rem
            iusto ex illum dicta aut, repudiandae tenetur velit molestiae. Animi
            pariatur beatae consectetur omnis voluptatem dolore. Facere atque
            omnis iusto.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: '500px' }}>
        <img src={image3} alt="img3" className="d-block w-100" />
        <Carousel.Caption>
          <h3>Title</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            qui modi tempora. Architecto, dicta dolores laborum earum alias odit
            atque optio expedita debitis, modi nihil maxime quos. Hic eius rem
            iusto ex illum dicta aut, repudiandae tenetur velit molestiae. Animi
            pariatur beatae consectetur omnis voluptatem dolore. Facere atque
            omnis iusto.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
