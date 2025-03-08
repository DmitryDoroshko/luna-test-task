import { useState, useEffect } from "react";
import { fetchPokemonList, Pokemon } from "../services/pokemonService";

export const usePokemon = () => {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPokemon = async () => {
      const data = await fetchPokemonList();
      setPokemon(data);
      setLoading(false);
    };
    loadPokemon();
  }, []);

  return { pokemon, loading };
};
