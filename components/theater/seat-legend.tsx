import React from "react";

export function SeatLegend() {
  return (
    <div className="w-full mt-10 pt-6 border-t border-slate-800/50">
      <div className="d-flex flex-column align-items-center">
        <h4 className="text-slate-600 font-bold mb-4 text-[10px] uppercase tracking-[0.2em]">
          Guía de Estados
        </h4>
        <div className="d-flex flex-wrap justify-content-center gap-x-6 gap-y-3">
          
          <div className="d-flex align-items-center gap-2 group cursor-default">
            <div className="w-3.5 h-3.5 bg-slate-400 rounded-[3px] border border-white/20 shadow-sm transition-transform group-hover:scale-110"></div>
            <span className="text-[11px] font-bold text-slate-400 tracking-wider uppercase">Disponible</span>
          </div>
          
          <div className="d-flex align-items-center gap-2 group cursor-default">
            <div className="w-3.5 h-3.5 bg-slate-800 rounded-[3px] border border-slate-700/50 opacity-60 shadow-inner group-hover:opacity-80 transition-opacity"></div>
            <span className="text-[11px] font-bold text-slate-500 tracking-wider uppercase">Ocupado</span>
          </div>
          
          <div className="d-flex align-items-center gap-2 group cursor-default">
            <div className="w-3.5 h-3.5 bg-indigo-500 rounded-[3px] shadow-[0_0_12px_rgba(99,102,241,0.5)] border border-indigo-400 transition-transform group-hover:scale-110"></div>
            <span className="text-[11px] font-bold text-indigo-400 tracking-wider uppercase">Tu Selección</span>
          </div>
          
          <div className="d-flex align-items-center gap-2 group cursor-default">
            <div className="w-3.5 h-3.5 bg-emerald-500 rounded-[3px] shadow-[0_0_15px_rgba(16,185,129,0.4)] border border-emerald-400 animate-pulse transition-transform group-hover:scale-110"></div>
            <span className="text-[11px] font-bold text-emerald-400 tracking-wider uppercase">Sugerido</span>
          </div>

        </div>
      </div>
    </div>
  );
}
