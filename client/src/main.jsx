import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import OmdbContainer from './components/OmdbContainer';
import App from './App';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import Profile from './components/pages/Profile';
import ErrorPage from './components/pages/ErrorPage'; // Assuming you have this file
import './App.css'; // Main stylesheet



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Login />, // Set the default route to Login, can be changed
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'signup',
        element: <Signup />,
      },
      {
        path: 'profile/:username',
        element: <Profile />,
      },
      {
        path: 'me',
        element: <Profile />, // Route to view your own profile
      },
      {
        path: 'home',  // Route for OmdbContainer after login
        element: <OmdbContainer />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
