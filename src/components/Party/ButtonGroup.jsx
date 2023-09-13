import React, { useState } from "react";

// Mantine Components
import { ActionIcon, } from '@mantine/core'
// Icons
import { IconPlus, } from "@tabler/icons-react";


function ButtonGroup({ buttons }) {

const [ clickedID, setClickedID ] = useState(-1)

const handleClick = () => {
  console.log('click.')
  // After click do this
  // TODO
}

  return (
    <>
    {buttons.map((index) => (
      <ActionIcon 
        key={index}
        onClick={() => handleClick(index)} 
        variant="outline" 
        radius="50%">
        {buttonLabel}
      </ActionIcon>
    ))}
    </>
  );
}

export default ButtonGroup;
