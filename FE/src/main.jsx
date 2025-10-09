// src/main.jsx

import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPages from './Pages/login.jsx';
import RegisterPages from './Pages/register.jsx';
import ErrorPage from './Pages/404.jsx';
import ProfilePages from './Pages/profile.jsx';
import DetailProductPages from './Pages/detailProduct.jsx';
import {Provider} from "react-redux";
import store from "./redux/store"
import DarkModeContextProvider from './context/DarkMode.jsx';
import { TotalPriceProvider } from './context/TotalPriceContext.jsx';
import HomePage from './Pages/homePage.jsx';
import PaymentPage from './Pages/PaymentPage.jsx';
import CoursePlayerPage from './Pages/CoursePlayerPage.jsx';
import CertificatePage from './Pages/CertificatePage.jsx';
import RootLayout from './components/Layouts/RootLayout.jsx';
import DashboardPage from './Pages/admin/DashboardPage.jsx';
import AdminProtectedRoute from './components/Layouts/AdminProtectedRoute.jsx';
import AddNewProductPage from './Pages/admin/AddNewProductPage.jsx';
import EditProductPage from './Pages/admin/EditProductPage.jsx'; 
import CartPage from './Pages/CartPage';
import { Toaster } from 'react-hot-toast';
import ProductManagementPage from './Pages/admin/ProductManagementPage.jsx'; // Impor halaman baru

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
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
        path: "/profile",
        element: <ProfilePages />,
      },
      {
        path: "/products/:id",
        element: <DetailProductPages />,
      },
      {
        path: "/payment/:id",
        element: <PaymentPage />,
      },
      {
        path: "/learn/:id",
        element: <CoursePlayerPage />,
      },
      {
        path: "/certificate/:id",
        element: <CertificatePage />,
      },
       {
        path: "/cart", 
        element: <CartPage />,
      },
      {
        path: "/admin/products",
        element: (
          <AdminProtectedRoute>
            <DashboardPage />
          </AdminProtectedRoute>
        ),
      },
      {
        path: "/admin/products/manage",
        element: (
          <AdminProtectedRoute>
            <ProductManagementPage />
          </AdminProtectedRoute>
        ),
      },
      {
        path: "/admin/products/new",
        element: (
          <AdminProtectedRoute>
            <AddNewProductPage />
          </AdminProtectedRoute>
        ),
      },
      {
        path: "/admin/products/edit/:id",
        element: (
          <AdminProtectedRoute>
            <EditProductPage />
          </AdminProtectedRoute>
        ),
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <DarkModeContextProvider>
       <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            duration: 2000,
            style: {
              background: '#363636',
              color: '#fff',
            },
            success: {
              duration: 2000,
              theme: {
                primary: 'green',
                secondary: 'black',
              },
            },
          }}
        />
          <RouterProvider router={router}/>
    </DarkModeContextProvider>
    </Provider>
  </React.StrictMode>
);