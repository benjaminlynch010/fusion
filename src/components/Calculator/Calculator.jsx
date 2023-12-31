import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import PersonaTable from "../PersonaTable/PersonaTable";


// Mantine
import {
  ActionIcon,
  Badge,
  Box,
  Button,
  Card,
  Flex,
  Container,
  Image,
  Group,
  SimpleGrid,
  Modal,
  Text,

} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconPlus, } from "@tabler/icons-react";


function Calculator() {

  // 
  const party = useSelector((store) => store.party);

  const [firstToFuse, setFirstToFuse] = useState("");
  const [secondToFuse, setSecondToFuse] = useState("");
  const [fusionMaterials, setFusionMaterials] = useState("");
  
  const dispatch = useDispatch();
  const fusionResult = useSelector((store) => store.result);

  // open & close window for Modal
  const [opened, { open, close }] = useDisclosure(false);

  useEffect(() => {
    dispatch({ type: "FETCH_PARTY" });
  }, [dispatch]);

  const handleDeleteClick = (persona) => {
    dispatch({ type: "DELETE_FROM_PARTY", payload: persona });
  };

  const handleClear = () => {
    dispatch({ type: 'CLEAR_PARTY' })
  }

  const handleAddResult = (persona) => {
    dispatch({ type: 'ADD_TO_PARTY', payload: persona })

    dispatch({ type: 'FETCH_PERSONAS'})
    dispatch({ type: 'FETCH_PARTY'})
  }

  const selectForFusion = (persona) => {
    if (firstToFuse === "") {
      setFirstToFuse(persona);
    } else if (secondToFuse === "") {
      setSecondToFuse(persona);
    } else if (firstToFuse && secondToFuse) {
      setSecondToFuse(firstToFuse);
      setFirstToFuse(persona);
    }
  };

  const handleFusion = (personaOne, personaTwo) => {
    const newFusion = { personaOne, personaTwo };
    setFusionMaterials(newFusion);
    dispatch({ type: "FUSE", payload: newFusion });
  };

  const result = fusionResult.map((persona) => (
    <Card key={persona.id} shadow="sm" padding="lg" radius="md" withBorder>
      <Group position='right'>
        <ActionIcon 
          variant='filled' 
          color='pink' 
          radius='50%'
          onClick={() => handleAddResult(persona)}
          >
          <IconPlus />
        </ActionIcon>
      </Group>
      <Card.Section>
        <Image
          src={persona.image}
          height={200}
          fit="contain"
          alt="FusedPersona"
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={700}>{persona.name}</Text>
        <Badge color="pink" variant="filled">
          {persona.race}
        </Badge>
      </Group>

      <Button variant="subtle" color="pink" fullWidth mt="md" radius="md">
        Details
      </Button>
    </Card>
  ));

  // limiting party display to 8 characters
  // TODO implement server side logic, this only limits display
  const rows = Array(8)
    .fill(null)
    .map((_, index) => {
      const persona = party[index];
      const isPartySlot = () => {
        if (persona) {
          return (
            <ActionIcon 
              size='4rem'
              p='xs'
              >

              <Image 
                key={index}
                src={persona.image}
                fit='contain'
                onClick={() => selectForFusion(persona)}
                />
            </ActionIcon>
          );
        } else {
          return (
              <ActionIcon size='4rem' variant='outline' radius='50%'>
                <IconPlus stroke={2} onClick={open} />
                <Modal
                  opened={opened}
                  onClose={close}
                  closeOnClickOutside
                >
                  <PersonaTable />
                </Modal>
              </ActionIcon>

          );
        }
      };

      return (
        <Container>
          {isPartySlot()}
        </Container>

      );
    });

  return (
    <Box>
      <Card>{result}</Card>
      <SimpleGrid cols={2}>

          <Card
            align='center'
          >
            <Image 
              src={firstToFuse.image} 
              height='100px' 
              width='100px'
              fit='contain'
              />
          </Card>
          <Card
            align='center'
          >
            <Image 
              src={secondToFuse.image} 
              height='100px' 
              width='100px'
              fit='contain'
              />
          </Card>

      </SimpleGrid>

      <Flex 
        p='lg'
        position='center'
        align='center'
        justify="space-around"

        >
        <Button onClick={() => handleFusion(firstToFuse, secondToFuse)}>F U S E</Button>
        <Button onClick={() => handleClear()}>Clear Party</Button>
      </Flex>

      <Group p='xl'>
        <SimpleGrid cols={4}>{rows}</SimpleGrid>
      </Group>
    </Box>
  );
}

export default Calculator;
