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
    <section aria-label="Formulario de selección de asientos" className="w-full max-w-5xl mx-auto px-4">
      {/* Contenedor Principal: Dark Glassmorphism */}
      <div className="bg-slate-900/90 backdrop-blur-2xl border border-slate-700/50 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] rounded-[2rem] overflow-hidden p-1">
        <div className="bg-linear-to-br from-slate-800/20 to-transparent rounded-[1.8rem] p-4 p-md-5">
          <div className="row g-4 lg:g-5 align-items-stretch">
            
            {/* PANEL IZQUIERDO: Búsqueda */}
            <div className="col-12 col-lg-7 d-flex flex-column justify-content-center">
              <div className="d-flex align-items-center gap-3 mb-4">
                <div className="p-3 bg-indigo-600/20 rounded-2xl border border-indigo-500/30 shadow-inner">
                  <Ticket className="text-indigo-400" size={28} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-white m-0 font-bold tracking-tight text-xl md:text-2xl">
                    Reserva Inteligente
                  </h3>
                  <div className="h-1 w-12 bg-indigo-500 rounded-full mt-1"></div>
                </div>
              </div>
              
              <p className="text-slate-300 text-sm md:text-base mb-5 leading-relaxed font-light opacity-90 max-w-md">
                Encuentra automáticamente la ubicación contigua más óptima y central para vivir la mejor experiencia en el <span className="text-indigo-300 font-medium">Teatro UNA</span>.
              </p>
              
              <form onSubmit={handleSuggestSubmit} className="d-flex flex-wrap gap-3">
                <div className="input-group overflow-hidden rounded-2xl border border-slate-700 bg-slate-800/50 focus-within:border-indigo-500 focus-within:ring-4 focus-within:ring-indigo-500/10 transition-all duration-300" style={{ maxWidth: '160px' }}>
                  <span className="input-group-text bg-transparent border-0 text-slate-400 font-bold px-3">
                    Nº
                  </span>
                  <input 
                    type="number" 
                    className="form-control bg-transparent border-0 text-white shadow-none text-center font-bold text-xl p-0 py-3 focus:ring-0"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, Math.min(20, parseInt(e.target.value) || 1)))}
                    min="1"
                    max="20"
                  />
                </div>
                
                <button 
                  type="submit"
                  className="btn d-flex align-items-center justify-content-center gap-2 px-4 py-3 rounded-2xl transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-lg group relative overflow-hidden flex-fill flex-sm-grow-0"
                  style={{ backgroundColor: '#4f46e5', border: 'none' }}
                >
                  <Search size={20} className="text-white" />
                  <span className="text-white font-bold tracking-wide">Buscar Asientos</span>
                </button>
              </form>
            </div>

            {/* PANEL DERECHO: Acciones y Contador */}
            <div className="col-12 col-lg-5">
              <div className="h-100 bg-slate-950/40 backdrop-blur-md rounded-3xl border border-slate-700/30 p-4 md:p-5 d-flex flex-column justify-content-between shadow-inner">
                
                <div className="d-flex justify-content-between align-items-start mb-4">
                  <div>
                    <span className="text-slate-400 text-xs text-uppercase tracking-widest font-bold">Resumen de Selección</span>
                    <h4 className="text-white font-medium m-0 mt-1">Butacas listas</h4>
                  </div>
                  <div className={cn(
                    "px-4 py-2 rounded-2xl font-black text-2xl transition-all duration-500 border",
                    selectedCount > 0 
                      ? "bg-indigo-500/20 text-indigo-400 border-indigo-500/40 shadow-[0_0_20px_rgba(99,102,241,0.2)]" 
                      : "bg-slate-800 text-slate-600 border-slate-700"
                  )}>
                    {selectedCount}
                  </div>
                </div>

                <div className="d-flex flex-column gap-3">
                  <button 
                    type="button"
                    onClick={onClear}
                    disabled={selectedCount === 0}
                    className="btn border border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white rounded-xl py-3 d-flex align-items-center justify-content-center gap-2 transition-all disabled:opacity-20"
                  >
                    <RefreshCcw size={18} />
                    <span className="font-semibold">Reiniciar</span>
                  </button>
                  
                  <button 
                    type="button"
                    onClick={onConfirm}
                    disabled={selectedCount === 0}
                    className={cn(
                      "btn rounded-xl py-3 d-flex align-items-center justify-content-center gap-2 border-0 transition-all duration-300 shadow-xl",
                      selectedCount > 0 
                        ? "bg-emerald-600 hover:bg-emerald-500 text-white hover:shadow-emerald-500/20 hover:-translate-y-1" 
                        : "bg-slate-800 text-slate-500 opacity-50"
                    )}
                  >
                    <CheckCircle2 size={20} />
                    <span className="font-bold tracking-wide">Confirmar Reserva</span>
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
