// lib/types.ts

/**
 * Representa un asiento individual dentro del teatro.
 */
export interface Seat {
  id: number;
  estado: boolean; // true = ocupado, false = libre
  
  // Propiedades adicionales para uso visual y lógico
  row: number; // Índice de fila (0-indexed)
  col: number; // Índice de columna (0-indexed)
  label: string; // Etiqueta legible, ej: "A-1"
}

/**
 * Representa la matriz completa de asientos del teatro.
 * Las filas pueden tener diferente longitud.
 */
export type SeatMatrix = Seat[][];

export interface SeatSuggestionResult {
  found: boolean;
  seats: Seat[];
}
