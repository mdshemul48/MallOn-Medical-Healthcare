import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Container>
      <Navbar bg='light' expand='lg'>
        <Navbar.Brand href='#'>Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav>
            <Nav.Link href='#action1'>Home</Nav.Link>
            <Nav.Link href='#action2'>Services</Nav.Link>
            <Nav.Link href='#action2'>Contact us</Nav.Link>
            <Nav.Link href='#action2'>About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default NavBar;
