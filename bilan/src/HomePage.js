import React from 'react';
import { Navbar, Nav, Container, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage.css'; 

const HomePage = () => {
  return (
    <>
      <Navbar bg="light" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#home">Venetian Plastering Co.</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#testimonials">Testimonials</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container fluid className="hero-section">
        <Row>
          <Col className="text-center">
            <h1 className="display-3">Professional Plastering Services</h1>
            <p>Delivering quality finishes for your home and business.</p>
            <Button variant="primary" size="lg" className="contact-btn">Contact Us</Button>
          </Col>
        </Row>
      </Container>
      
      </>
  );
};

export default HomePage;
