import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import MainPage from "./components/pages/MainPage";
import CoffeePage from "./components/pages/CoffeePage";
import CoffeeOneCard from "./components/ui/CoffeeOneCard";
import CoffeeAddPage from "./components/pages/CoffeeAddPage";

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
        {
          path: "/onecoffee",
          element: <CoffeeOneCard />,
        },
        {
          path: "/coffeeadd",
          element: <CoffeeAddPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
