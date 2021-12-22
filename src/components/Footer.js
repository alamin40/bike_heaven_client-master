import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3 footer_class">Copyright &copy; Ataur Rahman</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
