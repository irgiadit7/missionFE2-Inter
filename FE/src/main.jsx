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

const router = createBrowserRouter([
  {
    // 2. Jadikan RootLayout sebagai elemen utama
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    // 3. Pindahkan semua halaman menjadi children
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
        path: "/admin/products",
        element: (
          <AdminProtectedRoute>
            <DashboardPage />
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
    <TotalPriceProvider>
          <RouterProvider router={router}/>
    </TotalPriceProvider>
    </DarkModeContextProvider>
    </Provider>
  </React.StrictMode>
);