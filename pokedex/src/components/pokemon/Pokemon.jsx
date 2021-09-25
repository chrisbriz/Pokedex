import axios from "axios";
import { useState, useEffect, useRef, useCallback } from "react";
import { useHistory } from "react-router";
import RoutingPath from "../../routes/RoutingPath";

const useMountedState = () => {
  const mountedRef = useRef(false);
  const isMounted = useCallback(() => mountedRef.current, []);

  useEffect(() => {
    mountedRef.current = true;

    return () => {
      mountedRef.current = false;
    };
  }, []);

  return isMounted;
};

export const Pokemon = ({ name, url }) => {
  const history = useHistory();
  const [search, setSearch] = useState([]);
  const isMounted = useMountedState();

  const getPokemon = () => {
    axios
      .get(url)
      .then((response) => setSearch(response.data))
      .catch((error) => alert(error));
      
  };

  const diplayData = () => {
    return search ? (
      <div>
        <img
          src={search?.sprites?.other?.dream_world?.front_default}
          alt="pokemon"
        />
        <h2>{name}</h2>
        <button onClick={sendData}>
          Details
        </button>
      </div>
    ) : (
      <div>Loading...</div>
    );
  };

  const sendData = () => {
    history.push(RoutingPath.pokemon, search.data)
  }

  useEffect(() => {
    if (isMounted()) {
      getPokemon();
    }
  }, [isMounted]);

  return <div>{diplayData()}</div>;
};
