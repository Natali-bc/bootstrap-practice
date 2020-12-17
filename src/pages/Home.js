import React from 'react';
import Slider from '../components/Slider';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import image1 from '../images/pexels-photo-5725981.jpeg';
import image2 from '../images/pexels-photo-5919813.jpeg';
import image3 from '../images/pexels-photo-6062496.jpeg';
import Jumbotron from '../components/Jumbotron';

const Home = () => {
  return (
    <>
      <h2>Home</h2>
      <Slider />
      <Container style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <Row style={{ marginBottom: '2rem' }}>
          <Col>
            <Card style={{ width: '20rem' }}>
              <Card.Img
                src={image1}
                alt="image1"
                style={{ height: '200px' }}
                variant="top"
              />
              <Card.Body>
                <Card.Title>Title</Card.Title>
                <Card.Text>Description</Card.Text>
                <Button variant="primary">More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '20rem' }}>
              {/* <img src={image1} alt="image1" /> */}
              <Card.Img
                src={image2}
                alt="image2"
                style={{ height: '200px' }}
                variant="top"
              />
              <Card.Body>
                <Card.Title>Title</Card.Title>
                <Card.Text>Description</Card.Text>
                <Button variant="primary">More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '20rem' }}>
              {/* <img src={image1} alt="image1" /> */}
              <Card.Img
                src={image3}
                alt="image3"
                style={{ height: '200px' }}
                variant="top"
              />
              <Card.Body>
                <Card.Title>Title</Card.Title>
                <Card.Text>Description</Card.Text>
                <Button variant="primary">More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row style={{ background: '#2353b3', padding: '2rem' }}>
          <Col md={4}>
            <img src={image1} alt="image1" height={200} />
          </Col>
          <Col md={8}>
            <h3>Title</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              qui modi tempora. Architecto, dicta dolores laborum earum alias
              odit atque optio expedita debitis, modi nihil maxime quos. Hic
              eius rem iusto ex illum dicta aut, repudiandae tenetur velit
              molestiae. Animi pariatur beatae consectetur omnis voluptatem
              dolore. Facere atque omnis iusto.
            </p>
          </Col>
        </Row>
      </Container>
      <Jumbotron />
    </>
  );
};

export default Home;
