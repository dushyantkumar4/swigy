import React, { lazy, Suspense } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./views/Body.jsx";
import AboutUs from "./views/AboutUs.jsx";
import Contacts from "./views/Contacts.jsx";
import Error from "./components/Error.jsx";
import Layout from "./components/Layout.jsx";
import RestaurantMenu from "./components/restaurantInDetails/RestaurantMenu.jsx";
// import Grocery from "./components/Grocery.jsx";

const Grocery = lazy(() => import("./components/Grocery.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <Contacts />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const App = () => {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
