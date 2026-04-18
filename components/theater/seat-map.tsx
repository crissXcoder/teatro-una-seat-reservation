import React from "react";
import { SeatMatrix, Seat } from "@/lib/types";
import { SeatItem } from "./seat-item";

interface SeatMapProps {
  matrix: SeatMatrix;
  selectedSeatIds: Set<number>;
  suggestedSeatIds: Set<number>;
  onSeatClick: (seat: Seat) => void;
}

export function SeatMap({ matrix, selectedSeatIds, suggestedSeatIds, onSeatClick }: SeatMapProps) {
  return (
    <section 
      role="region" 
      aria-label="Mapa interactivo de asientos" 
      className="w-full relative px-2 mt-4"
    >
      {/* Sombras difuminadas en los bordes para el scroll responsivo */}
      <div className="absolute left-0 top-0 bottom-0 w-12 bg-linear-to-r from-[#030712] to-transparent z-20 pointer-events-none hidden md:block opacity-80"></div>
      <div className="absolute right-0 top-0 bottom-0 w-12 bg-linear-to-l from-[#030712] to-transparent z-20 pointer-events-none hidden md:block opacity-80"></div>

      {/* Indicador de scroll para móviles (Solo visible si hay desbordamiento) */}
      <div className="flex md:hidden justify-center mb-2 items-center gap-2 text-slate-500 animate-pulse">
        <span className="text-[10px] uppercase tracking-widest font-bold">Desliza para explorar</span>
        <div className="h-px w-8 bg-slate-800"></div>
      </div>

      <div className="w-full max-w-full overflow-x-auto pb-8 pt-4 px-4 scrollbar-thin scrollbar-thumb-indigo-900/50 scrollbar-track-transparent">
        <div className="flex flex-col items-center justify-center gap-4 md:gap-7 min-w-max mx-auto">
          
          {matrix.map((row, rowIndex) => (
            <div 
              key={`row-${rowIndex}`} 
              className="flex items-center gap-3 md:gap-8 group/row"
            >
              {/* Etiqueta Izquierda */}
              <div 
                aria-hidden="true"
                className="w-8 flex justify-center items-center text-slate-600/70 group-hover/row:text-slate-300 font-bold text-sm transition-colors duration-300 select-none"
              >
                {row[0]?.label.split('-')[0]}
              </div>

              {/* Contenedor Físico de Asientos por fila */}
              <div 
                className="flex gap-2 md:gap-4 items-end"
                role="group"
                aria-label={`Fila ${row[0]?.label.split('-')[0]}`}
              >
                {row.map((seat) => (
                  <SeatItem
                    key={seat.id}
                    seat={seat}
                    isSelected={selectedSeatIds.has(seat.id)}
                    isSuggested={suggestedSeatIds.has(seat.id)}
                    onClick={onSeatClick}
                  />
                ))}
              </div>

              {/* Etiqueta Derecha */}
              <div 
                aria-hidden="true"
                className="w-8 flex justify-center items-center text-slate-600/70 group-hover/row:text-slate-300 font-bold text-sm transition-colors duration-300 select-none"
              >
                {row[0]?.label.split('-')[0]}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
