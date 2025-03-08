import { useState } from "react";
import { Pokemon } from "../../services/pokemonService";
import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/solid";

interface SelectProps {
  pokemonList: Pokemon[];
  selected: Pokemon[];
  setSelected: (pokemon: Pokemon[]) => void;
}

const Select = ({ pokemonList, selected, setSelected }: SelectProps) => {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const filteredPokemon = pokemonList.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (pokemon: Pokemon) => {
    if (selected.find((p) => p.name === pokemon.name)) {
      setSelected(selected.filter((p) => p.name !== pokemon.name));
    } else if (selected.length < 4) {
      setSelected([...selected, pokemon]);
    }
  };

  return (
    <div className="relative w-full max-w-md">
      {/* Input Field */}
      <div className="flex items-center justify-between p-2 border rounded-md bg-white cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <div className="flex flex-wrap gap-2">
          {selected.map((poke) => (
            <div key={poke.name} className="flex items-center bg-blue-100 px-2 py-1 rounded-md">
              <img src={poke.sprite} alt={poke.name} className="w-6 h-6 mr-1" />
              <span className="text-sm">{poke.name}</span>
              <XMarkIcon
                className="w-4 h-4 ml-1 cursor-pointer text-red-500"
                onClick={(e) => {
                  e.stopPropagation();
                  handleSelect(poke);
                }}
              />
            </div>
          ))}
        </div>
        <ChevronDownIcon className="w-5 h-5 text-gray-500" />
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute z-10 mt-2 w-full bg-white border rounded-md shadow-lg">
          <input
            type="text"
            placeholder="Search Pokémon..."
            className="w-full p-2 border-b"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="max-h-60 overflow-y-auto">
            {filteredPokemon.map((poke) => (
              <div
                key={poke.name}
                className={`flex items-center p-2 cursor-pointer hover:bg-gray-200 ${selected.some((p) => p.name === poke.name) ? "bg-blue-200" : ""}`}
                onClick={() => handleSelect(poke)}
              >
                <img src={poke.sprite} alt={poke.name} className="w-6 h-6 mr-2" />
                {poke.name}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Select;
