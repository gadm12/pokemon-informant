import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useOutletContext } from "react-router-dom";
import PokemonCard from "../components/PokemonCard/PokemonCard.jsx";
import MissingPokemon from "./MissingPokemon.jsx";

export default function PokemonPage() {
  const [pokemon, setPokemon] = useState(null);
  const [notFound, setNotFound] = useState(false);

  const { id } = useParams();
  const { team, toggleCatch } = useOutletContext();

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${id}`,
        );
        setPokemon(response.data);
        setNotFound(false);
      } catch (error) {
        console.log(error);
        setNotFound(true);
      }
    };
    fetchPokemon();
  }, [id]);

  if (notFound) {
    return <MissingPokemon searchedName={id} />;
  }

  if (!pokemon) {
    return <p>spinner...</p>;
  }

  const isCaught = team.some((poke) => poke.id === pokemon.id);
  const teamFull = team.length >= 6;
  const disableButton = !isCaught && teamFull;

  return (
    <>
      <h2>{pokemon.name}</h2>
      <PokemonCard
        pokemon={pokemon}
        isCaught={isCaught}
        disabled={disableButton}
        onToggle={() => toggleCatch(pokemon)}
      />
    </>
  );
}
