import axios from "axios";
import { useState, useEffect } from "react";

export const Pokemon = ({ name, url }) => {
  const [search, setSearch] = useState();

  const diplayData = () => {
    return search ? (
      <div>
        <img
          src={search?.sprites?.other?.dream_world?.front_default}
          alt="pokemon"
        />
        <h2>{name[0].toUpperCase() + name.slice(1)}</h2>
      </div>
    ) : (
      <div>Loading...</div>
    );
  };

  useEffect(
    () => axios.get(url).then((response) => setSearch(response.data))
  );

  return <div>{diplayData()}</div>;
};
