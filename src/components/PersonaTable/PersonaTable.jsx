import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';



// Mantine
import {
  Button, Container, Flex, MultiSelect, Table, Text
 } from '@mantine/core'
import { IconCheck } from '@tabler/icons-react';
import { notifications } from '@mantine/notifications'

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function PersonaTable(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'

  
  const personas = useSelector((store) => store.personas);

  // gets updated list of all personas to render on page load
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'FETCH_PERSONAS' });
  }, [dispatch]);

  // dispatches to persona saga and renders success notification
  const handleClick = (persona) => {
    dispatch({ type: 'ADD_TO_PARTY', payload: persona })
    notifications.show({
      title: 'Nice Click!',
      message: 'Added to party',
      color: 'pink',
      icon: <IconCheck />,
      autoClose: 5000,
    })
    dispatch({ type: 'FETCH_PERSONAS'})
  }
  
    const tableRows = personas.map((persona) => (
      <tr key={persona.id}>
        <td>{persona.lvl}</td>
        <td>{persona.name}</td>
        <td>{persona.race}</td>
        <td><Button onClick={() => handleClick(persona)}>Add</Button></td>
      </tr>
    ));

  return (
    <Container>

      <Table striped highlightOnHover>
        <thead>
          <tr>
            <th>Level</th>
            <th>Name</th>
            <th>Arcana</th>
            <th>Add to Party</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </Table>
    </Container>
  );
}

export default PersonaTable;