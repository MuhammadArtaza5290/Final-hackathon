import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homee from "../pages/Homee/Homee";
import EventDetail from "../pages/EventDetail/EventDetail";
import CreateEvent from "../pages/CreateEvent/CreateEvent";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Homee/>,
  },
  {
    path: "/eventdetails",
    element: <EventDetail/>
  },
  {
    path: "/createevents",
    element: <CreateEvent/>
  }
]);

export default function Routing(params) {
  return <RouterProvider router={router} />;
}
