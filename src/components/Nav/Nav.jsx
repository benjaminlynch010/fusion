import React from "react";
import { Link } from "react-router-dom";
import LogOutButton from "../LogOutButton/LogOutButton";
import "./Nav.css";
import { useSelector } from "react-redux";
import Header from "../Header/Header";
import Logo from "../Header/reloadHeader.png";

// Mantine
import { Button, Box, Container, Title, Group, Image } from "@mantine/core";
import {
  IconHome2,
  IconUserCircle,
  IconInfoSquareRoundedFilled,
  IconLogin,
} from "@tabler/icons-react";

function Nav() {
  const user = useSelector((store) => store.user);
  //{user.id && ()}
  return (
    <Box maw={300} mx="auto">
      <Image src={require("../Header/reloadHeader.png")} />
      <Group>
        <Link to="/home">
          <IconHome2 />
        </Link>
        <Link to="/info">
          <IconInfoSquareRoundedFilled />
        </Link>
        <Link to="/party">
          <IconUserCircle />
        </Link>
        <LogOutButton className="navLink" />
      </Group>
    </Box>
  );
}

export default Nav;
