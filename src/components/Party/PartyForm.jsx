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
import PersonaModal from "./PersonaModal";


function PartyForm() {


  const dispatch = useDispatch()

  const party = useSelector((store) => (store.party));
  
  const handleClick = (event) => {
    console.log('click.')
  }
  
  return (
    
    <Group>
      <ButtonGroup 
        buttons={[ '', '', '', '', '', '' ]}
        doAfterClick={handleClick}
      />
    </Group>

  ); // end return
}

export default PartyForm
