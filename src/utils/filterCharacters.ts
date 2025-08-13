import type { Characters } from "../types/Character.interface";

export function filterCharacters(
  characters: Characters[],
  search: string
): Characters[] {
  const lowerSearch = search.toLowerCase();
  return characters.filter(
    (char) =>
      char.name.toLowerCase().includes(lowerSearch) ||
      char.race.toLowerCase().includes(lowerSearch) ||
      char.affiliation.toLowerCase().includes(lowerSearch)
  );
}
