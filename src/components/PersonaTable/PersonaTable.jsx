import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';


// Mantine
import {
  Autocomplete, Button, Flex, Table
 } from '@mantine/core'


// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function PersonaTable(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  

  const [heading, setHeading] = useState(`Personas`);
  const personas = useSelector((store) => store.personas);
  const party = useSelector((store) => store.party)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'FETCH_PERSONAS' });
  }, [dispatch]);

  const handleClick = (persona) => {
    dispatch({ type: 'ADD_TO_PARTY', payload: persona })
  }

    const rows = personas.map((persona) => (
      <tr key={persona.id}>
        <td>{persona.lvl}</td>
        <td>{persona.race}</td>
        <td>{persona.name}</td>
        <td><Button onClick={() => handleClick(persona)}>Add</Button></td>
      </tr>
    ));

  return (
    <div>
      <h2>{heading}</h2>
      <Flex
      mih={50}
      gap="xs"
      justify="center"
      align="center"
      direction="row"
      wrap="wrap"
    >
        <Autocomplete
          placeholder="Narrow Results"
          data=
          {[
            'Chariot', 'Death', 'Devil', 'Emperor', 'Empress', 'Fool', 
            'Fortune', 'Hanged', 'Hermit', 'Hierophant', 'Judgement', 
            'Justice', 'Lovers', 'Magician', 'Moon', 'Preistess', 
            'Star', 'Strength', 'Sun', 'Temperance', 'Tower'
          ]}
        />
        <Button>Sort</Button>
      </Flex>
    <Table striped highlightOnHover>
      <thead>
        <tr>
          <th>Level</th>
          <th>Arcana</th>
          <th>Name</th>
          <th>Add to Party</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
    </div>
  );
}

export default PersonaTable;