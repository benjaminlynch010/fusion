import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";


import PersonaTable from "../PersonaTable/PersonaTable";


// Mantine
import {
  ActionIcon,
  Badge,
  Button,
  Card,
  Container,
  Group,
  SimpleGrid,
  Modal,
  Select,
  Table,
  Text,
  Title,
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

  const selectForFusion = (persona) => {

    if (firstToFuse === '') {
      setFirstToFuse(persona)
    }
    else if (secondToFuse === '') {
      setSecondToFuse(persona)
    }
    else {
    }

    
  };
  const selectSecond = (persona) => {
    console.log("2nd Sacrifice : ", persona.name);
    setSecondToFuse(persona);
  };

  const handleFusion = (personaOne, personaTwo) => {
    const newFusion = { personaOne, personaTwo };
    setFusionMaterials(newFusion);
    dispatch({ type: "FUSE", payload: newFusion });
  };

  const result = fusionResult.map((persona) => (
    <Text key={persona.id}>{persona.name}</Text>
  ));

  const rows = Array(8)
    .fill(null)
    .map((_, index) => {
      const persona = party[index];
      const isPersonaExists = persona && persona.name;
      const isArcanaExists = () => {
        if (persona && persona.race) {
          return (
            <Group>
              <Badge>{persona.race}</Badge>
              <ActionIcon onClick={() => handleDeleteClick(persona)}>
                <IconTrash />
              </ActionIcon>
            </Group>
          );
        } else {
          return (
            <ActionIcon variant="filled" radius="50%" color="pink">
              <IconPlus onClick={open} />
              <Modal opened={opened} onClose={close} closeOnClickOutside centered>
                  <PersonaTable />
              </Modal>
            </ActionIcon>
          );
        }
      };

      return (
        <Card 
          sx={{}} 
          key={index}
          onClick={() => selectForFusion(persona)} 
          variant={isPersonaExists ? "filled" : "outline"}>
          <Group>
            <Text>{isPersonaExists ? persona.name : "Add Persona"}</Text>
            {isArcanaExists()}
          </Group>
        </Card>
      );
    });

  
    /* <td>
<ActionIcon>
<IconListDetails />
</ActionIcon>
</td>
<td>
<ActionIcon onClick={() => handleDeleteClick(persona)}>
<IconTrash size="1.125rem" />
</ActionIcon>
</td>
<td>
<Button onClick={() => selectFirst(persona)}>Select</Button>
</td>
<td>  
<Button onClick={() => selectSecond(persona)}>Select</Button>
</td> 
</tr>
));
*/
  

  return (
    <Container>
      <Group>
        <SimpleGrid cols={2}>{rows}</SimpleGrid>
        <Card sx={{ height: '10rem', width: '10rem' }}>
          <Text>{firstToFuse.name}</Text>
        </Card>
        <Card sx={{ height: '10rem', width: '10rem' }}>
          <Text>{secondToFuse.name}</Text>
        </Card>
        <Card>{result}</Card>
        <Button onClick={() => handleFusion(firstToFuse, secondToFuse)}>
          F U S E
        </Button>
      </Group>
    </Container>
  );
}

export default UserParty;
