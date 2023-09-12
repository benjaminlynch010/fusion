import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';



// Mantine
import {
  Button, Container, Flex, MultiSelect, Table, Text
 } from '@mantine/core'
import { IconCheck, IconX } from '@tabler/icons-react';
import { notifications } from '@mantine/notifications'

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function PersonaTable(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  

  const [heading, setHeading] = useState(`Personas`);
  const [selectedValues, setSelectedValues] = useState([])
  const personas = useSelector((store) => store.personas);


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'FETCH_PERSONAS' });
  }, [dispatch]);

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

    const handleSelectChange = (values) => {
      setSelectedValues(values);
      console.log(values)
    }

  return (
    <Container>
      <Text>{heading}</Text>
      <Flex
        mih={50}
        gap="xs"
        justify="center"
        align="center"
        direction="row"
        wrap="wrap"
      >
<MultiSelect
  data={[
    { value: "Chariot", label: "Chariot" },
    { value: "Death", label: "Death" },
    { value: "Devil", label: "Devil" },
    { value: "Emperor", label: "Emperor" },
    { value: "Empress", label: "Empress" },
    { value: "Fool", label: "Fool" },
    { value: "Fortune", label: "Fortune" },
    { value: "Hanged", label: "Hanged" },
    { value: "Hermit", label: "Hermit" },
    { value: "Hierophant", label: "Hierophant" },
    { value: "Judgement", label: "Judgement" },
    { value: "Justice", label: "Justice" },
    { value: "Lovers", label: "Lovers" },
    { value: "Magician", label: "Magician" },
    { value: "Moon", label: "Moon" },
    { value: "Preistess", label: "Preistess" },
    { value: "Star", label: "Star" },
    { value: "Strength", label: "Strength" },
    { value: "Sun", label: "Sun" },
    { value: "Temperance", label: "Temperance" },
    { value: "Tower", label: "Tower" },
  ]}
  value={selectedValues}
  onChange={handleSelectChange}
  label="Narrow Results by Arcana"
  placeholder="Select Arcana"
  clearable
  searchable
/>
      </Flex>
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