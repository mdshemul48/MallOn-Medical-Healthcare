import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import brandlogo1 from '../../../assets/company/b1.png';
import brandlogo2 from '../../../assets/company/b2.png';
import brandlogo3 from '../../../assets/company/b3.png';
import brandlogo4 from '../../../assets/company/b4.png';
import brandlogo5 from '../../../assets/company/b5.png';
import brandlogo6 from '../../../assets/company/b6.png';

import './ApprovedArea.css';
const ApprovedArea = () => {
  const allTheImage = [
    brandlogo1,
    brandlogo2,
    brandlogo3,
    brandlogo4,
    brandlogo5,
    brandlogo6,
  ];

  return (
    <section>
      <h5 className='my-5 text-center approved-title'>
        APPROVED BY LEADING HEALTH ORGANISATIONS
      </h5>
      <Container className='mb-5'>
        <Row className='approved-logos'>
          {allTheImage.map((logo, index) => (
            <Col lg={2} md={4} sm={6} key={index}>
              <img
                className='approved-Logo'
                src={logo}
                alt={`logo ${index + 1}`}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ApprovedArea;
