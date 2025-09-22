/* eslint-disable no-unused-vars */
import React from 'react';

const Profile = () => {
  const user = {
    name: 'Navneet',
    email: 'navneet@example.com',
    joined: '2024-01-01',
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Joined: {user.joined}</p>
    </div>
  );
};

export default Profile;
