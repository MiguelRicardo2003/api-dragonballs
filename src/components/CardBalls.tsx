import type { Characters } from "../types/Character.interface";
import type { Planet } from "../types/Planet.interface";

interface CardBallsProps {
  character: Characters;
  planet?: Planet;
}

export const CardBalls = ({ character, planet }: CardBallsProps) => {
  return (
    <div
      className="
        relative max-w-[350px] min-h-[330px] bg-gray-200 border-2 border-blue-400 
        rounded-xl flex flex-col items-center pt-14 px-4 pb-4 overflow-hidden shadow-lg
        transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl
      "
    >
      {/* Nombre */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-[#e5dbc7] px-8 py-2 rounded-xl z-20 whitespace-nowrap max-w-[90%] overflow-hidden text-ellipsis">
        <span className="text-medium font-semibold text-black">
          {character.name}
        </span>
      </div>

      {/* Layout principal */}
      <div className="flex flex-row w-full h-full mt-2 gap-2">
        {/* Imagen personaje con planeta de fondo */}
        <div className="relative flex items-center justify-center w-1/2 min-w-[120px]">
          <div
            className="absolute -left-4 top-1/2 -translate-y-1/2 w-32 h-40 rounded-full -z-10 bg-cover bg-center"
            style={{
              backgroundImage: planet?.image
                ? `url(${planet.image})`
                : "linear-gradient(to bottom, #fbbf24, #f59e0b)",
            }}
            title={planet?.name || "Planeta desconocido"}
          ></div>
          <img
            className="w-28 h-36 object-contain drop-shadow-2xl z-10 transition-transform duration-300 hover:scale-110"
            src={character.image}
            alt={`Imagen de ${character.name}`}
          />
        </div>

        {/* Datos */}
        <div className="flex flex-col gap-2 w-[300px] justify-center items-center min-w-[120px]">
          <div className="w-full h-9 bg-[#FFDE7A] flex items-center rounded-md justify-between px-2 text-sm border-2 border-yellow-400 overflow-hidden">
            <span className="font-medium truncate">KI</span>
            <span className="truncate">{character.ki}</span>
          </div>
          <div className="w-full h-9 bg-[#EAE616] flex items-center rounded-md justify-between px-2 text-sm border-2 border-yellow-300 overflow-hidden">
            <span className="font-medium truncate">Raza:</span>
            <span className="truncate">{character.race}</span>
          </div>
          <div className="w-full h-9 bg-[#EA9916] flex items-center rounded-md justify-between px-2 text-sm border-2 border-yellow-400 overflow-hidden">
            <span className="font-medium truncate">Afiliación:</span>
            <span className="truncate">{character.affiliation}</span>
          </div>
          <div className="w-full h-9 bg-[#1667EA] flex items-center rounded-md justify-between px-2 text-sm border-2 border-blue-400 text-white overflow-hidden">
            <span className="font-medium truncate">Gender:</span>
            <span className="truncate">{character.gender}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
