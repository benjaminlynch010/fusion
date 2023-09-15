import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'


// Mantine
import { Container, Stack, NavLink } from '@mantine/core'


function UserPage() {

  const user = useSelector((store) => store.user);

  return (
    <Container>
      <Stack 
        align="stretch" 
        justify="center"
        spacing="lg">
        <NavLink href="/">Fusion Calculator</NavLink>
        <NavLink>Fusion Table</NavLink>
        <NavLink>Gallery</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Info</NavLink>
      </Stack>
    </Container>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
