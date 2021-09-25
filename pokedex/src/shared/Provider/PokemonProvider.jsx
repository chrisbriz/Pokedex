import React, { createContext, useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";

const useMountedState = () => {
  const mountedRef = useRef(false)
  const isMounted = useCallback(() => mountedRef.current, [])

  useEffect(() => {
    mountedRef.current = true

    return () => {
      mountedRef.current = false
    }
  }, [])

  return isMounted
}

export const PokemonContext = createContext();
const url = "https://pokeapi.co/api/v2/pokemon";

export const PokemonProvider = (props) => {
  const [pokemons, setPokemons] = useState([])
  const isMounted = useMountedState()

  const fetchData = () => {
    axios.get(url).then((response) => setPokemons(response.data.results));
  };

  useEffect(() => {
    if (isMounted()) {
      fetchData();
    }
  }, [isMounted]);

  const providerValue = {
    pokemons,
  };

  return (
    <PokemonContext.Provider value={providerValue}>
      {props.children}
    </PokemonContext.Provider>
  );
};
