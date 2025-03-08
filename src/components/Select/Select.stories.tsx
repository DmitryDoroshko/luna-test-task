import { Meta, StoryFn } from "@storybook/react";
import Select from "./Select";
import { useState } from "react";
import { Pokemon } from "../../services/pokemonService";

export default {
  title: "Components/Select",
  component: Select,
} as Meta<typeof Select>;

const Template: StoryFn<typeof Select> = (args) => {
  const [selected, setSelected] = useState<Pokemon[]>([]);
  return <Select {...args} selected={selected} setSelected={setSelected} />;
};

export const Default = Template.bind({});
Default.args = {
  pokemonList: [
    {
      id: 1,
      name: "Bulbasaur",
      sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      url: "https://pokeapi.co/api/v2/ability/1/",
    },
    {
      id: 4,
      name: "Charmander",
      sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
      url: "https://pokeapi.co/api/v2/ability/4/",
    },
    {
      id: 7,
      name: "Squirtle",
      sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
      url: "https://pokeapi.co/api/v2/ability/7/",
    },
    {
      id: 25,
      name: "Pikachu",
      sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
      url: "https://pokeapi.co/api/v2/ability/25/",
    },
  ],
};
