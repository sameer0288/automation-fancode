
## Setup and Installation

To set up this project, you need to install dependencies for both the backend and the frontend.

### Prerequisites

- **Node.js** and **npm**: Make sure you have Node.js and npm installed on your machine. You can download it [here](https://nodejs.org/en/download/).

### Backend

1. Navigate to the backend directory:

    ```bash
    cd backend
    ```

2. Install the backend dependencies:

    ```bash
    npm install
    ```

3. Start the backend server:

    ```bash
    npm run dev
    ```

   By default, the server will run on `http://localhost:5000`.

### Frontend

1. Navigate to the frontend directory:

    ```bash
    cd frontend
    ```

2. Install the frontend dependencies:

    ```bash
    npm install
    ```

3. Start the frontend development server:

    ```bash
    npm start
    ```

   The frontend will run on `http://localhost:3000` by default.

## Running the Project

### Backend
- Start the backend server by navigating to the `backend` directory and running:

    ```bash
    npm run dev
    ```

- The backend server will run at `http://localhost:5000`, and you can access the API at `/api/users/fancode-stats`.

### Frontend
- Start the frontend server by navigating to the `frontend` directory and running:

    ```bash
    npm start
    ```

- Open your browser and navigate to `http://localhost:3000` to see the users' stats.

## API Endpoint

The backend provides an API endpoint to retrieve the completion percentage for users in the FanCode city.

- **Endpoint**: `/api/users/fancode-stats`
- **Method**: `GET`

The API fetches data from JSONPlaceholder, processes the users' todo completion rates, and returns a JSON response in the following format:

```json
{
  "data": [    {      "userId": 1,      "name": "User Name",      "completedPercentage": 75.0,      "moreThanHalfCompleted": true    },    {      "userId": 2,      "name": "Another User",      "completedPercentage": 45.0,      "moreThanHalfCompleted": false    }  ]
}


```

### Key Features:
1. **Backend**:
   - API endpoint `/api/users/fancode-stats` to fetch and process user todo completion stats.
   - CORS enabled for frontend-backend communication.
   
2. **Frontend**:
   - React app with `UserList.js` to display user stats.
   
3. **Running Instructions**:
   - Step-by-step guide to set up and run the backend and frontend servers.

This README provides all the necessary instructions for setting up, running, and understanding the project structure and functionality.
