import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Footer.css';
const Footer = () => {
  return (
    <footer>
      <Container className='pt-5'>
        <Row>
          <Col lg={2}>
            <h6 className='fw-bold text-light'>HERE TO HELP</h6>
            <ul>
              <li>
                <Link to='#' className='footer-link'>
                  Contact Us
                </Link>
              </li>
              <li>
                {' '}
                <Link to='#' className='footer-link'>
                  Return
                </Link>
              </li>
              <li>
                <Link to='#' className='footer-link'>
                  FAQs
                </Link>
              </li>
              <li>
                <Link to='#' className='footer-link'>
                  Site Map
                </Link>
              </li>
              <li>
                <Link to='#' className='footer-link'>
                  Help
                </Link>
              </li>
              <li>
                <Link to='#' className='footer-link'>
                  Finance
                </Link>
              </li>
              <li>
                <Link to='#' className='footer-link'>
                  Insurance
                </Link>
              </li>
            </ul>
          </Col>
          <Col lg={2}>
            <h6 className='fw-bold text-light'>ABOUT US</h6>
            <ul>
              <li>
                <Link to='#' className='footer-link'>
                  About Us
                </Link>
              </li>
              <li>
                {' '}
                <Link to='#' className='footer-link'>
                  Gift Certificates
                </Link>
              </li>
              <li>
                <Link to='#' className='footer-link'>
                  Affiliates
                </Link>
              </li>
              <li>
                <Link to='#' className='footer-link'>
                  Blog
                </Link>
              </li>
              <li>
                <Link to='#' className='footer-link'>
                  Privary Policy
                </Link>
              </li>
            </ul>
          </Col>
          <Col lg={2}>
            <h6 className='fw-bold text-light'>QUICK LINKS</h6>
            <ul>
              <li>
                <Link to='#' className='footer-link'>
                  Store Locations & Hours
                </Link>
              </li>
              <li>
                {' '}
                <Link to='#' className='footer-link'>
                  Delivery
                </Link>
              </li>
              <li>
                <Link to='#' className='footer-link'>
                  Secure Shopping
                </Link>
              </li>
            </ul>
          </Col>
          <Col lg={6}>
            <h6 className='fw-bold text-light'>SIGN UP FOR NEWSLETTER</h6>
            <p>Get 30% OFF coupon today subscibers.</p>
            <Row>
              <Col>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Email'
                />
              </Col>
              <Col>
                <button className='btn btn-light'>Subscribe</button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
