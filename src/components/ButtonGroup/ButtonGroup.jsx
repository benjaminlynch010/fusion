import React, { useState } from "react";
import { useSelector } from "react-redux";

import PersonaTable from "../PersonaTable/PersonaTable";

// Mantine Components
import { Button, Group, Modal } from "@mantine/core";
// Mantine Hooks
import { useDisclosure } from "@mantine/hooks";

// Icons
import { IconPlus } from "@tabler/icons-react";


function ButtonGroup({ buttons }) {
  
  const [opened, { open, close }] = useDisclosure(false);
  const party = useSelector((store) => store.party);




  return (
    <>
      {buttons.map((button, i) => (
        <Group key={i}>
          <Button 
            variant={party.length < 5 ? "outline" : "solid"} 
            onClick={open}>
            
          </Button>
          <Modal opened={opened} onClose={close} centered>
            <PersonaTable />
          </Modal>
        </Group>
      ))}
    </>
  )

}
export default ButtonGroup;
