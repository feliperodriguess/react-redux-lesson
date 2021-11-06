import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/user/userSlice';

const Logout = () => {
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
      <Button onClick={handleLogout}>Logout</Button>
  );
}

export default Logout;
