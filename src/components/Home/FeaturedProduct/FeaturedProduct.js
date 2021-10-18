import React from 'react';
import { Container, Row } from 'react-bootstrap';

import useProduct from '../../../Hooks/useProducts';

import Product from './Product';

import './FeaturedProduct.css';
const FeaturedProduct = () => {
  const { products } = useProduct();
  console.log(products);
  return (
    <Container>
      <p>FEATURED PRODUCTS</p>
      <div>
        <h1>A Few Of Our Favorites.</h1>
      </div>
      <div>
        <Row className='g-3'>
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default FeaturedProduct;
