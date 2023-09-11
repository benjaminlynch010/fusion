import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';

import { Container, Center, Button, } from '@mantine/core'

function LoginPage() {
  const history = useHistory();

  return (
    <Container>
      <LoginForm />

      <Center>
        <Button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/registration');
          }}
        >
          Register
        </Button>
      </Center>
    </Container>
  );
}

export default LoginPage;
