import React from "react";
import { Pokemon } from "../../services/pokemonService";

interface ModalProps {
  selectedPokemon: Pokemon[];
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ selectedPokemon, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Your Pokémon Team</h2>
        <div className="flex flex-wrap gap-4">
          {selectedPokemon.map((poke) => (
            <div key={poke.id} className="flex flex-col items-center">
              <img src={poke.sprite} alt={poke.name} className="w-16 h-16" />
              <p className="text-sm font-medium">{poke.name}</p>
            </div>
          ))}
        </div>
        <button
          onClick={onClose}
          className="mt-4 w-full bg-red-500 text-white py-2 rounded">
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
