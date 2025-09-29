import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPages from './Pages/login.jsx';
import RegisterPages from './Pages/register.jsx';
import ErrorPage from './Pages/404.jsx';

const router = createBrowserRouter([
  {
  path: "/",
  element: <div>Hello World!</div>,
  errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPages />,
  },
  {
    path: "/register",
    element: <RegisterPages />,
  },
  
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
