import http from "../PokemonAPI";

const searchPokemon = (pokemon) => {
  return http.get(`pokemon/${pokemon}`);
};

const getAllPokemon = () => {
  return http.get("pokemon?limit=100");
};

const exportedObject = {
    searchPokemon,
    getAllPokemon,
}

export default exportedObject;
