import React from 'react'
import { useDisclosure } from '@mantine/hooks'

import { Modal, Group, Button } from '@mantine/core'
import PersonaTable from '../PersonaTable/PersonaTable'

function PersonaModal() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Group>
      <Button onClick={open}>Open Modal</Button>
      <Modal opened={opened} onClose={close} title="Add Persona" centered>
        <PersonaTable />
      </Modal>
    </Group>
  );
}

export default PersonaModal