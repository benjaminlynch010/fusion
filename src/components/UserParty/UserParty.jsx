import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PersonaCard from '../PersonaCard/PersonaCard'

// Mantine
import {
  ActionIcon, Badge, Button, Card, Container, Group, SimpleGrid, Table, Text, Title
 } from '@mantine/core'
 import { IconTrash, IconPlus, IconListDetails } from '@tabler/icons-react';
 
// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function UserParty(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const [heading, setHeading] = useState('Party');
  const party = useSelector((store) => store.party);
  const [firstToFuse, setFirstToFuse] = useState('')
  const [secondToFuse, setSecondToFuse] = useState('')
  const [fusionMaterials, setFusionMaterials] = useState('')
  const dispatch = useDispatch();
  const fusionResult = useSelector((store) => store.result)

  useEffect(() => {
    dispatch({ type: 'FETCH_PARTY' })
  }, [dispatch]);

  const handleDeleteClick = (persona) => {
    dispatch({ type: 'DELETE_FROM_PARTY', payload: persona })
  }

  const selectFirst = (persona) => {
    console.log('1st Sacrifice : ', persona.name)
    setFirstToFuse(persona)
  }
  const selectSecond = (persona) => {
    console.log('2nd Sacrifice : ', persona.name)
    setSecondToFuse(persona)
  }
  
  const handleFusion = (personaOne, personaTwo) => {
    const newFusion = {personaOne, personaTwo};
    setFusionMaterials(newFusion)
    dispatch({ type: 'FUSE', payload: newFusion });
}

  const result = fusionResult.map((persona) => (
    <Text key={persona.id}>{persona.name}</Text>
  )) 

  const rows = Array(8).fill(null).map((_, index) => {
    
    const persona = party[index];
    const isPersonaExists = persona && persona.name;
    const isArcanaExists = () => {
      if (persona && persona.race) {
        return (
          <Badge>{persona.race}</Badge>
        )
      } else {
        return (
          <ActionIcon 
            variant="outline" 
            radius="50%">
            <IconPlus />
          </ActionIcon>
        )
      }
    }

    return (
      <Card key={index}
          variant={isPersonaExists ? "filled" : "outline"}>
            <Group>
              <Text>{isPersonaExists ? persona.name : 'Add Persona'}</Text>
              {isArcanaExists()}
            </Group>
      </Card>
    );
  });
  

      {/* <td>
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
    */}

  return (
    <Container>
      <Group>
        <SimpleGrid cols={4}>
          {rows}
        </SimpleGrid>

        <Card>
          <Text>
            {firstToFuse.name}
          </Text>
          </Card>
        <Card>{secondToFuse.name}</Card>
        <Card>{result}</Card>
        <Button onClick={() => handleFusion(firstToFuse, secondToFuse)}>
          F U S E
        </Button>
      </Group>
    </Container>
  );
}

export default UserParty;
