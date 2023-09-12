import React, { useState } from "react";

// Mantine Hooks
import { useInputState } from "@mantine/hooks";
import { useForm } from "@mantine/form";

// Mantine Components
import {
  ActionIcon,
  Card,
  Container,
  Group,
  Flex,
  Modal,
  Paper,
  Stack,
  Title,
  Text,
  TextInput,
  NumberInput,
} from "@mantine/core";

// Icons
import { IconPlus } from "@tabler/icons-react";

import PersonaModal from './PersonaModal' 

function PartyForm() {
  const [stringValue, setStringValue] = useInputState("");
  const [numberValue, setNumberValue] = useInputState(0);

  const form = useForm({
    initialValues: {
      header: stringValue,
      subheader: "Notes",
    },
  });

//   <ActionIcon variant="outline" radius="50%">
//   <IconPlus />
// </ActionIcon>
// <ActionIcon variant="outline" radius="50%">
//   <IconPlus />
// </ActionIcon>
// <ActionIcon variant="outline" radius="50%">
//   <IconPlus />
// </ActionIcon>
// <ActionIcon variant="outline" radius="50%">
//   <IconPlus />
// </ActionIcon>
// <ActionIcon variant="outline" radius="50%">
//   <IconPlus />
// </ActionIcon>
// <ActionIcon variant="outline" radius="50%">
//   <IconPlus />
// </ActionIcon>

  const addButton = (
    <ActionIcon variant="outline" radius="50%">
      <IconPlus />
    </ActionIcon>
  );

  // Instead of manually messing around with button
  const addButtonArray = Array(6).fill(addButton)

  return (
    <Container>
      <Stack>
        <Title>Unnamed Party</Title>
        <Text size="xs" color="dimmed">
          Notes
        </Text>
      </Stack>

      <Group position="center" spacing="lg" p="md">
        {addButtonArray.map((button, index) => (
          <
        ))}
      </Group>

      <PersonaModal />
    </Container>
  ); // end return
}

export default PartyForm;
