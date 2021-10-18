import React from 'react';
import { Container, Row } from 'react-bootstrap';

import { AiOutlineArrowRight } from 'react-icons/ai';

import useProduct from '../../../Hooks/useProducts';

import Product from './Product';

import './FeaturedProduct.css';
import { Link } from 'react-router-dom';
const FeaturedProduct = () => {
  const { products } = useProduct();
  console.log(products);
  return (
    <Container className='featured-products'>
      <p>FEATURED PRODUCTS</p>
      <div className='d-flex justify-content-between align-items-center'>
        <h1 className='my-4'>A Few Of Our Favorites.</h1>
        <Link
          to='/services'
          className='btn text-uppercase text-bold all-services-button'
        >
          All Products <AiOutlineArrowRight />
        </Link>
      </div>
      <div>
        <Row className='g-3'>
          {products.slice(0, 6).map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default FeaturedProduct;
