"use client";

import React, { useState, useEffect } from "react";
import { Stage } from "./stage";
import { SeatMap } from "./seat-map";
import { ReservationForm } from "./reservation-form";
import { TheaterFooter } from "./theater-footer";
import { initialSeatData } from "@/data/seats";
import { SeatMatrix, Seat } from "@/lib/types";
import { suggest } from "@/lib/suggest-seats";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function TheaterLayout() {
  const [matrix, setMatrix] = useState<SeatMatrix>([]);
  
  // Manejo de estado avanzado con Set<number> para ids,
  // optimizando los accesos o() vs Array.includes().
  const [selectedSeatIds, setSelectedSeatIds] = useState<Set<number>>(new Set());
  const [suggestedSeatIds, setSuggestedSeatIds] = useState<Set<number>>(new Set());
  
  // Notificaciones visuales (toast improvisado amigable)
  const [feedback, setFeedback] = useState<{type: 'error' | 'success', msg: string} | null>(null);

  useEffect(() => {
    setMatrix(initialSeatData);
  }, []);

  // Utilidad para mostrar notificaciones con auto-cierre
  const showFeedback = (type: 'error' | 'success', msg: string) => {
    setFeedback({ type, msg });
    setTimeout(() => setFeedback(null), 4000);
  };

  const handleSeatClick = (seat: Seat) => {
    // Romper la sugerencia previa si el usuario decide explorar manualmente
    if (suggestedSeatIds.size > 0) {
      setSuggestedSeatIds(new Set());
    }

    // Toggle sobre el Set inmutable de React
    setSelectedSeatIds((prev) => {
      const nextSet = new Set(prev);
      if (nextSet.has(seat.id)) {
        nextSet.delete(seat.id);
      } else {
        nextSet.add(seat.id);
      }
      return nextSet;
    });
    setFeedback(null);
  };

  const handleSuggest = (quantity: number) => {
    setFeedback(null); // Resetea feed
    
    // Validar UX local antes de mandar al motor puro (defensa anti-robusteza)
    if (!quantity || quantity <= 0 || quantity > 20) {
      showFeedback('error', "Por favor, ingresa una cantidad válida de asientos a buscar.");
      return;
    }

    // Limpia las reservas manuales para no cruzar información visualmente
    setSelectedSeatIds(new Set());
    
    // Algoritmo core - Devuelve un Set Inmutable
    const resultIds = suggest(matrix, quantity);
    
    if (resultIds.size > 0) {
      setSuggestedSeatIds(resultIds);
      showFeedback('success', `¡Hemos encontrado la mejor ubicación para tus ${quantity} boletos!`);
    } else {
      setSuggestedSeatIds(new Set());
      showFeedback('error', `No encontramos ${quantity} asientos contiguos en la misma fila actualmente.`);
    }
  };

  const handleClear = () => {
    setSelectedSeatIds(new Set());
    setSuggestedSeatIds(new Set());
    setFeedback(null);
  };

  const handleConfirm = () => {
    // Unir ambos sets por si hay cruces lógicos, aunque la UX limpia si hay sugeridos
    const toConfirmIds = suggestedSeatIds.size > 0 ? suggestedSeatIds : selectedSeatIds;
    
    if (toConfirmIds.size === 0) return;

    // Persistir sobre la matriz local simulando la inyección de la Base de Datos
    setMatrix((prevMatrix) => {
      return prevMatrix.map((row) => 
        row.map((seat) => {
          if (toConfirmIds.has(seat.id)) {
            return { ...seat, estado: true }; // Pasan explícitamente a OCUPADOS (true)
          }
          return seat;
        })
      );
    });

    showFeedback('success', `¡Reserva de ${toConfirmIds.size} butaca(s) confirmada exitosamente!`);
    
    // Resetear el front
    setSelectedSeatIds(new Set());
    setSuggestedSeatIds(new Set());
  };

  const resolvedCount = Math.max(selectedSeatIds.size, suggestedSeatIds.size);

  return (
    <div className="container-fluid px-2 px-md-4 max-w-6xl mx-auto relative z-10 w-full animate-in fade-in zoom-in duration-700 ease-out pb-12">
      
      {/* Sistema de notificación Flotante (Soft Toast) */}
      {feedback && (
        <div className="fixed top-8 left-1/2 -translate-x-1/2 z-100 animate-in slide-in-from-top-12 fade-in duration-300">
          <div className={cn(
            "flex items-center gap-3 px-6 py-3 rounded-full shadow-2xl border backdrop-blur-md font-medium max-w-[90vw] text-center",
            feedback.type === 'error' 
              ? "bg-red-950/90 border-red-500/50 text-red-200" 
              : "bg-emerald-950/90 border-emerald-500/50 text-emerald-200"
          )}>
            {feedback.type === 'error' ? <AlertCircle size={18} /> : <CheckCircle2 size={18} />}
            {feedback.msg}
          </div>
        </div>
      )}

      {/* Visualización Principal del Teatro */}
      <div className="bg-[#030712]/80 border border-slate-800 rounded-[2rem] p-4 md:p-8 shadow-2xl backdrop-blur-md flex flex-col items-center">
        
        <Stage />
        
        <SeatMap 
          matrix={matrix} 
          selectedSeatIds={selectedSeatIds} 
          suggestedSeatIds={suggestedSeatIds}
          onSeatClick={handleSeatClick}
        />
        
        <TheaterFooter />
        
      </div>

      {/* Formulario Sticky/Aislado */}
      <div className="mt-8 flex justify-center sticky bottom-4 z-50">
        <ReservationForm 
          onSuggest={handleSuggest}
          onClear={handleClear}
          onConfirm={handleConfirm}
          selectedCount={resolvedCount}
        />
      </div>

    </div>
  );
}
