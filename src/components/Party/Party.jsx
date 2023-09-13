import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import ButtonGroup from "./ButtonGroup";
import PersonaTable from "../PersonaTable/PersonaTable";

// Mantine Hooks
import { useInputState, useDisclosure } from '@mantine/hooks';

// Mantine Components
import { Button, Modal, Container, Group, Stack, Title, Text, TextInput, } from '@mantine/core';

function Party() {

  const dispatch = useDispatch()
  const party = useSelector((store) => store.party)

  const [opened, { open, close }] = useDisclosure(false);

  const handleClick = (event) => {
    console.log('click.')
  }

  useEffect(() => {
    dispatch({ type: 'FETCH_PARTY' })
  }, [dispatch]);


  const buttonLabel = party.map((persona) => (
    persona.name
  ))

  const buttons = [ buttonLabel, buttonLabel, buttonLabel, buttonLabel, buttonLabel, buttonLabel ]

  return (

    <Container>
      <Stack>
        <Title>Unnamed Party</Title>
        <Text size="xs" color="dimmed">
          Notes
        </Text>
      </Stack>

      {buttons.map((button, i) => (
    <Group key={i}>
      <Button 
        variant={party.length < 5 ? "outline" : "solid"} 
        onClick={open}>{button}
      </Button>
      <Modal opened={opened} onClose={close} centered>
        <PersonaTable />
      </Modal>
    </Group>
))}


    </Container>
  );
}

export default Party