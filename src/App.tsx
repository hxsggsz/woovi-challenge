import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Payment from "./pages/payment";

function App() {
  const router = createBrowserRouter([
    {
      path: "/woovi-challenge/",
      element: <Home />,
    },
    {
      path: "/woovi-challenge/payment",
      element: <Payment />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
