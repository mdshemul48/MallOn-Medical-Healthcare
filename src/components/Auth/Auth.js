import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { FcGoogle } from 'react-icons/fc';

import Logo from '../../assets/logo1.png';

import './Auth.css';
const Auth = () => {
  const [authToggle, setAuthToggle] = React.useState(false);
  return (
    <Container className='my-5'>
      <Row className='align-items-center justify-content-center'>
        <Col lg={6} className='shadow rounded'>
          <div className='text-center my-3'>
            <img src={Logo} alt='website logo' />
            <p className='my-2 ms-4'>Login into your pages account</p>
          </div>

          <form className='p-3'>
            {authToggle && (
              <div className='form-group'>
                <label htmlFor='email'>Name</label>
                <input
                  type='text'
                  className='form-control py-2'
                  placeholder='Enter Name'
                />
              </div>
            )}
            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                className='form-control py-2'
                id='email'
                placeholder='Enter email'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                className='form-control py-2'
                id='password'
                placeholder='Password'
              />
            </div>
            <div className='form-group'>
              <Row className='my-3 mx-1'>
                {!authToggle ? (
                  <Button className='py-3 fw-bold carousel-button btn-success'>
                    Login
                  </Button>
                ) : (
                  <Button className='py-3 fw-bold carousel-button btn-success'>
                    Sign Up
                  </Button>
                )}
              </Row>
            </div>
          </form>

          <h3 className='text-center'>Or Login With</h3>

          <Row className='my-3 mx-1 text-center my-5 px-3'>
            <Button variant='outline-dark' className='py-3 fw-bold'>
              <FcGoogle className='me-2' />
              Login with Google
            </Button>
          </Row>

          <div className='text-center my-3'>
            <p className='my-2 ms-4'>
              {!authToggle
                ? "Don't have an account?"
                : 'Already have an account?'}
              <span
                className='ms-2 text-success toggle-button'
                onClick={() => setAuthToggle(!authToggle)}
              >
                {!authToggle ? 'Sign Up' : 'Sign In'}
              </span>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Auth;
