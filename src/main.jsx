import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./component/navebar";
import HomePage from "./component/home";
import AboutPage from "./component/about";
import ChatMassege from "./component/chatMasseg";
import Login from "./component/login";
import ChatS from "./component/chatId";
import Chat from "./component/chat";
import NotFound from "./component/notefound";
import Creat from "./component/creat";
import Loader from "./component/loading";
import "./index.css";

// router dom

import {createBrowserRouter , RouterProvider,} from "react-router-dom";

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
    path: "/chatMasseg",
    element: <ChatMassege />,
  },
  {
    path: "/home",
    element: <> <Navbar />  <HomePage />  </>,
  },
  {
    path: "chatId",
    element: <ChatS />
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
