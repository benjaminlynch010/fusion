import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

import ButtonGroup from './ButtonGroup'

// Mantine Hooks
import { useInputState } from "@mantine/hooks";


// Mantine Components
import {
  ActionIcon,
  Card,
  Container,
  Group,
  Flex,
  Modal,
  Paper,
  Stack,
  Title,
  Text,
  TextInput,
  NumberInput,
} from "@mantine/core";



import PersonaModal from './PersonaModal' 

function PartyForm() {
  const [personaId, setPersonaId] = useInputState("");


  const party = useSelector((store) => (store.party));



  const handleAddPersona = () => {
    console.log('click.')
  }


  
  
  

  return (
    <Container>
      <Stack>
        <Title>Unnamed Party</Title>
        <Text size="xs" color="dimmed">
          Notes
        </Text>
      </Stack>
      <Group>
        <ButtonGroup
          buttons={[1,2,3,4,5,6,7,8]}
        />
      </Group>
      <Group>
        <PersonaModal />
      </Group>
    </Container>
  ); // end return
}

export default PartyForm
