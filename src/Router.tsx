import { createBrowserRouter } from "react-router-dom";

import Root from "./Root";
import About from "./screen/About";
import Home from "./screen/Home";
import NotFound from "./screen/NotFound";
import ErrorComponent from "./components/ErrorComponent";
import User from "./screen/users/User";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "/users/:userId",
        element: <User />,
        // :userId를 childeren으로 분리하지 않은 이유는 /users로 라우트 하지 않기 위해서
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
