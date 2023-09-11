import React from 'react';
import { useSelector } from 'react-redux';

// Mantine
import { Container, Stack, Button, SimpleGrid } from '@mantine/core'

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);


  return (
    <Container>
      <Stack 
        align="stretch" 
        justify="center"
        spacing="xs">
        <Button size="xl" h={120}>Fusion Calculator</Button>
        <Button size="xl" h={120}>Gallery</Button>
        <SimpleGrid cols={2}>
          <Button size="xl" h={150}>Party</Button>
          <Button size="md" h={150}>Reverse Fusion</Button>
        </SimpleGrid>
        <Button>Settings</Button>
      </Stack>
    </Container>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
