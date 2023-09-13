import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

import ButtonGroup from './ButtonGroup'

// Mantine Hooks
import { useInputState } from "@mantine/hooks";


// Mantine Components
import {
Button,
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


function PartyForm() {
  const [personaName, setPersonaName] = useInputState("");

  const dispatch = useDispatch()

  const party = useSelector((store) => (store.party));
  
  const handleClick = (event) => {
    console.log('click.')
    setPersonaName(persona.name)
  }

  useEffect(() => {
    dispatch({ type: 'FETCH_PARTY' })
  }, [dispatch]);


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
        buttons={[ '', '', '', '', '', '' ]}
        doAfterClick={handleModal}
      />
    </Group>
    </Container>
  ); // end return
}

export default PartyForm
