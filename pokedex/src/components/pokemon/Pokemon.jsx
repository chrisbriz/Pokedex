import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import RoutingPath from "../../routes/RoutingPath";

export const Pokemon = ({ name, url }) => {
  const history = useHistory()
  const [search, setSearch] = useState([])

  const getPokemon = async () => {
    await axios
      .get(url)
      .then((response) => setSearch(response.data))
      .catch((error) => alert(error));
  }

  const diplayData = () => {
    return search ? (
      <div>
        <img
          src={search?.sprites?.other?.dream_world?.front_default}
          alt="pokemon"
        />
        <h2>{name}</h2>
        <button onClick={() => history.push(RoutingPath.pokemon, search)}>
          Details
        </button>
      </div>
    ) : (
      <div>Loading...</div>
    )
  }

  useEffect(() => {
    getPokemon()
  })

  return <div>{diplayData()}</div>
}
