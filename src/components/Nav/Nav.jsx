import React from "react";
import { Link } from "react-router-dom";
import LogOutButton from "../LogOutButton/LogOutButton";

import { useSelector } from "react-redux";
import './reloadHeader.png'

// Mantine
import { ActionIcon, Box, Container, Title, Group, Image } from "@mantine/core";
import {
  IconHome2,
  IconUserCircle,
} from "@tabler/icons-react";

function Nav() {
  const user = useSelector((store) => store.user);
  //{user.id && ()}
  return (
      <>
      <Group >
        <Image id='reload'
        src={require('./reloadHeader.png')}
        />
      </Group>

      <Group
        id="navbar"
        spacing="md"
        mx='md'
        pt='lg'
        mb='3rem'
        >
        <Link to="/home">
          <IconHome2 stroke={2} />
        </Link>
        <Link to="/party">
          <IconUserCircle stroke={2}/>
        </Link>
        <LogOutButton />
      </Group>
  </>
  );
}

export default Nav;
