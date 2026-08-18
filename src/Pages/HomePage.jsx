import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {

  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const getPokemonData = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=30",
        );
        console.log(response.data);
        console.log(response.data.results);
        setPokemonList(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    getPokemonData();
  }, []);

  return (
    <>
      <h2>Home</h2>

      <div className="main-page-contents">
        <ol>
          {pokemonList.map((poke) => (
            <li key={poke.name}>
              <Link to={`/pokemon/${poke.name}`}>{poke.name}</Link>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
