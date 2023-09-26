import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/style.css'
import App from './App';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Homepage from './components/Homepage';
const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={ <App />} />
    <Route path='/login' element={<Login />} />
    <Route path='/signup' element={<Signup />} />
    <Route path='/about' element={<About />} />
  </Route>
))
root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);

