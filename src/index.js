import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, redirect } from 'react-router-dom';

import Home from './pages/home';
import About from './pages/about';
import Error from './pages/error';
import Place from './pages/place';

import placesData from './assets/logements.json';

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
    element: <Place />,
    loader: async ({params}) => {
      let placeId = params.id;

      let currentPlace = undefined;
      placesData.forEach((placeData) => {
        if (placeData.id === placeId) {
          currentPlace = placeData;
        }
      });
    
    
      if (undefined === currentPlace){
        return redirect('/error');
      }

      return placeId;
    }
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
