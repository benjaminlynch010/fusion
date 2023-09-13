import React, { useState } from "react";
import { useSelector } from "react-redux";

// Mantine Components
import { Button } from "@mantine/core";
// Mantine Hooks
import { useInputState } from "@mantine/hooks";

// Icons
import { IconPlus } from "@tabler/icons-react";

import PersonaModal from "../Party/PersonaModal";

function ButtonGroup({ buttons }) {
  const party = useSelector((store) => store.party);
  const [ hasPersona, setHasPersona ] = useState('Add Persona')

  const buttonLabel = () => {
    
  }

  return (
    <>
    {buttons.map((name, i) => (
        <Button key={i} 
        name={hasPersona}
        variant="outline"
        onClick=""
        >
          {hasPersona}
        </Button>
        ))}
    </>
  )

}
export default ButtonGroup;
