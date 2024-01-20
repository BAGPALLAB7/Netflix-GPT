import React from "react";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Mainpage from "./Mainpage";
import ErrorRoute from "./ErrorRoute";


const Body = () => {
  console.log("body render");
    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Login />,
            errorElement: <ErrorRoute/>
        },
        {
            path: "/browse",
            element: <Mainpage />,
            errorElement: <ErrorRoute/>
        },
        {
          path: '/login',
          element: <Login />,
          errorElement: <ErrorRoute/>
        },
        

    ])
  return (
    <div>
    <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
