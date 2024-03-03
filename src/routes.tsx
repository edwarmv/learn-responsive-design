import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Introduction from "./pages/Introduction";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "introduction",
        element: <Introduction />,
      },
    ],
  },
]);
