import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

import logo from '../../../assets/logo.png';

const NavBar = () => {
  return (
    <Container>
      <Navbar expand='lg'>
        <Navbar.Brand href='/'>
          <img src={logo} alt='website logo' />
        </Navbar.Brand>
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
