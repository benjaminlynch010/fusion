import React from "react";
import { useSelector } from "react-redux";
import { useDisclosure } from "@mantine/hooks";

import { Modal, Group, Button } from "@mantine/core";
import PersonaTable from "../PersonaTable/PersonaTable";

function PersonaModal() {
  const [opened, { open, close }] = useDisclosure(false);

  const party = useSelector((store) => store.party);

  const partyButtons = () => {
    console.log(party.length);
    party.map((persona) => (
      <>
        <Button variant="outline" onClick={open}>
          add Persona
        </Button>
        <Modal opened={opened} onClose={close} title="Add Persona" centered>
          <PersonaTable />
        </Modal>
      </>
    ));
  };

  return <Group>{partyButtons}</Group>;
}

export default PersonaModal;
