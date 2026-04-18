# TEATRO-UNA: Sistema de Selección de Asientos

Este proyecto es una evaluación académica para el curso de **Fundamentos de Programación Web**.
Implementa un sistema moderno de selección de asientos utilizando un algoritmo de proximidad al centro, desarrollado completamente en el Frontend sin bases de datos adicionales.

## Tecnologías Utilizadas
- **Next.js (App Router)**: Framework principal para estructurar y renderizar la aplicación web.
- **React**: Biblioteca base para las interacciones y el estado.
- **Tailwind CSS & shadcn/ui**: Componentes accesibles, utilidades potentes y diseño UI/UX nivel "Pro Max".
- **Bootstrap 5**: Integrado para demostrar el uso de su sistema de clases (Layout, Grid y utilidades).
- **JavaScript Moderno**: Lógica de asignación de butacas contiguas sugeridas calculada en memoria mediante un algoritmo propio de distancias.

## Estructura del Proyecto
- `/app`: Configuración principal de Next.js App Router (Layout general de la app y rutas).
- `/components/ui`: Componentes base instalados desde `shadcn/ui` (botones, tooltips, toasts, etc.).
- `/components/teatro`: Componentes de dominio específicos (SeatGrid, Seat, Stage, Summary).
- `/lib`: Utilidades de la aplicación.
- `/data`: Datos estáticos iniciales o de la estructura simulada del teatro.
- `/styles`: Hoja de estilos adicionales si se requiere complementar Bootstrap + Tailwind.

## Instrucciones de Instalación
1. Clonar este repositorio.
2. Hacer `npm install`.
3. Levantar dev server con `npm run dev`.

## Objetivo
Cumplir los requisitos técnicos del curso demostrando un equilibrio entre HTML semántico, estilos dinámicos (CSS/Tailwind/Bootstrap), y un fuerte dominio de funciones en JavaScript.
