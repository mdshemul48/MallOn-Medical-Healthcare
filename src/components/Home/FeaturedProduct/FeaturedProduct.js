import React from 'react';
import { Container } from 'react-bootstrap';

import useProduct from '../../../Hooks/useProducts';

import './FeaturedProduct.css';
const FeaturedProduct = () => {
  const { products } = useProduct();
  console.log(products);
  return (
    <Container>
      <p>FEATURED PRODUCTS</p>
      <div>
        <h1>A Few Of Our Favourites.</h1>
      </div>
      <div></div>
    </Container>
  );
};

export default FeaturedProduct;
