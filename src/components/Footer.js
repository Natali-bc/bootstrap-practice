import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <Container
      fluid
      style={{
        backgroundColor: '#212529',
        color: '#fff',
        flex: '0 0 auto',
        display: 'flex',
      }}
    >
      <Container
        style={{
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '30px',
          paddingBottom: '40px',
        }}
      >
        <p>&copy; Copyright Natali Baziuchenko 2020</p>
      </Container>
    </Container>
  );
};

export default Footer;
