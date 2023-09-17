import React from 'react';
import { useHistory } from 'react-router-dom';

// Mantine
import { Box, Stack, Button } from '@mantine/core'


function HomePage() {

  const history = useHistory()

  return (
    <Box>
      <Stack>
        <Button onClick={() => {history.push('/calculator')}}>Calculator</Button>
        <Button onClick={() => {history.push('/gallery')}}>Gallery</Button>
        <Button onClick={() => {history.push('/table')}}>Table</Button>
      </Stack>
    </Box>
  );
}

// this allows us to use <App /> in index.js
export default HomePage;
