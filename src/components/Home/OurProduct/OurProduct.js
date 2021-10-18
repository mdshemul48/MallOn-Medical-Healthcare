import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import Product1 from '../../../assets/OurProduct/1.jpg';
import Product2 from '../../../assets/OurProduct/2.jpg';
import Product3 from '../../../assets/OurProduct/3.jpg';

import './OurProduct.css';
const OurProduct = () => {
  return (
    <Container className='my-5'>
      <p className='approved-title text-center'>OUR PRODUCTS</p>
      <div className='our-product mb-5'>
        <h1>So good you dont have to</h1>
        <h1>scrub your hand.</h1>
      </div>
      <Row className='g-1'>
        <Col lg={4}>
          <div>
            <img src={Product1} alt='' />
          </div>
        </Col>
        <Col lg={4}>
          <div>
            <img src={Product2} alt='' />
          </div>
        </Col>
        <Col lg={4}>
          <div>
            <img src={Product3} alt='' />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default OurProduct;
