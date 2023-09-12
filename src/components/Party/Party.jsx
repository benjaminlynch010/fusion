import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import PartyForm from './PartyForm'
// Mantine Hooks
import { useInputState, } from '@mantine/hooks';

// Mantine Components
import { TextInput, } from '@mantine/core';

function Party() {

  return (
    <>
      <PartyForm />
    </>
  );
}

export default Party