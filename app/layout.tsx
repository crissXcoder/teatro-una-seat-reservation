import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// Se importa Bootstrap antes de globals.css para que Tailwind 
// pueda sobreescribir utilidades si hay colisiones directas.
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TEATRO-UNA | Selección de Asientos",
  description: "Plataforma de reservación y sugerencia inteligente de asientos contiguos del Teatro UNA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased text-foreground bg-background`}>
        {children}
      </body>
    </html>
  );
}
