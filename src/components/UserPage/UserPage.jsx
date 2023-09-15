import React from 'react';
import { useHistory } from 'react-router-dom';

// Mantine
import { Box, Stack, Button } from '@mantine/core'
import { IconHome2 } from '@tabler/icons-react'

function UserPage() {

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
export default UserPage;
