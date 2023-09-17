import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';

import { Box, Center, Button, Group, Space } from '@mantine/core'

function LoginPage() {
  const history = useHistory();

  return (
    <Box maw={300} mx="auto">
      
      <LoginForm />
        <Group>
          <Button

            type="button"
            className="btn btn_asLink"
            onClick={() => {
              history.push('/registration');
            }}
            >
            Register
          </Button>
        </Group>

    </Box>
  );
}

export default LoginPage;
