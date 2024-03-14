import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/home';
import About from './pages/about';
import Error from './pages/error';
import Place from './pages/place';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/place/:id",
    element: <Place />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

const head = document.querySelector("head");
const script = document.createElement("script");

script.setAttribute("src", "https://kit.fontawesome.com/f65a9a96b2.js");
head.appendChild(script);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();