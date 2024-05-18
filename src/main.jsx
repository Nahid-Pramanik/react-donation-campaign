import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './LayOut/Root';
import Home from './components/Home/Home';
import DonationDetails from './components/DonationDetails/DonationDetails';
import Donations from './components/Donations/Donations';
import Statistics from './components/Statistics/Statistics';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <p>ki vai</p>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'details/:id',
        element: <DonationDetails></DonationDetails>,
        loader: ()=> fetch('../public/donationData.json')
      },
      {
        path: 'donation',
        element: <Donations></Donations>,
        loader: ()=> fetch('../public/donationData.json')
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>,
        loader: ()=> fetch('../public/donationData.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
