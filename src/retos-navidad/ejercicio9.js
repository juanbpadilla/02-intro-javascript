// Los elfos están jugando con un tren 🚂 mágico que transporta regalos. Este tren se mueve en un tablero representado por un array de strings.

// El tren está compuesto por una locomotora (@), seguida de sus vagones (o), y debe recoger frutas mágicas (*) que le sirve de combustible. El movimiento del tren sigue las siguientes reglas:

// Recibirás dos parámetros board y mov.

// board es un array de strings que representa el tablero:

// @ es la locomotora del tren.
// o son los vagones del tren.
// * es una fruta mágica.
// · son espacios vacíos.
// mov es un string que indica el próximo movimiento del tren desde la cabeza del tren @:

// 'L': izquierda
// 'R': derecha
// 'U': arriba
// 'D': abajo.
// Con esta información, debes devolver una cadena de texto:

// 'crash': Si el tren choca contra los bordes del tablero o contra sí mismo.
// 'eat': Si el tren recoge una fruta mágica (*).
// 'none': Si avanza sin chocar ni recoger ninguna fruta mágica.


/**
 * @param {string[]} board - Represent the train situation
 * @param {'U' | 'D' | 'R' | 'L' } mov - Movement direction
 * @returns {'none' | 'crash' | 'eat'}
 */
// METODO: 1 convertir el array de strings a un array de arrays
// function moveTrain(board, mov) {
//   board = board.map(item => item.split(''))
//   let text = '';
  
//   const checkCollision = (char) => {
//     if (char === '*') return 'eat';
//     if (char === '·') return 'none';
//     return 'crash';
//   }
  
//   board.forEach((item, x) => {
//     const y = item.findIndex(col => col === '@');
//     if (y < 0) return
//     if (mov === 'U') {text = checkCollision(board[x-1][y])}
//     if (mov === 'D') {text = checkCollision(board[x+1][y])}
//     if (mov === 'L') {text = checkCollision(board[x][y-1])}
//     if (mov === 'R') {text = checkCollision(board[x][y+1])}
//   })
  
//   return text;
// }

// METODO: 2 trabajando directamente con el array de strings
function moveTrain(board, mov) {
  let text = '';
  
  const checkCollision = (char) => {
    if (char === '*') return 'eat';
    if (char === '·') return 'none';
    return 'crash';
  }
  
  board.forEach((item, x) => {
    const y = item.indexOf('@');
    if (y < 0) return
    if (mov === 'U') {text = checkCollision(board[x-1][y])}
    if (mov === 'D') {text = checkCollision(board[x+1][y])}
    if (mov === 'L') {text = checkCollision(board[x][y-1])}
    if (mov === 'R') {text = checkCollision(board[x][y+1])}
  })
  
  return text;
}

const board = [
  '·····',
  '*····',
  '@····',
  'o····',
  'o····'
]

console.log(moveTrain(board, 'U'))
// ➞ 'eat'
// Porque el tren se mueve hacia arriba y encuentra una fruta mágica

console.log(moveTrain(board, 'D'))
// ➞ 'crash'
// El tren se mueve hacia abajo y la cabeza se choca consigo mismo

console.log(moveTrain(board, 'L'))
// ➞ 'crash'
// El tren se mueve a la izquierda y se choca contra la pared

console.log(moveTrain(board, 'R'))
// ➞ 'none'
// El tren se mueve hacia derecha y hay un espacio vacío en la derecha