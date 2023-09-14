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
  Center,
  Container,
Image,
  Title,
  Group,
  SimpleGrid,
  Modal,
  Text,

} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconTrash, IconPlus, IconListDetails } from "@tabler/icons-react";

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function UserParty(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const [heading, setHeading] = useState("Party");
  const party = useSelector((store) => store.party);
  const [firstToFuse, setFirstToFuse] = useState("");
  const [secondToFuse, setSecondToFuse] = useState("");
  const [fusionMaterials, setFusionMaterials] = useState("");
  const dispatch = useDispatch();
  const fusionResult = useSelector((store) => store.result);

  // open & close for Modal
  const [opened, { open, close }] = useDisclosure(false);

  useEffect(() => {
    dispatch({ type: "FETCH_PARTY" });
  }, [dispatch]);

  const handleDeleteClick = (persona) => {
    dispatch({ type: "DELETE_FROM_PARTY", payload: persona });
  };

  const handleAddResult = (persona) => {
    dispatch({ type: 'ADD_TO_PARTY', payload: persona })
    notifications.show({
      title: 'Nice Click!',
      message: 'Added to party',
      color: 'pink',
      icon: <IconCheck />,
      autoClose: 5000,
    })
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
    <Card pb='lg' key={persona.id}>
    <Group sx={{ justifyContent: "right" }}>
      <Badge>{persona.race}</Badge>
    </Group>
    <Group >
      <Badge variant='filled'>{persona.lvl}</Badge>
      <Title order={3}>{persona.name}</Title>
    </Group>
    <Group position='right' pt='md'>
      <Button variant='light'>Details</Button>
    </Group>
    </Card>
  ));

  const rows = Array(8)
    .fill(null)
    .map((_, index) => {
      const persona = party[index];
      const isPartySlot = () => {
        if (persona) {
          return (
            <Card key={index}
              onClick={() => selectForFusion(persona)}
              >
              <Text weight={500}>{persona.name}</Text>
              <Badge>{persona.race}</Badge>
              <Image>{persona.image}</Image>

              <ActionIcon onClick={() => handleDeleteClick(persona)}>
                <IconTrash />
              </ActionIcon>
            </Card>
          );
        } else {
          return (
            <Card key={index}>
              <ActionIcon>
                <IconPlus onClick={open} />
                <Modal
                  opened={opened}
                  onClose={close}
                  closeOnClickOutside
                >
                  <PersonaTable />
                </Modal>
              </ActionIcon>
            </Card>
          );
        }
      };

      return (
        <Card key={index}>
          {isPartySlot()}
        </Card>

      );
    });

  return (
    <Box>
      <Card>{result}</Card>

      <SimpleGrid cols={2}>
      <Card>
        <Text>{firstToFuse.name}</Text>
        <Image src={firstToFuse.image}></Image>
      </Card>
      <Card>
        <Text>{secondToFuse.name}</Text>
      </Card>
      </SimpleGrid>

      <Button onClick={() => handleFusion(firstToFuse, secondToFuse)}>
        F U S E
      </Button>
      <Group>
        <SimpleGrid cols={2}>{rows}</SimpleGrid>
      </Group>
    </Box>
  );
}

export default UserParty;
