export default function PokemonCard({
  pokemon,
  isCaught,
  onToggle,
  disabled,
}) {
  const bgClass = `bg-color-${pokemon.types[0].type.name}`;

  return (
    <div className={`pokemon-card ${bgClass}`}>
      <h3>{pokemon.name}</h3>

      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />

      <div className="moves">
        {pokemon.moves.slice(0, 4).map((m) => (
          <div key={m.move.name}>{m.move.name}</div>
        ))}
      </div>

      <button
        className={isCaught ? "release-btn" : "catch-btn"}
        onClick={onToggle}
        disabled={disabled}
      >
        {isCaught
          ? "Release"
          : disabled
            ? "Team Full"
            : "Catch"}
      </button>
    </div>
  );
}
