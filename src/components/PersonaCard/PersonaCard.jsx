import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Mantine
import {
  createStyles,
  ScrollArea,
  Table,
  TextInput,
  Button,
  Group,
  Text,
  Center,
  Paper,
  Image,
  Card,
  Badge,
} from "@mantine/core";

function PersonaCard() {
  const party = useSelector((store) => store.party);

  const personaCard = party.map((persona) => (
    <Card shadow="md" padding="lg" radius="sm" withBorder key={persona.id}>
      <Card.Section>
        {/* <Image
        src=""
        alt="Persona"
      /> */}
      </Card.Section>

      <Group postion="apart" mt="md" mb="xs">
        <Text weight={500}>{persona.name}</Text>
        <Badge color="pink" variant="light">
          {persona.race}
        </Badge>
      </Group>

      <Table>
        <thead>
          <tr>
            <th>Stats</th>
          </tr>
        </thead>
        <tbody>
          <tr>{(JSON.parse(persona.stats))}</tr>

        </tbody>
      </Table>
    </Card>
  ));

  return <Paper>{personaCard}</Paper>;
}

export default PersonaCard;
