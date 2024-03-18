import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import PlacesPage from "./pages/PlacesPage";
import PlacePage from "./pages/PlacePage";
const router = createBrowserRouter([
    {
        path: "/",
        element: <PlacesPage />,
    },
    {
        path: "/:id",
        element: <PlacePage />,
    },
]);
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <RouterProvider router={router} />
);

reportWebVitals();
