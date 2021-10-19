import React from 'react';
import { Container } from 'react-bootstrap';
import NotFoundImage from '../../assets/img-404.jpg';

import './NotFound.css';
const NotFound = () => {
  return (
    <Container className='not-found'>
      <img className='img-fluid' src={NotFoundImage} alt='not found page' />
      <div className='text-center my-5'>
        <h1>The page you requested cannot be found!</h1>
        <p className='mt-3'>The page you requested cannot be found.</p>
      </div>
    </Container>
  );
};

export default NotFound;
