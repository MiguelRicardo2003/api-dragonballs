import { useEffect, useState } from "react";
import type { Characters } from "../types/Character.interface";

export const useApi = (): Characters[] => {
  const [characters, setCharacters] = useState<Characters[]>([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const res = await fetch(
          "https://dragonball-api.com/api/characters?limit=58"
        );
        if (!res.ok) throw new Error(`Error HTTP: ${res.status}`);

        const data = await res.json();
  
        const charactersArray = data.items || data.data || [];
        setCharacters(charactersArray);
      } catch (error) {
        console.error("Error al obtener personajes:", error);
      }
    };

    fetchCharacters();
  }, []);

  return characters;
};
