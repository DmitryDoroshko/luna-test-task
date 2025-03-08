import { useState } from "react";
import { useForm } from "react-hook-form";
import { usePokemon } from "../hooks/usePokemon";
import Select from "../components/Select/Select";
import Modal from "../components/Modal/Modal";
import { Pokemon } from "../services/pokemonService";

const BattleForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { pokemon, loading } = usePokemon();
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onSubmit = (data: any) => {
    if (selectedPokemon.length !== 4) {
      alert("You must select exactly 4 Pokémon.");
      return;
    }
    setIsModalOpen(true);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">Pokémon Battle Tower Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name Input */}
        <div className="mb-4">
          <label className="block text-gray-700">First Name</label>
          <input
            {...register("firstName", { required: true, minLength: 2, maxLength: 12, pattern: /^[a-zA-Z]+$/ })}
            className="w-full p-2 border rounded"
          />
          {errors.firstName && <p className="text-red-500 text-sm">Invalid first name</p>}
        </div>

        {/* Last Name Input */}
        <div className="mb-4">
          <label className="block text-gray-700">Last Name</label>
          <input
            {...register("lastName", { required: true, minLength: 2, maxLength: 12, pattern: /^[a-zA-Z]+$/ })}
            className="w-full p-2 border rounded"
          />
          {errors.lastName && <p className="text-red-500 text-sm">Invalid last name</p>}
        </div>

        {/* Select Component */}
        <div className="mb-4">
          <label className="block text-gray-700">Select Your Pokémon Team</label>
          {loading ? <p>Loading Pokémon...</p> : <Select pokemonList={pokemon} selected={selectedPokemon} setSelected={setSelectedPokemon} />}
        </div>

        {/* Submit Button */}
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Submit</button>
      </form>

      {/* Modal */}
      {isModalOpen && <Modal selectedPokemon={selectedPokemon} onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default BattleForm;
