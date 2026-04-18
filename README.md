# TEATRO-UNA: Sistema de Selección de Asientos Premium (Edición Parcial)

Este proyecto es una aplicación web de alto rendimiento diseñada para la gestión y reservación de asientos del **TEATRO-UNA**. Desarrollada como evaluación definitiva para el curso de Fundamentos de Programación Web, la solución implementa un estándar de calidad senior, combinando una arquitectura robusta con una lógica algorítmica determinista.

## 🎯 Objetivo del Proyecto
Proveer una interfaz inmersiva y técnica que permita a los usuarios seleccionar asientos manualmente o recibir sugerencias automáticas basadas en la proximidad al centro del recinto, garantizando el cumplimiento del 100% de la rúbrica del examen.

## 🚀 Tecnologías Usadas
- **Next.js 15 (App Router)**: Arquitectura orientada a componentes con hidratación optimizada.
- **TypeScript**: Tipado estricto para modelos de datos de asientos y lógica algorítmica.
- **Bootstrap 5**: Estructura macro (grids y contenedores) para cumplimiento de requisitos de diseño.
- **Tailwind CSS v4**: Estilo visual avanzado, micro-interacciones y diseño "Dark Cinematic".
- **shadcn/ui (Radix UI)**: Integración real de componentes profesionales como el sistema de **Toasts** (notificaciones).
- **Lucide React**: Iconografía semántica.
- **Fuentes del Sistema de Alta Fidelidad**: Sustitución de dependencias de red externas por una pila de fuentes nativas (Inter-stack) para asegurar builds 100% confiables en cualquier entorno.

## 🛠️ Decisiones Técnicas Senior

### Determinismo de Datos
A diferencia de implementaciones básicas que usan `Math.random()`, este proyecto utiliza una carga de datos determinista en `data/seats.ts`. Esto asegura que el comportamiento del teatro sea consistente durante la exposición y las pruebas de usuario, reflejando un estado real de "función en curso".

### Estabilidad de Estados
Se ha eliminado el uso de `useEffect` para la inicialización de la matriz de asientos, inyectando los datos directamente en el estado inicial de React. Esto elimina re-renderizados innecesarios y previene el "flicker" visual durante la hidratación del cliente.

### El Algoritmo `suggest`
La función `suggest(cantidad)` implementa una búsqueda inteligente:
1. **Prioridad Geográfica**: Ordena las filas por proximidad a la fila central del teatro.
2. **Contigüidad**: Identifica bloques de asientos libres adyacentes.
3. **Simetría Horizontal**: Si una fila tiene múltiples bloques disponibles, el algoritmo selecciona el que esté más centrado respecto al eje horizontal de la fila.
4. **Eficiencia**: Retorna un `Set<number>` para garantizar búsquedas $O(1)$ en el renderizado de la interfaz.

## 🎨 Diseño y Cumplimiento de Rúbrica
- **Visibilidad Total**: Los números de asiento son legibles permanentemente (40% opacidad base, 100% en interacción), cumpliendo con el requisito de "identificación con filas y números".
- **Naming Unificado**: Toda la aplicación utiliza la marca oficial **TEATRO-UNA**.
- **Escenario Volumétrico**: Representación visual con profundidad y efectos de iluminación realistas.
- **Feedback Profesional**: Uso de notificaciones tipo Toast para informar el éxito o los límites de la selección.

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

---
**Desarrollado para la evaluación parcial de Fundamentos de Programación Web.**
