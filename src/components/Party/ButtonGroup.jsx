import React, { useState } from "react";

// Mantine Components
import { ActionIcon, Group, } from '@mantine/core'
// Icons
import { IconPlus, } from "@tabler/icons-react";

function ButtonGroup({ buttons, }) {
  
  const [clickedId, setClickedId] = useState(-1);

  const handleClick = (id) => {
    setClickedId(id);
    console.log(id)

  };

  return (
    <>
    {buttons.map((i) => (
          <ActionIcon
            key={i}
            variant='outline'
            radius='50%'
            onClick={(event) => handleClick(event, i)}
            >
            <IconPlus />
          </ActionIcon>
            ))}
      </>
  );
}
export default ButtonGroup;

