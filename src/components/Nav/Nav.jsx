import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

// Mantine
import { Button, Box, Title, Group, NavLink } from '@mantine/core'
import { IconHome2 , IconUserCircle, IconInfoSquareRoundedFilled } from '@tabler/icons-react'


function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <Box w={240} className="nav">
        <Title p='lg' className="nav-title">Velvet Room</Title>
        <Group positon='right' mt='md'>
          
           <NavLink icon={<IconHome2 size="2rem" stroke={1.5} />} onChange="/home" />
   
        
        </Group>
     

        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <Button variant='subtle' className="Button variant='subtle'" to="/login">
            Login / Register
          </Button>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <Group>
            <NavLink icon={<IconInfoSquareRoundedFilled size="2rem" stroke={1.5} />} to="/info" />

            <NavLink icon={<IconUserCircle size='2rem' stroke={1.5} />} to='/user-party' />

            <LogOutButton  className="navLink" />
          </Group>
        )}

    </Box>
  );
}

export default Nav;
