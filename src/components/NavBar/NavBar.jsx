// import CatchReleaseButton from "../CatchReleaseButton/CatchReleaseButton";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function NavBar({count}) {
  
  const [searchPokemon, setSearchPokemon] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if(!searchPokemon.trim()) return;
    navigate (`/pokemon/${searchPokemon}`);
    setSearchPokemon("")
  };



  return (
    <>
      <nav>
        <h1>POKEDEX</h1>

        <Link to="/">Home</Link>

        <Link to="/team">My Team #{count}</Link>

        <form onSubmit={handleSubmit}>
          <input type="text"
          placeholder="search"
          value={searchPokemon}
          onChange={(e)=> setSearchPokemon(e.target.value)}
          />
          
          <button type="submit">Search</button>
        </form>
      </nav>
    </>
  );
}
