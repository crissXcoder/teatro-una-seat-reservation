# TEATRO-UNA: Sistema de Selección de Asientos Premium

Este proyecto es una aplicación web moderna diseñada para la gestión y reservación de asientos del **TEATRO-UNA**. Desarrollada como evaluación para el curso de Fundamentos de Programación Web, la solución combina una estética de vanguardia (UI/UX Pro Max) con una lógica algorítmica sólida en JavaScript puro.

## 🎯 Objetivo del Proyecto
Proveer una interfaz intuitiva y elegante que permita a los usuarios seleccionar asientos manualmente o recibir sugerencias automáticas basadas en la proximidad al centro del recinto, optimizando la experiencia de reserva grupal.

## 🚀 Tecnologías Usadas
- **Next.js (App Router)**: Motor principal que proporciona una estructura de componentes robusta y renderizado eficiente.
- **TypeScript**: Garantiza la integridad de los datos y reduce errores en tiempo de desarrollo mediante tipado estricto.
- **Bootstrap 5**: Utilizado para la estructura macro (grillas, contenedores) y utilidades de layout, cumpliendo con los requisitos de la rúbrica.
- **Tailwind CSS v4**: Empleado para el diseño granular, micro-interacciones y efectos visuales avanzados (gradientes, sombras, animaciones).
- **shadcn/ui**: Componentes de alta calidad y accesibles para elementos interactivos como botones y notificaciones.
- **Lucide React**: Iconografía moderna y consistente.
- **Framer Motion**: Animaciones sutiles para mejorar la fluidez de la interfaz.

## 🛠️ Decisiones Técnicas

### ¿Por qué Next.js?
Se eligió Next.js por su arquitectura orientada a componentes, lo que permite separar responsabilidades (Lógica, UI, Datos) de manera limpia y profesional, facilitando el mantenimiento y la escalabilidad del código.

### Integración de Bootstrap
Bootstrap se integra de forma híbrida. Se utiliza su sistema de grillas (`row`, `col`) y clases de utilidad para el maquetado principal, mientras que Tailwind CSS se encarga del estilo visual "premium". Esto demuestra la capacidad de combinar frameworks tradicionales con herramientas modernas.

### Lógica de la Matriz de Asientos
Los asientos se manejan como una matriz bidimensional (`Seat[][]`). Cada objeto `Seat` contiene su `id`, `estado` (true=ocupado, false=libre), sus coordenadas `row/col` y una etiqueta legible (ej: "A-1"). Esta estructura facilita el recorrido algorítmico y el renderizado dinámico.

### El Algoritmo `suggest`
La función `suggest(cantidad)` implementa una búsqueda inteligente:
1. **Prioridad de Fila**: Calcula la fila central del teatro y busca bloques disponibles empezando desde el centro hacia afuera (escenario y fondo).
2. **Contigüidad**: Busca bloques de asientos libres que estén juntos en la misma fila.
3. **Optimización de Centralidad**: Si hay varios bloques en una fila, elige el que esté más centrado horizontalmente.
4. **Eficiencia**: Utiliza `Set<number>` para manejar los IDs, permitiendo búsquedas de tiempo constante $O(1)$ para la reactividad visual.

## 🎨 Diseño UI/UX (Pro Max)
- **Estética Dark Cinematic**: Esquema de colores oscuros con acentos en índigo y esmeralda.
- **Escenario Volumétrico**: Representación visual con efectos de luz y profundidad mediante CSS puro.
- **Feedback Inmediato**: Uso de "Toasts" (notificaciones flotantes) para informar sobre el éxito o fracaso de las búsquedas.
- **Micro-interacciones**: Los asientos reaccionan al cursor con cambios de escala y sombras, mejorando el "affordance" (capacidad de intuir cómo usar el elemento).

## 💻 Instalación y Uso Local
1. Clonar el repositorio.
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Iniciar servidor de desarrollo:
   ```bash
   npm run dev
   ```
4. Abrir en el navegador: `http://localhost:3000`

## 🔮 Mejoras Futuras
- **Persistencia de Datos**: Integración con una base de datos real (ej. PostgreSQL/Prisma).
- **Selección de Zonas**: Diferenciación de precios por zonas (VIP, Preferencial, etc.).
- **Sistema de Pagos**: Simulación de pasarela de pago para completar la experiencia de usuario.
- **Accesibilidad Avanzada**: Soporte completo para lectores de pantalla en el mapa de asientos.
