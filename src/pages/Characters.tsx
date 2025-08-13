import { useState } from "react";
import { useApi } from "../hooks/useApi";
import { usePlanets } from "../hooks/usePlanets";
import { CardBalls } from "../components/CardBalls";
import { InputFilter } from "../components/InputFilter";
import { Header } from "../components/Header";
import { filterCharacters } from "../utils/filterCharacters";

export const CharactersPage = () => {
  const characters = useApi();
  const planets = usePlanets();
  const [filter, setFilter] = useState("");

  const filteredCharacters = filterCharacters(characters, filter);

  // Asignar planeta aleatorio a cada personaje
  function getRandomPlanet() {
    if (planets.length === 0) return undefined;
    return planets[Math.floor(Math.random() * planets.length)];
  }

  return (
    <div className="flex flex-col items-center h-screen overflow-y-auto p-4">
      <Header />
      <InputFilter value={filter} onChange={setFilter} />

      <div className="flex flex-wrap gap-6 justify-center w-full">
        {filteredCharacters.length > 0 ? (
          filteredCharacters.map((char) => (
            <CardBalls key={char.id} character={char} planet={getRandomPlanet()} />
          ))
        ) : (
          <p className="text-gray-500 mt-10">No se encontraron personajes.</p>
        )}
      </div>
    </div>
  );
};
