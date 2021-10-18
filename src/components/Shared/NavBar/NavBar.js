import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';

import logo from '../../../assets/logo.png';

import './NavBar.css';
const NavBar = () => {
  return (
    <Navbar expand='lg' variant='dark' className='navbar'>
      <Container className='py-2'>
        <Navbar.Brand as={Link} to='/'>
          <img src={logo} alt='website logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav className='ms-auto'>
            <Nav.Link as={NavLink} to='/'>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to='/services'>
              Services
            </Nav.Link>
            <Nav.Link as={NavLink} to='/contact-us'>
              Contact us
            </Nav.Link>
            <Nav.Link as={NavLink} to='/about'>
              About Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
