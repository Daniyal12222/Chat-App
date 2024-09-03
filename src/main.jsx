import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./component/navebar";
import HomePage from "./component/home";
import AboutPage from "./component/about";
import Login from "./component/login";

import Chat from "./component/chat";
import NotFound from "./component/notefound";
import Loader from "./component/loading";

// router dom

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Creat from "./component/creat";

const router = createBrowserRouter([
  {
    path: "/",
    element: <> <Loader />  </>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home",
    element: <> <Navbar />  <HomePage />  </>,
  },
  {
    path: "/creat",
    element: <Creat />,
  },
  {
    path: "*", element: <> <NotFound />  </>,
  },
  {
    path: "/about",
    element: <> <Navbar />  <AboutPage />  </>,
  },
  {
    path: "/chat",
    element: <> <Navbar />  <Chat />  </>,
  },


]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
