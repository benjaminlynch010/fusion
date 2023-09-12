import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Mantine
import {
  createStyles, ScrollArea, Table, TextInput, Button, Group, Text, Center, Paper
} from '@mantine/core'

function FusionCalc() {

  const useStyles = createStyles((theme) => ({
    th: {
      padding: 0,
    },
  }))

const dispatch = useDispatch()
const personas = useSelector((store) => party.personas)


return (
  <Paper>
  </Paper>
)



}

export default FusionCalc