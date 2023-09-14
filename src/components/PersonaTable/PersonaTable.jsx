import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Mantine
import {
  Button, Container, Flex, MultiSelect, Table, Text, ActionIcon
 } from '@mantine/core'
import { IconCheck, IconPlus } from '@tabler/icons-react';
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
    dispatch({ type: 'FETCH_PARTY'})
  }
  
    const tableRows = personas.map((persona) => (
      <tr key={persona.id}>
        <td>{persona.lvl}</td>
        <td>{persona.name}</td>
        <td>{persona.race}</td>
        <td>
          <ActionIcon 
            onClick={() => handleClick(persona)}
            variant="filled"
            radius="50%"
            color="pink"
            >
            <IconPlus />
          </ActionIcon>
        </td>
      </tr>
    ));

  return (
    <Container
      mx='auto'
      p='0'
      >
      <Table striped highlightOnHover>
        <thead>
          <tr>
            <th>Level</th>
            <th>Name</th>
            <th>Arcana</th>
            <th>Add</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </Table>
    </Container>
  );
  
  
  
  // return (
  //   <Select
  //     label='Add to Party'
  //     placeholder='Pick One'
  //     searchable
  //     onSearchChange={onSearchChange}
  //     searchValue={searchValue}
  //   />
  // )



}


export default PersonaTable;