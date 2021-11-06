import React from 'react';
import { useSelector } from 'react-redux';

const User = () => {
  const user = useSelector(state => state.user);

  return (
    <div>
      <h1>Usuário: {user.name}</h1>
      <h3>Location: {user.location}</h3>
      <h3>Followers: {user.followers}</h3>
      <h3>Following: {user.following}</h3>
      <h3>repos: {user.repos}</h3>
      <h3>email: {user.email}</h3>
    </div>
  );
}

export default User;
