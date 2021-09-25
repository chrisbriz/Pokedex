import { useContext } from "react";
import { PokemonContext } from "../../shared/Provider/PokemonProvider";
import { Pokemon } from "../../components/pokemon/Pokemon";

export const Pokedex = () => {
  const { pokemons } = useContext(PokemonContext);

  return (
    <div className="pokemon-list">
      <h2>Pokemons</h2>
      {pokemons.map((pokemon) => (
        <div key={`${pokemon.name}`}>
          <Pokemon name={pokemon.name} url={pokemon.url} />
        </div>
      ))}
    </div>
  );
};
