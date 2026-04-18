import type { Metadata } from "next";
// Se importa Bootstrap antes de globals.css para que Tailwind 
// pueda sobreescribir utilidades si hay colisiones directas.
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

// Definición de fuentes del sistema de alta fidelidad para evitar dependencias de red externas
const fontSans = "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif";

export const metadata: Metadata = {
  title: "TEATRO-UNA | Selección de Asientos",
  description: "Plataforma de reservación y sugerencia inteligente de asientos contiguos del TEATRO-UNA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased text-white bg-slate-950 overflow-x-hidden" style={{ fontFamily: fontSans }}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
