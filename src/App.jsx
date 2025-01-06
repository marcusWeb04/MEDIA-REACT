import { createBrowserRouter, RouterProvider } from "react-router-dom";
// erreur
import NoFound from "./pages/NoFoundPage";
// public
import Home from "./pages/Public/Home";
import Connexion from "./pages/Public/Connexion";
// client
import Feed from "./pages/Client/Feed";
import Music from "./pages/Client/Music";
import Profil from "./pages/Client/Profil";
import Follow from "./pages/Client/Follow";

// state
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NoFound />,
  },
  {
    path: "/connexion",
    element: <Connexion />,
  },
  {
    path: "/profil",
    element: <Profil />,
  },
  {
    path: "/feed",
    element: <Feed />,
  },
  {
    path: "/music",
    element: <Music />,
  },
  {
    path: "/playlist",
    element: <Music />,
  },
  {
    path: "/follow",
    element: <Follow />,
  },
  {
    path: "/setting",
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
