import React from 'react';

const SearchHistory = ({ history }) => {
  return (
    <div>
      <h3>Search History</h3>
      <ul>
        {history.map((term, index) => (
          <li key={index}>{term}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchHistory;
