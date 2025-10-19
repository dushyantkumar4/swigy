import React from "react";
import "./App.css";
import Body from "./components/Body.jsx";
import Header from "./components/Header.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUs from "./components/AboutUs.jsx";
import Contacts from "./components/Contacts.jsx";
import Error from "./components/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Body />
      </>
    ),
    errorElement:<Error/>
  },
  {
    path: "/about",
    element: (
      <>
        <Header />
        <AboutUs />
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <Header />
        <Contacts />
      </>
    ),
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
