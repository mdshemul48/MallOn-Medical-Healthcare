import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useProducts from '../../Hooks/useProducts';

const SingleProduct = () => {
  const { productId } = useParams();
  const { findProduct } = useProducts();
  const { name, description, img } = findProduct(+productId);
  return (
    <Container>
      <Row>
        <Col lg={6}>
          <img src={img} alt={name} className='img-fluid' />
        </Col>
        <Col lg={6}>
          <h2 className='mt-5'>{name}</h2>
          <p>{description}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleProduct;
