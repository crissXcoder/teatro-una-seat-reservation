// data/seats.ts
import { SeatMatrix, Seat } from "../lib/types";

// Generar una distribución de filas realista (forma de arco/trapecio)
// Usamos letras para las filas: A (más cerca del escenario) a G.
const FilaConfig = [
  { rowLabel: "A", count: 8 },
  { rowLabel: "B", count: 10 },
  { rowLabel: "C", count: 12 },
  { rowLabel: "D", count: 14 },
  { rowLabel: "E", count: 16 },
  { rowLabel: "F", count: 18 },
  { rowLabel: "G", count: 20 },
];

let globalSeatId = 1;

export const initialSeatData: SeatMatrix = FilaConfig.map((config, rowIndex) => {
  const rowSeats: Seat[] = [];
  
  for (let colIndex = 0; colIndex < config.count; colIndex++) {
    // Patrón de ocupación estático para asegurar determinismo académico:
    // Los asientos de los extremos en las filas delanteras están ocupados,
    // simulando una función con buena afluencia.
    const seatNumber = colIndex + 1;
    let isOccupied = false;
    
    // Si es una fila delantera (A, B, C) y es de los asientos laterales
    if (rowIndex < 3 && (seatNumber <= 2 || seatNumber >= config.count - 1)) {
      isOccupied = true;
    } 
    // Otros asientos ocupados aleatorios fijos para dar realismo a la grilla
    else if ((rowIndex + seatNumber) % 7 === 0) {
      isOccupied = true;
    }
    rowSeats.push({
      id: globalSeatId++,
      estado: isOccupied,
      row: rowIndex,
      col: colIndex,
      label: `${config.rowLabel}-${colIndex + 1}`
    });
  }
  
  return rowSeats;
});
