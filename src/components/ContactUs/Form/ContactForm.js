import React from 'react';
import { Button, Col, FloatingLabel, Form, Row } from 'react-bootstrap';

const ContactForm = () => {
  return (
    <>
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
    </>
  );
};

export default ContactForm;
