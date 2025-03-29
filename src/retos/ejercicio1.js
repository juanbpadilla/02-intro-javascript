// SOLUCIÓN 1
// Usando un ciclo for para recorrer el array y encontrar los valores que sumados sean iguales al target
// function createMagicPotion(potions, target) {
//   let pos = undefined;
//   let pos1 = potions.length;
//   potions.map(function (num1, index) {
//     for (let i = index + 1; i < potions.length; i++) {
//       if (num1 + potions[i] === target && i < pos1) {
//         pos = [index, i]
//       }
//     }
//   })
//   return pos
// }


// SOLUCIÓN 2
// Usando un objeto para almacenar los valores que ya se han recorrido
// function createMagicPotion(potions, target) {
//   const seen = {}  
//   for (let i = 0; i < potions.length; i++) {
//     const currentPotion = potions[i]
//     const complement = target - currentPotion    
//     if (seen[complement] !== undefined) {
//       return [seen[complement], i]
//     }    
//     seen[currentPotion] = i
//   }
// }


// SOLUCIÓN 3
// Usando un Map para almacenar los valores que ya se han recorrido
// function createMagicPotion(potions, target) {
//   const seen = new Map()
  
//   for (let i = 0; i < potions.length; i++) {
//     const currentPotion = potions[i] // 4 5 6 2
//     const complement = target - currentPotion // 4 3 2 6
    
//     if (seen.has(complement)) {
//       return [seen.get(complement), i] // [2, 3]
//     }
    
//     seen.set(currentPotion, i) // { 4:0, 5:1, 6:2  }
//   }
// }


// SOLUCIÓN 4
// Usando un Map para almacenar los valores que ya se han recorrido
// y forEach para recorrer el array
function createMagicPotion(potions, target) {
  const seen = new Map()
  let index = 0;
  for (let item of potions) { // 4 5 6 2
    const complement = target - item // 4, 3 2 6
    
    if (seen.has(complement)) {
      return [seen.get(complement), index] // [2,3]
    }
    
    seen.set(item, index) // [4,0] [5,1] [6,2] []
    index++; // 1 2 3
  }
}

const potions = [4, 5, 6, 2]
const goal = 8
createMagicPotion(potions, goal) // [2, 3]

const potions1 = [1, 2, 3, 4]
const goal1 = 9

createMagicPotion(potions1, goal1) // undefined

const potions2 = [1, 2, 3, 4]
const goal2 = 5

createMagicPotion(potions2, goal2) // [1, 2]
// también podría ser [0, 3] pero hay una combinación antes

