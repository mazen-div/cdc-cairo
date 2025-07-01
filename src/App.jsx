import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routers from './Routes/Route';
import { RouterProvider } from 'react-router-dom';
import Loader from './Pages/Loader';

// Import Loader Component

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate an initialization/loading process
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Stop loading after 2 seconds
    }, 1000);

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  if (isLoading) {
    // Display the loader during loading state
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Loader />
      </div>
    );
  }

  return (
    <div className="App">
      <RouterProvider router={Routers} />
    </div>
  );
}

export default App;
