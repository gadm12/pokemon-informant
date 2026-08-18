export default function MissingPokemon({ searchedName }) {
  return (
    <>
      <div>
        No such pokemon with name or id '{ searchedName }' exists!
      </div>
    </>
  );
}
