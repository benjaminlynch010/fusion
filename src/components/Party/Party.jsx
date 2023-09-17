import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useDisclosure } from "@mantine/hooks";

// Mantine
import { ActionIcon, Box, Group, Card, Badge, Button, Image, Modal, Text, SimpleGrid, Title, TextInput, } from '@mantine/core'
import { IconTrash, IconPencil } from '@tabler/icons-react'



function Party() {

  const [ heading, setHeading ] = useState('Unnamed Party')
  const dispatch = useDispatch()
  const party = useSelector((store) => store.party);
  
  // For modal open/close
  const [opened, { open, close }] = useDisclosure(false);

  useEffect(() => {
    dispatch({ type: "FETCH_PARTY" });
  }, [dispatch]);

  const handleChangeName = (value) => {
    dispatch({ type: 'CHANGE_PARTY_NAME', payload: {heading}})
  }

const personaCards = party.map((persona, index) => (
  <Card key={index} shadow="sm" padding="lg" radius="md" withBorder>
  <Group p='sm' position='right'>
    <Badge 
      color="pink" variant="light">
      {persona.race}
    </Badge>
  </Group>
  
  <Card.Section>
    <Image
      src={persona.image}
      fit='contain'
      height={160}
      alt="persona"
      p='sm'
      />
  </Card.Section>

  <Group p='sm'position="apart" mt="md" mb="xs">
    <Text weight={500}>{persona.name}</Text>
  </Group>

  <Button variant="light" color="pink" fullWidth mt="md" radius="md">
    Remove {<IconTrash />}
  </Button>
</Card>
)) 

  return (
    <Box p='sm'>
      <Group p='md'>
        <Title>{heading}</Title>
        <Modal opened={opened} onClose={close} title="Party">
          <TextInput
          placeholder="Enter new party name"
          value={heading}
          onChange={(event) => setHeading(event.target.value)}
          label="Party Name"
          radius="xl"
          size="md"
          />
          <Group position='right' p='xl'>
            <Button onClick={(value) => handleChangeName(value)}>Submit</Button>
          </Group>
        </Modal>
        
        <Group position="center">
          <ActionIcon
              onClick={open} 
              variant='outline'
              radius='50%' 
              size='xl'>
              <IconPencil />
            </ActionIcon>
        </Group>
      </Group>
   
      <SimpleGrid cols={2}>
          {personaCards}
      </SimpleGrid>
    </Box>

    
  );
}

export default Party;