import { useEffect, useState } from "react";
import type { Planet } from "../types/Planet.interface";

export const usePlanets = () => {
  const [planets, setPlanets] = useState<Planet[]>([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const res = await fetch("https://dragonball-api.com/api/planets");
        if (!res.ok) throw new Error(`Error HTTP: ${res.status}`);

        const data = await res.json();

        const planetsArray = data.items || data.data || [];
        setPlanets(planetsArray);
      } catch (error) {
        console.error("Error al obtener planetas:", error);
      }
    };

    fetchPlanets();
  }, []);

  return planets;
};
