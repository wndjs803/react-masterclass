import { createBrowserRouter } from "react-router-dom";

import Root from "./Root";
import About from "./screen/About";
import Home from "./screen/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

export default router;
