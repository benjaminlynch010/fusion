import React, { useState } from "react";

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
  const [stringValue, setStringValue] = useInputState("");
  const [numberValue, setNumberValue] = useInputState(0);

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

      <ButtonGroup />

      <PersonaModal />
    </Container>
  ); // end return
}

export default PartyForm;
