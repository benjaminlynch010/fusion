import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Mantine
import { Box, Container, Center, Checkbox, Card, Group, Stack, TextInput, Text, Title, Button, SimpleGrid } from '@mantine/core'
import { useForm } from '@mantine/form'

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
      },
    });
  }; // end registerUser

  const form = useForm({
    initialValues: {
      username: '',
      password: '',
      termsOfService: false,
    },

    validate : {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email')
    },
  })

  return (
    <form 
      className="formPanel" 
      onSubmit={registerUser}>

      <Stack>
      <Text>Register User</Text>
      {errors.registrationMessage && (
        <Text className="alert" role="alert">
          {errors.registrationMessage}
        </Text>
      )}
          <TextInput
            label="Username"
            placeholder="username"
            value={username}
            required
            onChange={(event) => setUsername(event.target.value)}
          />
          <TextInput
            label="Password"
            placeholder="password"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        <Button type="submit" name="submit" value="Register">Register</Button>
        </Stack>
    </form>
  );
}

export default RegisterForm;
