import React from 'react';
import { Container } from 'react-bootstrap';
import adsImage from '../../../assets/ads.jpg';

const AdsArea = () => {
  return (
    <Container className='my-5'>
      <img src={adsImage} alt='ads' className='img-fluid' />
    </Container>
  );
};

export default AdsArea;
