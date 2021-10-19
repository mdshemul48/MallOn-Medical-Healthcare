import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
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
            <Nav.Link as={NavLink} activeClassName='active' to='/' exact>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} activeClassName='active' to='/products'>
              Products
            </Nav.Link>
            <Nav.Link as={NavLink} activeClassName='active' to='/contact-us'>
              Contact Us
            </Nav.Link>
            <Nav.Link as={NavLink} activeClassName='active' to='/about'>
              About Us
            </Nav.Link>
            <Navbar.Text className='ms-2'>
              Signed in as: <span className='text-light'>Mark Otto</span>
            </Navbar.Text>

            <Button variant='outline-light' className='ms-2' size='sm'>
              Logout
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
