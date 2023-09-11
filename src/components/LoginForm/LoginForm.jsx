import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';

import { Container, Center, Card, TextInput, Title, Button, SimpleGrid } from '@mantine/core'

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  return (
    <form className="formPanel" onSubmit={login}>
      <h2>Login</h2>
      {errors.loginMessage && (
        <h3 className="alert" role="alert">
          {errors.loginMessage}
        </h3>
      )}
      <div>
          Username:
          <TextInput
            type="text"
            name="username"
            label="Username:"
            required
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
      </div>
      <div>
          <TextInput
            type="password"
            name="password"
            label="Password:"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

      </div>
      <div>
        <Button type="submit" name="submit" value="Log In">Log In</Button>
      </div>
    </form>
  );
}

export default LoginForm;
