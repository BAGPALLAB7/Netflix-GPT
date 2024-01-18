import React from "react";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Mainpage from "./Mainpage";


const Body = () => {
  console.log("body render");
    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Login />,
        },
        {
            path: "/browse",
            element: <Mainpage />,
        },
        {
          path: '/login',
          element: <Login />
        }

    ])
  return (
    <div>
    <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
