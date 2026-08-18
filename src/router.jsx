import { createHashRouter } from "react-router-dom";
import App from "./App.jsx";
import HomePage from "./Pages/HomePage.jsx";
import MyTeam from "./Pages/MyTeam.jsx";
import PokemonPage from "./Pages/PokemonPage.jsx";
import MissingPokemon from "./Pages/MissingPokemon.jsx";
import NotFoundPage from "./Pages/NotFoundPage.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "pokemon/:id",
        element: <PokemonPage />,
      },
      {
        path: "team",
        element: <MyTeam />,
      },
      {
        path: "missing",
        element: <MissingPokemon />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default router;
