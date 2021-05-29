import React, { useState } from 'react';
import AddUser from './components/Users/AddUser/AddUser';
import UserList from './components/Users/UserList/UserList';

function App() {

  let [users, setUsers] = useState([]);

  const addUserHandler = (user) => {
    setUsers(prevUsers => {
      const updatedUsers = [...prevUsers];
      let newId = updatedUsers.length > 0 ? updatedUsers.sort((a,b) => a.id < b.id ? 1 : a.id > b.id ? -1 : 0)[0].id : 0;
      newId++;
      updatedUsers.unshift({ ...user, id: newId});
      return updatedUsers;
    });
  }

  const deleteUserHandler = (id) => {
    setUsers(prevUsers => {
      const updatedUsers = [...prevUsers].filter(u => u.id !== id);
      return updatedUsers;
    });
  };

  return (
    <div>
      <AddUser 
        onAddUser={addUserHandler}
        />
      <UserList 
        users={users}
        onDelete={deleteUserHandler}
        />
    </div>
  );
}

export default App;
