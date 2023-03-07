import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from '@pages/Login';
import Error from '@pages/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
    errorElement: <Error />,
    children: [
      {
        path: 'contacts/:contactId',
        element: <div>대한민국 임시정부</div>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
