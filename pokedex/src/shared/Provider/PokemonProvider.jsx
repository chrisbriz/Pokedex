import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const PokemonContext = createContext();
const url = "https://pokeapi.co/api/v2/pokemon?limit=100";

export const PokemonProvider = (props) => {
  const [pokemons, setPokemons] = useState([]);

  const fetchData = async () => {
    await axios.get(url).then((response) => setPokemons(response.data.results));
  };

  useEffect(() => {
    fetchData()
  }, []);

  console.log(pokemons)

  const providerValue = {
    pokemons,
  };

  return (
    <PokemonContext.Provider value={providerValue}>
      {props.children}
    </PokemonContext.Provider>
  );
};
