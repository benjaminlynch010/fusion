import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Mantine
import {
  ActionIcon, Container, Flex, Table, Text
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
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_PARTY' });
  }, [dispatch]);

  const handleClick = (persona) => {
    dispatch({ type: 'DELETE_FROM_PARTY', payload: persona })
  }

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
        <ActionIcon onClick={() => handleClick(persona)}>
          <IconTrash size="1.125rem" />
        </ActionIcon>
      </td>
    </tr>
  ));

  return (
<Container>
      <Text fz='xl'>{heading}</Text>
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
