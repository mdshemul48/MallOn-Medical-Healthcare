import React from 'react';
import { Alert } from 'react-bootstrap';

const ErrorShower = ({ errors }) => {
  console.log(errors);
  const errorMessage = [];
  for (const item in errors) {
    const error = errors[item];
    errorMessage.push(<Alert variant={'danger'}>{error?.message}</Alert>);
  }

  return <div>{errorMessage}</div>;
};

export default ErrorShower;
