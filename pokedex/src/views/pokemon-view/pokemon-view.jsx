import { useLocation } from "react-router";

export const PokemonView = () => {
  const location = useLocation();
  const pokemon = location.state;

  return (
    <main>
      <h1>{pokemon.name}</h1>
      <div>
        <h4>Abilities</h4>
        {pokemon.abilities.map((ability, index) => (
          <div key={index}>{ability.ability.name}</div>
        ))}
      </div>
    </main>
  );
};
