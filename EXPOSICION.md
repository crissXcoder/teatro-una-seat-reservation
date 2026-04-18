# Guion para Exposición Oral: TEATRO-UNA

Este documento sirve como guía rápida para defender el proyecto ante un jurado o profesor.

## 1. Identificación
- **Nombre del Proyecto**: TEATRO-UNA: Sistema de Selección de Asientos Premium.
- **Concepto**: Una plataforma web de reservaciones con enfoque en diseño de alta gama y lógica algorítmica centralizada.

## 2. El Problema que Resuelve
- La dificultad de encontrar asientos juntos para grupos en un teatro, priorizando siempre la mejor vista (el centro).
- La necesidad de una interfaz que no solo sea funcional, sino que brinde una experiencia visual inmersiva.

## 3. Tecnologías (El "Stack")
- **Base**: Next.js 15 y TypeScript para una arquitectura profesional.
- **Estilos**: Bootstrap 5 (Grillas y Layout) + Tailwind CSS (Diseño detallado).
- **Interactividad**: Radix UI (base de shadcn) y Lucide Icons.

## 4. Estructura General
- **Datos**: Matriz bidimensional manejada en memoria (simulando una base de datos).
- **Componentes**: Separación clara entre Escenario, Mapa de Asientos, Formulario y Footer.
- **Utilidades**: Lógica de algoritmos aislada en su propio archivo para facilitar pruebas.

## 5. Lógica Principal (El Algoritmo `suggest`)
- **Fila Principal**: Prioriza filas centrales, moviéndose hacia el frente o atrás según disponibilidad.
- **Contigüedad**: Solo sugiere bloques de asientos que estén físicamente pegados.
- **Centralidad Horizontal**: Dentro de una fila, elige el bloque que esté más cerca de la mitad del ancho del teatro.

## 6. Decisiones Visuales
- **Modo Oscuro**: Para simular la atmósfera de un teatro real.
- **Representación de Asientos**: No son simples cuadros; tienen forma de butaca con estados visuales claros (Libre, Ocupado, Seleccionado, Sugerido).
- **Escenario**: Diseñado con CSS puro para evitar cargas de imágenes pesadas y demostrar dominio técnica de diseño.

## 7. Demostración (Pasos Sugeridos)
1. **Manual**: Seleccionar un asiento y mostrar cómo cambia el contador y el estado.
2. **Algoritmo**: Ingresar "4 asientos", presionar "Sugerir" y mostrar cómo el sistema los encuentra automáticamente cerca del centro.
3. **Confirmación**: Presionar "Confirmar" y mostrar el mensaje de éxito y cómo los asientos pasan a estar permanentemente ocupados en la sesión.
4. **Validación**: Intentar reservar 10 asientos donde no quepan y mostrar la alerta de error.
