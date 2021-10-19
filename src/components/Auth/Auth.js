import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Alert, Button, Col, Container, Row } from 'react-bootstrap';
import { FcGoogle } from 'react-icons/fc';

import useAuth from '../../Hooks/useAuth';
import Logo from '../../assets/logo1.png';

import './Auth.css';
const Auth = () => {
  const history = useHistory();
  const location = useLocation();
  const {
    user,
    createAccountWithEmailAndPassword,
    signInWithGoogle,
    loginInWithEmailAndPassword,
    error,
  } = useAuth();

  const [authToggle, setAuthToggle] = useState(true);
  const { register, handleSubmit } = useForm();

  const formSubmitHandler = (data) => {
    if (authToggle) {
      loginInWithEmailAndPassword(data.email, data.password);
    } else {
      createAccountWithEmailAndPassword(
        data.userName,
        data.email,
        data.password
      );
    }
  };

  const googleAuthHandler = () => {
    signInWithGoogle();
  };

  useEffect(() => {
    if (user.displayName) {
      const redirectPath = location?.state?.from?.pathname || '/';
      history.push(redirectPath);
    }
  }, [user, history, location]);

  return (
    <Container className='my-5'>
      {error && (
        <div>
          <Alert variant={'danger'}>{error?.message}</Alert>
        </div>
      )}
      <Row className='align-items-center justify-content-center'>
        <Col lg={6} className='shadow rounded'>
          <div className='text-center my-3'>
            <img src={Logo} alt='website logo' />
            <p className='my-2 ms-4'>Login into your pages account</p>
          </div>

          <form className='p-3' onSubmit={handleSubmit(formSubmitHandler)}>
            {!authToggle && (
              <div className='form-group my-2'>
                <label htmlFor='email'>Name</label>
                <input
                  type='text'
                  className='form-control py-2'
                  placeholder='Enter Name'
                  {...register('userName')}
                />
              </div>
            )}
            <div className='form-group my-2'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                className='form-control py-2'
                id='email'
                placeholder='Enter email'
                {...register('email')}
              />
            </div>
            <div className='form-group my-2'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                className='form-control py-2'
                id='password'
                placeholder='Password'
                {...register('password')}
              />
            </div>
            <div className='form-group my-2'>
              <Row className='my-3 mx-1'>
                <Button
                  className='py-3 fw-bold carousel-button btn-success'
                  type='submit'
                >
                  {authToggle ? 'Login' : 'Signup'}
                </Button>
              </Row>
            </div>
          </form>

          <h3 className='text-center'>Or Login With</h3>

          <Row className='my-3 mx-1 text-center my-5 px-3'>
            <Button
              variant='outline-dark'
              className='py-3 fw-bold'
              onClick={googleAuthHandler}
            >
              <FcGoogle className='me-2' />
              Login with Google
            </Button>
          </Row>

          <div className='text-center my-3'>
            <p className='my-2 ms-4'>
              {authToggle
                ? "Don't have an account?"
                : 'Already have an account?'}
              <span
                className='ms-2 text-success toggle-button'
                onClick={() => setAuthToggle(!authToggle)}
              >
                {authToggle ? 'Sign Up' : 'Sign In'}
              </span>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Auth;
