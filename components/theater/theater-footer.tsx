import React from "react";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

export function TheaterFooter() {
  return (
    <footer className="mt-14 w-full pt-8 border-t border-slate-800/80">
      <div className="container-fluid px-0">
        <div className="row g-5 pb-4">
          
          {/* Columna 1: Leyenda Visual (Con UI/UX simplificada e iconos intuitivos) */}
          <div className="col-12 col-md-6 d-flex flex-column align-items-center align-items-md-start justify-content-center">
            <h4 className="text-slate-500 font-bold mb-4 text-xs uppercase tracking-[0.15em]">
              Estado de las Butacas
            </h4>
            <div className="d-flex flex-wrap justify-content-center justify-content-md-start gap-4">
              
              <div className="d-flex align-items-center gap-2.5 group">
                <div className="w-4 h-4 bg-slate-400 border border-slate-300 rounded-sm group-hover:bg-slate-300 transition-colors shadow-sm"></div>
                <span className="text-sm font-medium text-slate-400 group-hover:text-slate-300 transition-colors">Libre</span>
              </div>
              
              <div className="d-flex align-items-center gap-2.5 group">
                <div className="w-4 h-4 bg-[#1e293b] border border-slate-700/80 rounded-sm opacity-80 shadow-inner"></div>
                <span className="text-sm font-medium text-slate-500 transition-colors">Ocupado</span>
              </div>
              
              <div className="d-flex align-items-center gap-2.5 group">
                <div className="w-4 h-4 bg-indigo-500 shadow-[0_0_12px_rgba(99,102,241,0.6)] border border-indigo-400 rounded-sm group-hover:bg-indigo-400 transition-colors"></div>
                <span className="text-sm font-medium text-indigo-400 transition-colors">Tu Selección</span>
              </div>
              
              <div className="d-flex align-items-center gap-2.5 group">
                <div className="w-4 h-4 bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)] border border-emerald-400 rounded-sm animate-pulse"></div>
                <span className="text-sm font-medium text-emerald-400 transition-colors">Sugerido</span>
              </div>

            </div>
          </div>
          
          {/* Columna 2: Información de Contacto del Teatro */}
          <div className="col-12 col-md-6 d-flex flex-column align-items-center align-items-md-end text-center text-md-right mt-5 mt-md-0">
            <h4 className="text-slate-300 font-bold mb-3 d-flex flex-col flex-md-row align-items-center justify-content-center justify-content-md-end gap-2 text-sm tracking-wide">
              <Globe size={18} className="text-indigo-400 mb-1 mb-md-0" />
              <span>TEATRO CENTRAL UNA</span>
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
