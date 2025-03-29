// Ejercicio 3: El camino más seguro
// Estás atrapado en una pesadilla en la que Freddy Krueger te persigue 😭. El sueño está representado por un laberinto de celdas, donde cada celda tiene un valor numérico que indica el nivel de peligro de esa parte del sueño.

// Debes encontrar el camino más seguro (es decir, el que tenga el menor valor total de peligro) desde la esquina superior izquierda hasta la esquina inferior derecha de la matriz.

// En este desafío, solo puedes moverte hacia la derecha o hacia abajo (no puedes retroceder ni moverte en diagonal) y debes calcular el nivel total de peligro del camino más seguro.

// La pesadilla está representada por una matriz dream de tamaño n x m donde cada celda es un número positivo que representa el nivel de peligro de esa celda en el sueño.

// Y tienes que devolver el valor total de peligro del camino más seguro de la esquina superior izquierda (posición [0][0]) a la esquina inferior derecha (posición [n-1][m-1]).

// METODO 1
function findSafestPath(dream) {
  const rowsNum = dream.length // 3
  const columnsNum = dream[0].length // 3
  
  const dangersLevels = []
  dangersLevels[0] = dream[0][0] // 1
  
  for (let col = 1; col < columnsNum; col++){ // 1 2
    dangersLevels[col] = dangersLevels[col -1] + dream[0][col] // 4 5
  }
  
  for (let row = 1; row < rowsNum; row++) { // 1 2
    dangersLevels[0] += dream[row][0] // 2 6

    for (let col = 1; col < columnsNum; col++) { // 1 2 // 1 2
      dangersLevels[col] = Math.min( // 1 2 // 1 2
        dangersLevels[col], // derecha 4 5 // 7 6
        dangersLevels[col - 1] // abajo 2 7 // 6 8
      ) + dream[row][col] // 7 6 // 8 7
    }
  }
  
  return dangersLevels[columnsNum - 1]
}

// METODO 2
// simplificando el método 1
// function findSafestPath(dream) {
//   const rowsNum = dream.length 
//   const columnsNum = dream[0].length 
  
//   const dangersLevels = []
//   dangersLevels[0] = 0 
  
//   for (let row = 0; row < rowsNum; row++) { 
//     dangersLevels[0] += dream[row][0] 

//     for (let col = 1; col < columnsNum; col++) { 
//       if (!dangersLevels[col]) {
//         dangersLevels[col] = dangersLevels[col -1] + dream[row][col]
//         console.log('inicializar en row y col: ' + row, col)
//       } else {
//         dangersLevels[col] = Math.min( 
//           dangersLevels[col], 
//           dangersLevels[col - 1] 
//         ) + dream[row][col] 
//         console.log('no inicializa en row: ' + row)
//       }
//     }
//   }
  
//   return dangersLevels[columnsNum - 1]
// }

const dream = [
  [1, 3, 1], 
  [1, 5, 1], 
  [4, 2, 1], 
]            

findSafestPath(dream) // Devuelve 7
// El mejor camino es:
// [0, 0] -> 1
// [0, 1] -> 3
// [0, 2] -> 1
// [1, 2] -> 1
// [2, 2] -> 1

// 1 -> 3 -> 1 -> 1 -> 1 = 7