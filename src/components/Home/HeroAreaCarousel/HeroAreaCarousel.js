import React from 'react';
import { Carousel, Row, Col, Container } from 'react-bootstrap';

import CarouselImg1 from '../../../assets/Carousel/img1.jpg';
import CarouselImg2 from '../../../assets/Carousel/img2.jpg';

import './HeroAreaCarousel.css';
const HeroAreaCarousel = () => {
  return (
    <Carousel variant='dark'>
      <Carousel.Item className='heroArea carousel-first-item'>
        <Container>
          <Row>
            <Col lg={6}>
              <div className='carousel-text-area'>
                <h4 className='sub-heading'>#handsanitizer</h4>
                <h1 className='main-heading'>
                  Healthy bodies start <br />
                  with clean hands.
                </h1>
                <p className='paragraph'>
                  Who knows what your hand might have touch, keep your <br />
                  hand & home clean with our sanitizers{' '}
                </p>
                <button
                  type='button'
                  className='btn carousel-button text-light py-2 mx-2 fw-bold'
                >
                  Explore more
                </button>
              </div>
            </Col>
            <Col lg={6}>
              <img src={CarouselImg1} className='img-fluid' alt='' />
            </Col>
          </Row>
        </Container>
      </Carousel.Item>
      <Carousel.Item className='heroArea carousel-2nd-item'>
        <Container>
          <Row>
            <Col lg={6}>
              <div className='carousel-text-area'>
                <h4 className='sub-heading'>Let's start summer right</h4>
                <h1 className='main-heading'>
                  Buy Big-Get Small <br />
                  Sale 35% OFF
                </h1>
                <p className='paragraph'>
                  Eliminates 99.99% of meny harmful germs & bacteria.
                </p>
                <button
                  type='button'
                  className='btn carousel-button text-light py-2 mx-2 fw-bold'
                >
                  Shop Products
                </button>

                <span className='btn learn-more-button'>
                  Learn about sanitizers
                </span>
              </div>
            </Col>
            <Col lg={6}>
              <img src={CarouselImg2} className='img-fluid' alt='' />
            </Col>
          </Row>
        </Container>
      </Carousel.Item>
    </Carousel>
  );
};

export default HeroAreaCarousel;
