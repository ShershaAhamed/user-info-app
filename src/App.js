import React, { useState, useEffect } from 'react';
import UserList from './components/UserList';
import SearchBar from './components/SearchBar';
import SearchHistory from './components/SearchHistory';
import { fetchUsers } from './api';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchHistory, setSearchHistory] = useState(
    JSON.parse(localStorage.getItem('searchHistory')) || []
  );

  useEffect(() => {
    const getUsers = async () => {
      const users = await fetchUsers();
      setUsers(users);
      setFilteredUsers(users);
    };
    getUsers();
  }, []);

  const handleSearch = (term) => {
    const filtered = users.filter(user =>
      user.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredUsers(filtered);
    const updatedHistory = [term, ...searchHistory];
    setSearchHistory(updatedHistory);
    localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
  };

  const sortUsers = () => {
    const sorted = [...filteredUsers].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setFilteredUsers(sorted);
  };

  return (
    <div className="App">
      <h1>User Info</h1>
      <SearchBar onSearch={handleSearch} />
      <SearchHistory history={searchHistory} />
      <UserList users={filteredUsers} sortUsers={sortUsers} />
    </div>
  );
};

export default App;
