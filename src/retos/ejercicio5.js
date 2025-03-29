// Estás atrapado en Silent Hill, en una habitación cuadrada de tamaño n x n y el temido Pyramid Head (▲) está en algún lugar de la habitación, moviéndose hacia ti (T).

// Tú no puedes moverte, y Pyramid Head se mueve una celda por turno, en cualquiera de las cuatro direcciones cardinales (arriba, abajo, izquierda, derecha), pero siempre elige el camino más corto hacia tu posición. Tu objetivo es determinar si Pyramid Head puede alcanzarte.

// La habitación está representada por una matriz n x n:

// T: tu posición (donde te encuentras atrapado).
// ▲: la posición inicial de Pyramid Head.
// .: espacios vacíos donde Pyramid Head puede moverse.
// #: paredes que Pyramid Head no puede atravesar.
// Escribe una función que determine si Pyramid Head podrá alcanzarte. Si Pyramid Head puede alcanzarte, devuelve el número de pasos con lo que lo puede lograr, si no puede alcanzarte entonces devuelve -1.

// function escapePyramidHead(room) {
//   const n = room.length
  
//   const directions = [
//     [0,1],
//     [1,0],
//     [-1,0],
//     [0,-1]
//   ]
  
//   let start, end
  
//   for (let i=0; i < n; i++){
//     for (let j=0; j<n; j++){
//       if (room[i][j] === 'T'){
//         end = [i, j]
//       } else if (room[i][j] === '▲') {
//         start = [i, j]
//       }
//     }
//   }
  
//   const queue = [[ ...start, 0 ]]  
//   const visited = Array.from({length: n}, () => Array(n).fill(false))
//   visited[start[0]][start[1]] = true


  
//   while (queue.length > 0) {
//     const [x, y, steps] = queue.shift()
    
//     if (x === end[0] && y === end[1]) {
//       return steps
//     }
    
//     for (const [dx, dy] of directions) {
//       const nx = x + dx
//       const ny = y + dy
      
//       if (
//         nx >= 0 && nx < n && 
//         ny >= 0 && ny < n && 
//         !visited[nx][ny] && room[nx][ny] !== '#'){
//         visited[nx][ny] = true
//         queue.push([nx, ny, steps + 1])
//       }
//     }
//   }
  
//   return -1
// }

function escapePyramidHead(room) {
  const n = room.length
  
  const directions = [
    [0,1],
    [1,0],
    [-1,0],
    [0,-1]
  ]
  
  let start, end;
  
  for (let i = 0; i < n; i++) { // 0 1 2 3 4
    for (let j = 0; j < n; j++) { // 0
      if (room[i][j] === 'T') { 
        end = [i, j]; // [4,0]
      } else if (room[i][j] === '▲') {
        start = [i, j]; // [0,4]
      }
    }
  }
  
  const queue = [[ ...start, 0 ]];  
  const visited = new Set();
  visited.add(`${start[0]},${start[1]}`);


  
  while (queue.length > 0) {
    const [x, y, steps] = queue.shift()
    
    if (x === end[0] && y === end[1]) {
      return steps
    }
    
    for (const [dx, dy] of directions) {
      const nx = x + dx
      const ny = y + dy
      
      if (
        nx >= 0 && nx < n && 
        ny >= 0 && ny < n && 
        !visited.has(`${nx},${ny}`) 
        && room[nx][ny] !== '#'
      ){
        visited.add(`${nx},${ny}`);
        queue.push([nx, ny, steps + 1])
      }
    }
  }
  
  return -1
}

const room = [
  ['.', '.', '#', '.', '▲'],
  ['#', '.', '#', '.', '#'],
  ['.', '.', '.', '.', '.'],
  ['#', '#', '#', '.', '#'],
  ['T', '.', '.', '.', '.'],
]

escapePyramidHead(room) // -> 8

const room2 = [
  ['T', '.', '#', '.'],
  ['.', '.', '.', '.'],
  ['▲', '.', '.', '#'],
  ['.', '#', '#', '#'],
]

escapePyramidHead(room2) // -> 2

const room3 = [
  ['#', '#', '#'],
  ['▲', '.', '#'],
  ['.', '#', 'T'],
]

escapePyramidHead(room3) // -> -1