import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';


// Mantine
import {
  ActionIcon, Button, Card, Container, SimpleGrid, Table, Text
 } from '@mantine/core'
 import { IconTrash, IconListDetails } from '@tabler/icons-react';
 
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

  const rows = party.map((persona) => (
    <tr key={persona.id}>
      <td>{persona.lvl}</td>
      <td>{persona.name}</td>
      <td>{persona.race}</td>
      <td>
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

  return (
    <Container>
      <Table striped highlightOnHover>
        <thead>
          <tr>
            <th>First</th>
            <th>Second</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{firstToFuse.name}</td>
            <td>{secondToFuse.name}</td>
            <td>{result}</td>
          </tr>
        </tbody>
      </Table>
      <Button onClick={() => handleFusion(firstToFuse, secondToFuse)}>
        F U S E
      </Button>
      <Table striped highlightOnHover>
        <thead>
          <tr>
            <th>Level</th>
            <th>Name</th>
            <th>Arcana</th>
            <th>Details</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </Container>
  );
}

export default UserParty;
