import axios from "axios";

const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=100";

export interface Pokemon {
  id: number;
  name: string;
  url: string;
  sprite?: string;
}

export const fetchPokemonList = async (): Promise<Pokemon[]> => {
  try {
    const response = await axios.get(API_URL);
    const results = response.data.results as Pokemon[];

    const detailedResults = await Promise.all(
      results.map(async (pokemon) => {
        const details = await axios.get(pokemon.url);
        return {
          name: pokemon.name,
          url: pokemon.url,
          sprite: details.data.sprites.front_default,
          id: details.data.id,
        };
      })
    );

    return detailedResults;
  } catch (error) {
    console.error("Error fetching Pokémon:", error);
    return [];
  }
};