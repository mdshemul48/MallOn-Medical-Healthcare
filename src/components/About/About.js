import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import aboutUs from '../../assets/about-page.jpg';

import './About.css';
const About = () => {
  return (
    <main>
      <Container className='about-us-header'>
        <Row>
          <Col lg={6}>
            <img src={aboutUs} alt='logo' className='img-fluid' />
          </Col>
          <Col lg={6}>
            <h1 className='my-5'>About Us</h1>
            <p>
              The GOJO Purpose of Saving Lives and Making Life Better Through
              Well-being Solutions drives every decision our Family Enterprise
              makes, from the products we create, to the ways we work. As the
              inventors of PURELL® Hand Sanitizer, GOJO is a privately-held
              company headquartered in Akron, Ohio, with facilities in North
              America, South America, Europe and Asia and has changed how the
              world stays well for more than 70 years. We use the best science
              available to develop well-being solutions for skin and the
              surfaces people touch – solutions that result in healthier people
              and a healthy environment at home and away-from-home.
            </p>
          </Col>
        </Row>

        <p>
          As relentless innovators, driven by an entrepreneurial spirit, we’ve
          harnessed the power of the PURELL® brand to create new products that
          deliver the ideal combination of effective protection from germs and
          safety for people and the environment. Our latest innovation, the
          PURELL SOLUTION™ includes PURELL® Hand Sanitizers, PURELL® Surface
          Disinfectant, PURELL® Brand HEALTHY SOAP™ products with CLEAN RELEASE™
          Technology and PURELL® ES8 Dispensing Systems with
          energy-on-the-refill.
        </p>
      </Container>
    </main>
  );
};

export default About;
