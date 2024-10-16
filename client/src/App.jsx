import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import MainPage from "./components/pages/MainPage";
import CoffeePage from "./components/pages/CoffeePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <MainPage />,
        },
        {
          path: "/coffee",
          element: <CoffeePage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
