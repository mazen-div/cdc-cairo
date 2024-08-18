import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Routers from './Routes/Route';
import { RouterProvider } from "react-router-dom";

function App() {


  return (
    <div>
     <RouterProvider router={Routers} />
    </div>
  )
}

export default App
