import React from 'react';
import { Container, Table } from 'react-bootstrap';

const Contacts = () => {
  return (
    <Container>
      <h2>Contacts</h2>
      <Table striped border hover>
        <thead>
          <th>#</th>
          <th>Name</th>
          <th>Last name</th>
          <th>Number</th>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Natali</td>
            <td>Baziuchenko</td>
            <td>7585885858585885</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Natali</td>
            <td>Baziuchenko</td>
            <td>7585885858585885</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Natali</td>
            <td>Baziuchenko</td>
            <td>7585885858585885</td>
          </tr>
          <tr>
            <td>4</td>
            <td colSpan="2">Natali Baziuchenko</td>
            <td>7585885858585885</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default Contacts;
