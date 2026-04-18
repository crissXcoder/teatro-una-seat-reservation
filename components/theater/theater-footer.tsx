import { MapPin, Phone, Mail, Globe } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function TheaterFooter() {
  return (
    <footer className="w-full py-12 px-6 mt-12 bg-slate-950/20 border-t border-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="row g-4 align-items-center">
          
          {/* Branding y Logo */}
          <div className="col-12 col-md-4 text-center text-md-start">
            <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-2 mb-3">
              <div className="p-2 bg-indigo-600/20 rounded-lg">
                <Globe size={24} className="text-indigo-400" />
              </div>
              <span className="text-xl font-black tracking-tighter text-white">TEATRO-UNA</span>
            </div>
            <p className="text-slate-500 text-xs font-light max-w-xs mx-auto mx-md-0">
              Excelencia escénica y formación académica. Parte fundamental de la identidad cultural de la Universidad Nacional.
            </p>
          </div>

          {/* Enlaces / Info Central */}
          <div className="col-12 col-md-4 text-center">
            <div className="d-flex flex-column gap-2 text-slate-400 text-sm">
              <div className="d-flex align-items-center justify-content-center gap-2">
                <MapPin size={14} className="text-indigo-500" />
                <span>Av. Universidad, Campus Central</span>
              </div>
              <div className="d-flex align-items-center justify-content-center gap-2">
                <Phone size={14} className="text-indigo-500" />
                <a href="tel:+50622001111" className="text-inherit text-decoration-none hover:text-white transition-colors">
                  +506 2200-UNA1
                </a>
              </div>
              <div className="d-flex align-items-center justify-content-center gap-2">
                <Mail size={14} className="text-indigo-500" />
                <a href="mailto:reservas@teatro.una.ac.cr" className="text-inherit text-decoration-none hover:text-white transition-colors">
                  reservas@teatro.una.ac.cr
                </a>
              </div>
            </div>
          </div>

          {/* Derechos y Social */}
          <div className="col-12 col-md-4 text-center text-md-end">
            <span className="text-slate-600 text-[10px] uppercase font-bold tracking-widest">
              © {new Date().getFullYear()} Universidad Nacional de Costa Rica
            </span>
            <div className="mt-2 text-slate-500 text-[9px] uppercase tracking-tighter">
              Fundamentos de Programación Web
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
