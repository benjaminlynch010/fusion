import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Nav from '../Nav/Nav'

// Mantine
import {
  Card,
  SimpleGrid,
  Text
 } from '@mantine/core'


// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function PartyPage(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
   const [heading, setHeading] = useState('Functional Personas');

  const personas = useSelector((store) => store.personas);

  const dispatch = useDispatch();
  dispatch({ type: 'FETCH_PERSONAS' })
  return (
    <div>
      <h2>{heading}</h2>
      {personas.map((persona) => (
        <SimpleGrid key={persona.id} xs={12} sm={6} md={4} lg={3}>
          <Card>
            <Text>Persona : {persona.name}</Text>
            <Text>Level : {persona.lvl}</Text>
          </Card>
        </SimpleGrid>
      ))}
    </div>
  );
}

export default PartyPage;