import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Payment from "./pages/payment";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/payment",
      element: <Payment />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
