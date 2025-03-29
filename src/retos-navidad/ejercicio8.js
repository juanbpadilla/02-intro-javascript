// ¡Es hora de seleccionar a los renos más rápidos para los viajes de Santa! 🦌🎄
// Santa Claus ha organizado unas emocionantes carreras de renos para decidir cuáles están en mejor forma.

// Tu tarea es mostrar el progreso de cada reno en una pista de nieve en formato isométrico.

// La información que recibes:

// indices: Un array de enteros que representan el progreso de cada reno en la pista:
// 0: El carril está vacío.
// Número positivo: La posición actual del reno desde el inicio de la pista.
// Número negativo: La posición actual del reno desde el final de la pista.
// length: La longitud de cada carril.
// Devuelve un string que represente la pista de la carrera:

// Cada carril tiene exactamente length posiciones llenas de nieve (~).
// Cada reno se representa con la letra r.
// Los carriles están numerados al final con /1, /2, etc.
// La vista es isométrica, por lo que los carriles inferiores están desplazados hacia la derecha.

/**
 * @param {number[]} indices - The reno indices
 * @param {number} length - The length of the race
 * @returns {string} The reno race
 */

// METODO 1
// function drawRace(indices, length) {
//   const trails = Array.from({ length: indices.length }, (_, i) => {
//     return (Array.from({ length: length }, (_, index) => {
//       // if (indices[i] !== 0 && ((index) === indices[i] || index === (indices[i] + length))) {
//       if (indices[i] !== 0 && [indices[i], indices[i] + length].includes(index) ) {
//         return 'r'
//       } else {
//         return '~'
//       }
//     })).join('')
//   })
//   return `${trails.map((n, i) => `${' '.repeat(indices.length - (i+1)) + n} /${i+1}`).join('\n')}`;
// }

// METODO 2
function drawRace(indices, length) {
  return indices.map((index, i) => {
    let track = "~".repeat(length); // Pista inicial llena de '~'
    const newIndex = index > 0 ? index : (index + length) // convertimos los indices negativos a su respectivo valor positivo
    // Si el índice está dentro del rango, reemplaza el carácter en la posición dada
    if (newIndex >= 0 && newIndex < length) {
        track = track.substring(0, newIndex) + "r" + track.substring(newIndex + 1);
    }

    return `${' '.repeat(indices.length - (i+1))}${track} /${i + 1}`; // Agrega el número de la línea al final
  }).join("\n"); // Une las líneas con saltos de línea
}

drawRace([0, 5, -3], 10)
/*
  ~~~~~~~~~~ /1
 ~~~~~r~~~~ /2
~~~~~~~r~~ /3
*/

drawRace([2, -1, 0, 5], 8)
/*
   ~~r~~~~~ /1
  ~~~~~~~r /2
 ~~~~~~~~ /3
~~~~~r~~ /4
*/

drawRace([3, 7, -2], 12)
/*
  ~~~r~~~~~~~~ /1
 ~~~~~~~r~~~~ /2
~~~~~~~~~~r~ /3
*/