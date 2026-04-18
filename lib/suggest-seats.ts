// lib/suggest-seats.ts
import { SeatMatrix } from "./types";

/**
 * Función central del algoritmo: Sugiere Asientos de forma contigua.
 * 
 * CRITERIO Y PRIORIZACIÓN:
 * 1. Prioridad de Fila: Busca la fila que esté más cerca de la fila central matemática del teatro.
 *    Se calcula el centro (`Math.floor(totalFilas / 2)`) y se iteran las filas ordenadas por proximidad.
 *    En caso de empate en distancia (ej. +1 y -1 fila del centro), se escoge la de menor índice (más cerca al escenario).
 * 2. Bloques Contiguos: Dentro de cada fila, halla TODOS los bloques contiguos que tengan exactamente la cantidad solicitada.
 * 3. Criterio UX Mejorado (Centro de la Fila): Si existen múltiples bloques dentro de esa mejor fila,
 *    el algoritmo los califica calculando su centro geométrico versus el centro real de esa fila en específico.
 *    Gana el bloque que geográficamente quede más simétrico.
 * 
 * @param matrix Matriz bidimensional de asientos.
 * @param cantidad Cantidad numérica de asientos contiguos solicitados.
 * @returns Set<number> Una colección única que contiene los IDs de los asientos ganadores (Estará vacía si no hay).
 */
export function suggest(matrix: SeatMatrix, cantidad: number): Set<number> {
  const result = new Set<number>();
  
  // Manejo de casos borde requeridos
  if (!Number.isInteger(cantidad) || cantidad <= 0 || !matrix || matrix.length === 0) {
    return result; 
  }

  // Identificar el índice de la fila que representa el centro real (en vertical) del recinto
  const centerRowIndex = Math.floor(matrix.length / 2);

  // Ordenar los índices de filas basándonos en su proximidad al "centerRowIndex"
  const rowIndices = matrix.map((_, index) => index);
  rowIndices.sort((a, b) => {
    const distA = Math.abs(a - centerRowIndex);
    const distB = Math.abs(b - centerRowIndex);
    
    // Desempate: Se prioriza la fila que esté más al frente (índice menor o menor letanía visual)
    if (distA === distB) {
      return a - b; 
    }
    return distA - distB;
  });

  // Iterar rigurosamente siguiendo nuestro orden de proximidad al centro
  for (const rowIndex of rowIndices) {
    const row = matrix[rowIndex];

    // Condición: Si la cantidad pedida excede directamente la longitud de esta fila
    // simplemente no es posible allí. Continuamos.
    if (row.length < cantidad) continue;

    // Almacenaremos "todos" los bloques validos de 'cantidad' en esta fila específica
    // para luego escoger el más equilibrado visualmente.
    const validBlocks: Array<{ seats: number[], centerDist: number }> = [];
    
    // Centro geométrico de esta fila calculada (indice decimal es permitido como referencia)
    const rowCenterIndex = (row.length - 1) / 2;

    // Ventana deslizante para recorrer asienos evaluando si `n` de ellos están libres
    for (let i = 0; i <= row.length - cantidad; i++) {
      let isBlockCompletelyFree = true;
      const currentBlockIds: number[] = [];

      for (let j = 0; j < cantidad; j++) {
        const seat = row[i + j];
        if (seat.estado === true) { // Ocupado
          isBlockCompletelyFree = false;
          break; // Rompe tempranamente por optimización
        }
        currentBlockIds.push(seat.id);
      }

      // El fragmento evaluado pasó todas las pruebas, está libre.
      // Se evalúa qué tan céntrico está este bloque relativo a la fila.
      if (isBlockCompletelyFree) {
        // Centro del bloque (ej: asienos 2,3,4 -> centro es indice 3)
        const blockCenterIndex = i + (cantidad - 1) / 2;
        const distFromCenter = Math.abs(blockCenterIndex - rowCenterIndex);
        
        validBlocks.push({
          seats: currentBlockIds,
          centerDist: distFromCenter
        });
      }
    }

    // Regla de Negocio Crítica: Si la Fila (que ya recordamos, es la que más cerca del centro del teatro está en esta ruta de iteración)
    // posee UNO o MÁS bloques válidos, NO revisamos más filas. Aquí se gana la contención.
    if (validBlocks.length > 0) {
      // Ordenar bloques por distancia al centro para elegir el de menor distancia
      validBlocks.sort((a, b) => a.centerDist - b.centerDist);
      const finalBestBlock = validBlocks[0];

      // Poblar el resultado respetando una inyección Inmutable de la Interfaz pedida
      for (const seatId of finalBestBlock.seats) {
        result.add(seatId);
      }
      return result; // Retorno primario
    }
  }

  // De no encontrarse absolutamente ningún bloque contiguo libre en ninguna fila de su longitud
  // finaliza natural devolviendo el Set vacío (ej. 5 solicitados, Max libre consecutivo 3)
  return result; 
}
