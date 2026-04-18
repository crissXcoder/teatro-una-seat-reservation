import React from "react";
import { Seat } from "@/lib/types";
import { cn } from "@/lib/utils";

interface SeatItemProps {
  seat: Seat;
  isSelected?: boolean;
  isSuggested?: boolean;
  onClick?: (seat: Seat) => void;
}

export function SeatItem({ seat, isSelected, isSuggested, onClick }: SeatItemProps) {
  const handleClick = () => {
    if (!seat.estado && onClick) {
      onClick(seat);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={seat.estado}
      title={seat.estado ? `Butaca ${seat.label} (Ocupada)` : `Butaca ${seat.label} (Libre)`}
      className={cn(
        "relative flex flex-col items-center justify-start focus:outline-none transition-all duration-400 ease-[cubic-bezier(0.23,1,0.32,1)] group",
        "w-[32px] h-[32px] md:w-[40px] md:h-[40px] rounded-sm",
        // Focus rings de accesibilidad nativos y limpios
        "focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
      )}
      aria-label={`Asiento ${seat.label}, ${seat.estado ? 'Ocupado' : 'Disponible'}`}
    >
      {/* Respaldar del asiento */}
      <div 
        className={cn(
          "w-full h-[45%] rounded-t-xl transition-all duration-300 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.3)]",
          seat.estado && "bg-[#1e293b] border-slate-700 opacity-60 cursor-not-allowed",
          !seat.estado && !isSelected && !isSuggested && "bg-slate-400 group-hover:bg-slate-300",
          isSelected && "bg-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.8)] border-t border-indigo-300",
          isSuggested && "bg-[#10b981] shadow-[0_0_25px_rgba(16,185,129,0.8)] border-t border-emerald-300"
        )}
      ></div>

      {/* Cojín base del asiento (Se desplaza en Y al hacer hover o ser seleccionado) */}
      <div 
        className={cn(
          "w-[92%] h-[55%] rounded-b-md rounded-t-sm mt-[2px] transition-all duration-300 border-t border-white/5",
          seat.estado && "bg-[#0f172a] opacity-60",
          !seat.estado && !isSelected && !isSuggested && "bg-slate-300 group-hover:bg-slate-200 group-hover:-translate-y-0.5 shadow-sm",
          isSelected && "bg-indigo-400 border border-indigo-500 shadow-md scale-[1.03]",
          isSuggested && "bg-emerald-400 border border-emerald-500 shadow-md scale-[1.03]"
        )}
      >
        {/* Identificador numérico que aparece suavemente y sin estorbar el diseño */}
        {!seat.estado && (
          <span className={cn(
            "absolute inset-0 flex items-center pt-3 justify-center text-[10px] md:text-xs font-bold transition-all duration-300",
            (isSelected || isSuggested) 
              ? "opacity-100 text-white/90 drop-shadow-sm scale-110" 
              : "opacity-40 text-slate-900 group-hover:opacity-100 group-hover:text-slate-800"
          )}>
            {seat.label.split('-')[1]}
          </span>
        )}
      </div>

      {/* Estética de apoyabrazos */}
      <div className={cn(
        "absolute left-[-2px] bottom-1 w-[3px] h-[50%] rounded-full transition-opacity duration-300",
        seat.estado ? "bg-slate-900 opacity-40" : "bg-slate-500 opacity-70 group-hover:opacity-90"
      )}></div>
      <div className={cn(
        "absolute right-[-2px] bottom-1 w-[3px] h-[50%] rounded-full transition-opacity duration-300",
        seat.estado ? "bg-slate-900 opacity-40" : "bg-slate-500 opacity-70 group-hover:opacity-90"
      )}></div>
    </button>
  );
}
