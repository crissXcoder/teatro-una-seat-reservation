"use client";

import React, { useState } from "react";
import { Ticket, Search, CheckCircle2, RefreshCcw } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Card, 
  CardContent 
} from "@/components/ui/card";

interface ReservationFormProps {
  onSuggest: (quantity: number) => void;
  onClear: () => void;
  onConfirm: () => void;
  selectedCount: number;
  selectedLabels: string[];
  selectionMode: 'manual' | 'suggested' | 'none';
}

export function ReservationForm({ 
  onSuggest, 
  onClear, 
  onConfirm, 
  selectedCount,
  selectedLabels,
  selectionMode
}: ReservationFormProps) {
  const [quantity, setQuantity] = useState<number>(2);

  const handleSuggestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSuggest(quantity);
  };

  return (
    <section aria-label="Formulario de selección de asientos" className="w-full max-w-5xl mx-auto px-4">
      <Card className="border-slate-700/40 bg-slate-900/90 shadow-2xl rounded-[2rem] overflow-hidden">
        <CardContent className="p-0">
          <div className="row g-0 align-items-stretch">
            
            {/* PANEL IZQUIERDO: Búsqueda */}
            <div className="col-12 col-lg-7 p-4 p-md-5 border-end border-slate-800">
              <div className="d-flex align-items-center gap-3 mb-4">
                <div className="p-3 bg-indigo-600/20 rounded-2xl border border-indigo-500/30">
                  <Ticket className="text-indigo-400" size={28} />
                </div>
                <div>
                  <h3 className="text-white m-0 font-bold text-xl md:text-2xl">
                    Reserva Inteligente
                  </h3>
                  <div className="h-1 w-12 bg-indigo-500 rounded-full mt-1"></div>
                </div>
              </div>
              
              <p className="text-slate-400 text-sm md:text-base mb-5 font-light leading-relaxed max-w-md">
                Encuentra automáticamente la ubicación contigua más óptima en el <span className="text-indigo-300 font-medium tracking-wide">TEATRO-UNA</span>.
              </p>
              
              <form onSubmit={handleSuggestSubmit} className="d-flex flex-wrap gap-3">
                <div className="relative group" style={{ maxWidth: '140px' }}>
                  <Input 
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, Math.min(20, parseInt(e.target.value) || 1)))}
                    className="h-12 bg-slate-950/50 border-slate-700 text-center font-bold text-lg rounded-xl pl-10"
                  />
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-bold text-xs">Nº</span>
                </div>
                
                <Button 
                  type="submit"
                  size="xl"
                  className="rounded-xl flex-fill flex-sm-grow-0 font-bold shadow-indigo-500/10"
                >
                  <Search size={18} />
                  Buscar Asientos
                </Button>
              </form>
            </div>

            {/* PANEL DERECHO: Resumen */}
            <div className="col-12 col-lg-5 p-4 p-md-5 bg-slate-950/30 d-flex flex-column justify-content-between">
              <div>
                <div className="d-flex justify-content-between align-items-start mb-1">
                  <span className="text-slate-500 text-[10px] uppercase tracking-widest font-black">Resumen de Selección</span>
                  {selectionMode !== 'none' && (
                    <Badge variant={selectionMode === 'manual' ? 'default' : 'success'}>
                      {selectionMode === 'manual' ? 'Manual' : 'Inteligente'}
                    </Badge>
                  )}
                </div>
                
                <h4 className="text-white font-medium mb-4">Butacas listas</h4>

                <div className="d-flex align-items-center justify-content-between gap-4 mb-4">
                  <div className="grow flex flex-wrap gap-1.5 h-12 content-start overflow-y-auto custom-scrollbar pr-2">
                    {selectedLabels.length > 0 ? (
                      selectedLabels.map((label) => (
                        <Badge key={label} variant="outline" className="text-[10px] px-2 py-0.5 border-slate-700/50 bg-slate-900/50">
                          {label}
                        </Badge>
                      ))
                    ) : (
                      <span className="text-slate-600 text-xs italic">Ninguna seleccionada</span>
                    )}
                  </div>
                  <div className={cn(
                    "px-4 py-2 rounded-2xl font-black text-2xl border transition-all duration-300",
                    selectedCount > 0 
                      ? (selectionMode === 'manual' ? "text-indigo-400 border-indigo-500/30" : "text-emerald-400 border-emerald-500/30") 
                      : "text-slate-700 border-slate-800"
                  )}>
                    {selectedCount}
                  </div>
                </div>
              </div>

              <div className="d-flex flex-column gap-3">
                <Button 
                  variant="outline" 
                  onClick={onClear} 
                  disabled={selectedCount === 0}
                  className="rounded-xl h-11 border-slate-800 text-slate-400 hover:text-white"
                >
                  <RefreshCcw size={16} />
                  Reiniciar Selección
                </Button>
                
                <Button 
                  variant="success" 
                  onClick={onConfirm} 
                  disabled={selectedCount === 0}
                  size="xl"
                  className="rounded-xl font-bold shadow-emerald-500/10"
                >
                  <CheckCircle2 size={18} />
                  {selectedCount > 0 ? `Confirmar ${selectedCount} Asiento${selectedCount > 1 ? 's' : ''}` : 'Confirmar Reserva'}
                </Button>
              </div>
            </div>

          </div>
        </CardContent>
      </Card>
    </section>
  );
}
