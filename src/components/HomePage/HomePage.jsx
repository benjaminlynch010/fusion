import React from 'react';
import { useHistory } from 'react-router-dom';

import HeroLoop from '../HeroLoop/HeroLoop'

// Mantine
import { Box, Stack, Button } from '@mantine/core'

function HomePage() {

  const history = useHistory()

  return (
    <Box>
      <HeroLoop />
      <Stack px='xl'>
        <Button color='pink' onClick={() => {history.push('/calculator')}}>Calculator</Button>
        <Button color='pink' onClick={() => {history.push('/gallery')}}>Gallery</Button>
        <Button color='pink' onClick={() => {history.push('/table')}}>Table</Button>
      </Stack>
    </Box>
  );
}

export default HomePage;
