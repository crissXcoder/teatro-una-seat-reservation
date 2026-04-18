import React from "react";

export function Stage() {
  return (
    <div className="w-full flex flex-col items-center mt-2 mb-16 md:mb-20 relative">
      {/* Luz volumétrica del escenario más centrada y sutil */}
      <div className="absolute top-[-20%] w-[90%] max-w-[600px] h-32 bg-indigo-500/15 blur-[60px] rounded-[100%] pointer-events-none z-0"></div>
      
      {/* Estructura frontal del escenario */}
      <div 
        className="relative z-10 w-[95%] md:w-[80%] max-w-[800px] h-16 md:h-24 
                   bg-linear-to-t from-[#0b101e] via-[#10172a] to-[#1e293b]
                   rounded-t-[50%] md:rounded-t-[140px] 
                   border-t-2 border-indigo-400/40
                   shadow-[0_-5px_40px_rgba(79,70,229,0.15)]
                   flex items-center justify-center overflow-hidden"
      >
        {/* Decoraciones estructurales del escenario madera */}
        <div className="absolute bottom-0 w-full h-[4px] bg-[#050811] shadow-inner"></div>
        <div className="absolute top-[2px] left-1/2 -translate-x-1/2 w-[110%] h-8 bg-white/5 blur-lg rounded-full pointer-events-none"></div>
        
        <div className="flex flex-col items-center mt-2">
          <h2 className="text-transparent bg-clip-text bg-linear-to-r from-indigo-200 via-white to-indigo-200 font-medium tracking-[0.4em] uppercase text-[10px] md:text-sm drop-shadow-sm opacity-90">
            Escenario
          </h2>
        </div>
      </div>
    </div>
  );
}
