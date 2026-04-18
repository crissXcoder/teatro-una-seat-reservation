import { TheaterLayout } from "@/components/theater/theater-layout";

export default function Home() {
  return (
    <main className="min-h-screen relative flex flex-col items-center pt-10 md:pt-16 overflow-x-hidden bg-[#0a0f1c] text-white">
      
      {/* Background Volumétrico Refinado */}
      <div className="absolute top-0 w-full h-[600px] bg-linear-to-b from-indigo-900/30 via-slate-900/10 to-transparent pointer-events-none z-0"></div>
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[70%] max-w-[800px] h-[400px] bg-indigo-600/15 blur-[120px] rounded-[100%] pointer-events-none z-0"></div>

      <header className="z-10 text-center mb-10 px-4 mt-2 max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-1000 ease-out">
        {/* Etiqueta de estado sutil */}
        <div className="inline-flex flex-row items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-200 text-xs font-semibold uppercase tracking-[0.2em] mb-6 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
          Reserva Activa
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-white via-indigo-100 to-indigo-300 tracking-tight leading-tight mb-5 drop-shadow-sm">
          TEATRO UNA
        </h1>
        <p className="text-slate-400 text-sm md:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
          Bienvenido a la plataforma de selección premium. Escoge tus butacas de manera manual o utiliza nuestro motor algorítmico guiado para ubicarte lo más céntrico posible.
        </p>
      </header>

      {/* Orquestador asíncrono y de lógica interactiva */}
      <TheaterLayout />

    </main>
  );
}
