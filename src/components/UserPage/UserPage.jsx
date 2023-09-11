import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';

// Mantine
import { Card, Group, Title, Text, Container } from '@mantine/core'

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <Container>
              <Group>
              <Title>Welcome, {user.username}!</Title>
          </Group>
      <Card mt="sm">
        <Group position="apart" mt="xs" mb="xs">
          <LogOutButton/>
        </Group>

      </Card>
    </Container>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
