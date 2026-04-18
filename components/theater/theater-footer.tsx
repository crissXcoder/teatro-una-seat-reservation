import { MapPin, Phone, Mail, Globe } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function TheaterFooter() {
  return (
    <footer className="mt-14 w-full pt-8">
      <Separator className="mb-8" />
      <div className="container-fluid px-0">
        <div className="row g-5 pb-4">
          
          {/* Columna 1: Leyenda Visual (Con UI/UX simplificada e iconos intuitivos) */}
          <div className="col-12 col-md-6 d-flex flex-column align-items-center align-items-md-start justify-content-center">
            <h4 className="text-slate-600 font-bold mb-4 text-[10px] uppercase tracking-[0.2em]">
              Guía de Estados
            </h4>
            <div className="d-flex flex-wrap justify-content-center justify-content-md-start gap-x-5 gap-y-3">
              
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
          
          {/* Columna 2: Información de Contacto del Teatro */}
          <div className="col-12 col-md-6 d-flex flex-column align-items-center align-items-md-end text-center text-md-right mt-5 mt-md-0">
            <h4 className="text-slate-300 font-bold mb-3 d-flex flex-col flex-md-row align-items-center justify-content-center justify-content-md-end gap-2 text-sm tracking-wide">
              <Globe size={18} className="text-indigo-400 mb-1 mb-md-0" />
              <span>TEATRO-UNA</span>
            </h4>
            <ul className="list-unstyled text-slate-400 text-sm d-flex flex-column align-items-center align-items-md-end gap-2 mb-0">
              <li className="d-flex align-items-center justify-content-center justify-content-md-end gap-2 hover:text-slate-200 transition-colors cursor-default">
                <span className="order-2 order-md-1">Av. Universidad, Campus Central</span>
                <MapPin size={15} className="text-slate-500 order-1 order-md-2" />
              </li>
              <li className="d-flex align-items-center justify-content-center justify-content-md-end gap-2 hover:text-slate-200 transition-colors">
                <a href="tel:+50622001111" className="text-decoration-none text-inherit order-2 order-md-1">+506 2200-UNA1</a>
                <Phone size={15} className="text-slate-500 order-1 order-md-2" />
              </li>
              <li className="d-flex align-items-center justify-content-center justify-content-md-end gap-2 hover:text-slate-200 transition-colors">
                <a href="mailto:reservas@teatro.una.ac.cr" className="text-decoration-none text-inherit order-2 order-md-1">reservas@teatro.una.ac.cr</a>
                <Mail size={15} className="text-slate-500 order-1 order-md-2" />
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}
