import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import useProduct from '../../../Hooks/useProducts';

import Product from '../../Products/Product';

import './FeaturedProduct.css';
const FeaturedProduct = () => {
  const { products } = useProduct();

  return (
    <Container className='featured-products'>
      <p className='m-0'>FEATURED PRODUCTS</p>
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
