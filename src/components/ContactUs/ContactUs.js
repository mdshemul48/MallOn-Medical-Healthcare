import React from 'react';
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from 'react-bootstrap';
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
          <h2>Contact us</h2>
          <Form>
            <Row className='mb-3'>
              <Form.Group as={Col} controlId='formGridEmail'>
                <Form.Label>First Name</Form.Label>
                <Form.Control type='text' placeholder='Enter Your First Name' />
              </Form.Group>

              <Form.Group as={Col} controlId='formGridPassword'>
                <Form.Label>Last Name</Form.Label>
                <Form.Control type='text' placeholder='Enter Your Last name' />
              </Form.Group>
            </Row>

            <Form.Group className='mb-3' controlId='formGridAddress1'>
              <Form.Label>Email</Form.Label>
              <Form.Control type='email' placeholder='someone@mail.com' />
            </Form.Group>

            <Form.Group className='mb-3' controlId='formGridAddress2'>
              <Form.Label>Your Massage</Form.Label>
              <FloatingLabel controlId='floatingTextarea2' label='Your Massage'>
                <Form.Control
                  as='textarea'
                  placeholder='Leave a message here'
                  style={{ height: '100px' }}
                />
              </FloatingLabel>
            </Form.Group>

            <Button variant='primary' type='submit'>
              Send
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
