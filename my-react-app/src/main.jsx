import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPages from './Pages/login.jsx';
import RegisterPages from './Pages/register.jsx';
import ErrorPage from './Pages/404.jsx';
import ProductsPages from './Pages/products.jsx';
import ProfilePages from './Pages/profile.jsx';
import DetailProductPages from './Pages/detailProduct.jsx';
import {Provider} from "react-redux";
import store from "./redux/store"
import Navbar from './components/Layouts/navbar.jsx';
import DarkModeContextProvider from './context/DarkMode.jsx';
import { TotalPriceProvider } from './context/TotalPriceContext.jsx';

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
  {
    path: "/products",
    element: <ProductsPages />,
  },
  {
  path: "/profile",
    element: <ProfilePages  />,
  },
  {
   path: "/products/:id",
   element: <DetailProductPages />,
  }
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <DarkModeContextProvider>
    <TotalPriceProvider>
          <RouterProvider router={router}/>
    </TotalPriceProvider>
    </DarkModeContextProvider>
    </Provider>
  </React.StrictMode>
);
