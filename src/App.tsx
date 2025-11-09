import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/App.css";

import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./components/layout/MainLayout";
import HomePage from "./pages/HomePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
      ],
    },
    {
      path: "*",
      element: <div>404</div>,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
