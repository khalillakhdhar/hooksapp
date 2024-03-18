import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from './pages/Navbar.jsx';
import Events from './pages/Events.jsx';
const router = createBrowserRouter(
[
{
  path: "/",
  element: <Navbar/>,
  children: [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/events",
      element: <Events></Events>,
    },
    {
      path: "/contacts",
      element: <h1>Contacts</h1>,
    },
  ],

}
]
);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>
)
