import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

import logo from '../../../assets/logo.png';

import './NavBar.css';
const NavBar = () => {
  return (
    <Navbar expand='lg' variant='dark' className='navbar'>
      <Container>
        <Navbar.Brand href='/'>
          <img src={logo} alt='website logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav className='ms-auto'>
            <Nav.Link href='#'>Home</Nav.Link>
            <Nav.Link href='#'>Services</Nav.Link>
            <Nav.Link href='#'>Contact us</Nav.Link>
            <Nav.Link href='#'>About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
