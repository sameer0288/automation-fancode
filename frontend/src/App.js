import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the user data when the component mounts
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users/fancode-stats');
        setUsers(response.data.data);  // Set the data in state
        setLoading(false);  // Set loading to false when the data is ready
      } catch (err) {
        setError('Error fetching user data.');
        setLoading(false);
      }
    };

    fetchUsers();  // Trigger the API call
  }, []);

  if (loading) {
    return <p>Loading...</p>;  // Show loading message
  }

  if (error) {
    return <p>{error}</p>;  // Show error message if API call fails
  }

  return (
    <div>
      <h1>FanCode Users Todo Completion Stats</h1>
      <ul>
        {users.map((user) => (
          <li key={user.userId}>
            <strong>{user.name}</strong>: {user.completedPercentage.toFixed(2)}% tasks completed
            {user.moreThanHalfCompleted ? ' ✔️' : ' ❌'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
