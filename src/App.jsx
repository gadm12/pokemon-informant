import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import { Outlet } from "react-router-dom";

export default function App() {
  const [team, setTeam] = useState([]);

  const toggleCatch = (pokemon) => {
    const isCaught = team.some((p) => p.id === pokemon.id);

    if (isCaught) {
      setTeam((prev) => prev.filter((p) => p.id !== pokemon.id));
    } else {
      if (team.length >= 6) return;
      setTeam((prev) => [...prev, pokemon]);
    }
  };

  return (
    <>
      <NavBar count={team.length} />
      <Outlet context={{ team, toggleCatch }} />
    </>
  );
}
