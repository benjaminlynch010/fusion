import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Box, Group, Card, Badge, Button, Image, Text,} from '@mantine/core'

function Party(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  
  const dispatch = useDispatch()
  const party = useSelector((store) => store.party);

  useEffect(() => {
    dispatch({ type: "FETCH_PARTY" });
  }, [dispatch]);

const personaCards = party.map((persona, index) => (
  <Card key={index} shadow="sm" padding="lg" radius="md" withBorder>
  <Card.Section>
    <Image
      src={persona.image}
      height={160}
      alt="persona"
      />
  </Card.Section>

  <Group position="apart" mt="md" mb="xs">
    <Text weight={500}>{persona.name}</Text>
    <Badge color="pink" variant="light">
      On Sale
    </Badge>
  </Group>

  <Text size="sm" color="dimmed">
    With Fjord Tours you can explore more of the magical fjord landscapes with tours and
    activities on and around the fjords of Norway
  </Text>

  <Button variant="light" color="blue" fullWidth mt="md" radius="md">
    Book classic tour now
  </Button>
</Card>
)) 




  return (
  <Box>
    {personaCards}
  </Box>
    
  );
}

export default Party;