import { createBrowserRouter, RouterProvider } from "react-router-dom";
// erreur
import NoFound from "./pages/NoFoundPage";
// public
import Home from "./pages/Public/Home";
// client
import Dashborad from "./pages/Client/Dashboard";

// state
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NoFound />,
  },
  {
    path: "/dashborad",
    element: <Dashborad />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
