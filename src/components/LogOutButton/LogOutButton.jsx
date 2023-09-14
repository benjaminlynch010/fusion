import React from 'react';
import { useDispatch } from 'react-redux';

import { NavLink } from '@mantine/core'
import { IconLogout } from '@tabler/icons-react';

function LogOutButton() {
  const dispatch = useDispatch();
  return (
    <NavLink 
      icon={<IconLogout size="2rem" stroke={1.5} />} 
      onClick={() => dispatch({ type: 'LOGOUT' })}
      to="/home" />
      // This button shows up in multiple locations and is styled differently
      // because it's styled differently depending on where it is used, the className
      // is passed to it from it's parents through React props
  );
}

export default LogOutButton;
