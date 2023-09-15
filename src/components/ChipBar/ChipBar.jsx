import React, { useState } from "react";
import { useSelector } from "react-redux";

import { Container, Flex } from '@mantine/core'


function ChipBar() {

  const store = useSelector((store) => store);

  const [selectedValues, setSelectedValues] = useState([]);

  const handleSelectChange = (values) => {
    setSelectedValues(values);
    console.log(values);
  };
  return (
    <Container>
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
    </Container>
  );
}

export default ChipBar;
