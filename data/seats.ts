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
    // Simulamos ocupación aleatoria para que el teatro no esté vacío 
    // pero dejamos suficientes libres.
    const isOccupied = Math.random() > 0.8; 

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
