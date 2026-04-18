"use client";

import React, { useState } from "react";
import { Ticket, Search, CheckCircle2, RefreshCcw } from "lucide-react";
import { cn } from "@/lib/utils";

interface ReservationFormProps {
  onSuggest: (quantity: number) => void;
  onClear: () => void;
  onConfirm: () => void;
  selectedCount: number;
}

export function ReservationForm({ onSuggest, onClear, onConfirm, selectedCount }: ReservationFormProps) {
  const [quantity, setQuantity] = useState<number>(2);

  const handleSuggestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSuggest(quantity);
  };

  return (
    // Se utiliza semántica HTML5 pura (section y form) para asegurar accesibilidad académica
    <section aria-label="Formulario de selección de asientos" className="card w-100 bg-[#0f172a]/90 backdrop-blur-2xl border border-slate-700/60 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-3xl overflow-hidden mt-6 mx-4">
      <div className="card-body p-4 p-md-6">
        <div className="row align-items-center g-4 lg:g-5">
          
          {/* SECCIÓN IZQUIERDA: Lógica del Motor */}
          <div className="col-12 col-lg-7">
            <div className="d-flex align-items-center gap-3 mb-3">
              <div className="p-2 bg-indigo-500/10 rounded-lg border border-indigo-500/20">
                <Ticket className="text-indigo-400" size={24} strokeWidth={1.5} />
              </div>
              <h5 className="text-white m-0 font-semibold md:text-lg tracking-wide">
                Búsqueda Inteligente
              </h5>
            </div>
            
            <p className="text-slate-400/90 text-sm mb-5 leading-relaxed pe-lg-4 font-light">
              Ingresa la cantidad de asientos. Nuestro algoritmo encontrará automáticamente la ubicación contigua más óptima y central para tu grupo.
            </p>
            
            <form onSubmit={handleSuggestSubmit} className="d-flex flex-wrap gap-3 align-items-stretch">
              {/* Input Group refinado con Tailwind y layout nativo Bootstrap */}
              <div className="input-group overflow-hidden rounded-xl border border-slate-600 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-500/20 transition-all shadow-sm" style={{ maxWidth: '170px' }}>
                <span className="input-group-text bg-slate-800/80 border-0 text-slate-400 font-medium px-4">
                  Nº
                </span>
                <input 
                  type="number" 
                  className="form-control bg-slate-800 border-0 text-white shadow-none text-center font-bold text-lg p-0 py-2 focus:ring-0"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, Math.min(20, parseInt(e.target.value) || 1)))}
                  min="1"
                  max="20"
                  aria-label="Cantidad de asientos"
                />
              </div>
              
              {/* Botón Acción Principal */}
              <button 
                type="submit"
                className="btn d-flex align-items-center gap-2 px-5 py-2 rounded-xl transition-all duration-300 ease-out group overflow-hidden relative border-0"
                style={{ backgroundColor: '#4f46e5' }}
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></div>
                <Search size={18} className="text-indigo-100 z-10 group-hover:scale-110 transition-transform" />
                <span className="text-white font-medium z-10">Sugerir Mejores</span>
              </button>
            </form>
          </div>

          {/* SECCIÓN DERECHA: Resumen de Interacción */}
          <div className="col-12 col-lg-5 lg:border-l lg:border-slate-700/50 lg:pl-8 mt-5 mt-lg-0">
            <div className="d-flex flex-column h-100 justify-content-center bg-slate-800/30 p-5 rounded-2xl border border-slate-700/40 shadow-inner">
              
              <div className="d-flex justify-content-between align-items-center mb-5">
                <span className="text-slate-300 font-medium">Asientos Seleccionados</span>
                <span className={cn(
                  "badge rounded-pill px-4 py-2.5 text-lg font-bold transition-all duration-500",
                  selectedCount > 0 
                    ? "bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 shadow-[0_0_15px_rgba(99,102,241,0.2)]" 
                    : "bg-slate-800/50 text-slate-500 border border-slate-700"
                )}>
                  {selectedCount}
                </span>
              </div>
              
              <div className="d-flex flex-column flex-sm-row gap-3">
                <button 
                  onClick={onClear}
                  disabled={selectedCount === 0}
                  className="btn btn-outline-light grow d-flex align-items-center justify-content-center gap-2 rounded-xl py-2.5 border-slate-600 text-slate-300 hover:bg-slate-700 disabled:opacity-40 transition-colors"
                >
                  <RefreshCcw size={16} /> <span className="font-medium">Limpiar</span>
                </button>
                <button 
                  onClick={onConfirm}
                  disabled={selectedCount === 0}
                  className={cn(
                    "btn text-white grow d-flex align-items-center justify-content-center gap-2 rounded-xl py-2.5 border-0 transition-all duration-300",
                    selectedCount === 0 ? "opacity-50" : "hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:-translate-y-0.5"
                  )}
                  style={{ 
                    backgroundColor: selectedCount > 0 ? '#10b981' : '#334155'
                  }}
                >
                  <CheckCircle2 size={18} /> <span className="font-medium">Confirmar</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
