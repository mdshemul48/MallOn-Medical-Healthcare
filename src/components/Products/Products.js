import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useProducts from '../../Hooks/useProducts';

import Product from './Product';
const Products = () => {
  const { products } = useProducts();
  return (
    <Container className='my-5'>
      <Row className='g-3'>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </Row>
    </Container>
  );
};

export default Products;
