import React from 'react';
import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom'
import { IconLogout } from '@tabler/icons-react';

function LogOutButton() {
  const dispatch = useDispatch();
  return (
    <Link 
      onClick={() => dispatch({ type: 'LOGOUT' })}
      to="/home">
        <IconLogout stroke={1.5} /> 
    </Link>
      
      // This button shows up in multiple locations and is styled differently
      // because it's styled differently depending on where it is used, the className
      // is passed to it from it's parents through React props
  );
}

export default LogOutButton;
