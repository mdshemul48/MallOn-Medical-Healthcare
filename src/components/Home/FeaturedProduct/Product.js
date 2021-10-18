import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Product.css';
const Product = ({ product: { name, description, img, id } }) => {
  return (
    <Col lg={4} md={6} sm={12}>
      <div className='product shadow'>
        <div className='product-image text-center'>
          <img src={img} alt={name} width='200px' />
        </div>
        <div className='product-info'>
          <h5>{name.substring(0, 40)}..</h5>
          <p>{description.substring(0, 100)}...</p>
          <Link
            to={`/services/${id}`}
            className='btn product-button text-light'
          >
            View Product
          </Link>
        </div>
      </div>
    </Col>
  );
};

export default Product;
