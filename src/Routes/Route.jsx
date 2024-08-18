


// Define a function that checks if the user is authenticated

import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import OurTeam from "../Pages/OurTeam";
import SevicePage from "../Pages/Service";
import CasePage from "../Pages/CasePage";



let Routers = createBrowserRouter([
  { index: true, element: <LandingPage /> },
  { path : "OurTeam", element: <OurTeam /> },
  { path : "SevicePage", element: <SevicePage /> },
  { path : "CasePage", element: <CasePage /> },


  
  
  


]);
export default Routers;