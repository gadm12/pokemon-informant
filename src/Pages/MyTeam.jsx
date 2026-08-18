import { useOutletContext } from "react-router-dom";
import PokemonCard from "../components/PokemonCard/PokemonCard.jsx";

export default function MyTeam() {
  const { team, toggleCatch } = useOutletContext();



  return (
    <div>
      <h2>My Pokemon Team</h2>

      {team.length === 0 ? (
        <h3>No Pokemon Caught Yet</h3>
      ) : (
        team.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            isCaught={true}
            onToggle={() => toggleCatch(pokemon)}
          />
        ))
      )}
    </div>
  );
}
