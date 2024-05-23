import React from 'react';

const UserList = ({ users, sortUsers }) => {
  return (
    <div>
      <button onClick={sortUsers}>Sort by Name</button>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
