const axios = require('axios');

// Utility to check if a user belongs to FanCode City based on latitude and longitude
const isFanCodeUser = (user) => {
  const lat = parseFloat(user.address.geo.lat);
  const lng = parseFloat(user.address.geo.lng);
  return lat >= -40 && lat <= 5 && lng >= 5 && lng <= 100;
};

// Utility to calculate the percentage of completed todos
const calculateCompletedPercentage = (todos) => {
  const totalTasks = todos.length;
  if (totalTasks === 0) return 0; // Avoid division by zero
  const completedTasks = todos.filter((todo) => todo.completed).length;
  return (completedTasks / totalTasks) * 100;
};

// Controller to fetch and process users and todos
exports.getFanCodeUsersTodoStats = async (req, res) => {
  try {
    // Use `Promise.all` to fetch users and todos in parallel
    const [usersResponse, todosResponse] = await Promise.all([
      axios.get('http://jsonplaceholder.typicode.com/users'),
      axios.get('http://jsonplaceholder.typicode.com/todos'),
    ]);

    const users = usersResponse.data;
    const todos = todosResponse.data;

    // Filter users who belong to FanCode City
    const fanCodeUsers = users.filter(isFanCodeUser);

    // Calculate the percentage of completed tasks for each user in FanCode City
    const results = fanCodeUsers.map((user) => {
      const userTodos = todos.filter((todo) => todo.userId === user.id);
      const completedPercentage = calculateCompletedPercentage(userTodos);

      return {
        userId: user.id,
        name: user.name,
        completedPercentage,
        moreThanHalfCompleted: completedPercentage > 50,
      };
    });

    // Check if there are any FanCode users, else send a message
    if (results.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No users found in FanCode City',
      });
    }

    // Send response with success status and user completion stats
    res.status(200).json({
      success: true,
      data: results,
    });

  } catch (error) {
    // Improved error handling with more context
    console.error('Error fetching data from API:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch data from the API. Please try again later.',
      error: error.message, // Provide specific error details for debugging
    });
  }
};
