import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ContactForm from './Form/ContactForm';

import { MapContainer, Marker, TileLayer } from 'react-leaflet';

const ContactUs = () => {
  const position = [51.505, -0.09];

  return (
    <Container className='mt-5'>
      <Row>
        <Col lg={6}>
          <div style={{ height: '600px' }}>
            <MapContainer
              center={position}
              zoom={13}
              scrollWheelZoom={false}
              className='h-75'
            >
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
              />
              <Marker position={position} />
            </MapContainer>
          </div>
        </Col>
        <Col lg={6}>
          <ContactForm />
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
