// Los elfos 🧝🧝‍♂️ de Santa Claus han encontrado un montón de botas mágicas desordenadas en el taller. Cada bota se describe por dos valores:

// type indica si es una bota izquierda (I) o derecha (R).
// size indica el tamaño de la bota.
// Tu tarea es ayudar a los elfos a emparejar todas las botas del mismo tamaño que tengan izquierda y derecha. Para ello, debes devolver una lista con los pares disponibles después de emparejar las botas.

// ¡Ten en cuenta que puedes tener más de una zapatilla emparejada del mismo tamaño!

/**
 * @param {{ type: 'I' | 'R', size: number }[]} shoes
 * @returns {number[]} Available shoes 
 */
// METODO: 1
// function organizeShoes(shoes) {
//   const pair = []
//   const newShoes = [...shoes]
  
//   while (newShoes.length > 1) {
//     if (newShoes.some(x =>
//       (x.size === newShoes[0].size) && (x.type !== newShoes[0].type)
//     )) {
//       const otro = newShoes.findIndex(x => (x.size === newShoes[0].size) && (x.type !== newShoes[0].type))
//       pair.push(newShoes[0].size)
//       newShoes.splice(otro, 1)
//     }
//     newShoes.splice(0, 1)
//   }
  
//   return pair
// }

// METODO: 2
function organizeShoes(shoes) {
  const pair = []
  
  while (shoes.length > 1) {
     const otro = shoes.findIndex(x => (x.size === shoes[0].size) && (x.type !== shoes[0].type))
    if (otro > 0) {     
      pair.push(shoes[0].size)
      shoes.splice(otro, 1)
    }
    shoes.splice(0, 1)
  }  
  return pair
}

// METODO: 3
// function organizeShoes(shoes) {
//   let pair = []
  
//   while (shoes.length > 1) {
//     let shoesFilter = 0;
//     let shoesFilterDiff = 0;
//     const shoeSize = shoes[0].size
    
//     shoes = shoes.filter(item => {
//       if (item.size === shoeSize) {
//         if (item.type === shoes[0].type) {shoesFilter++} else {shoesFilterDiff++}
//       }
//       return item.size !== shoes[0].size
//     })
    
//     const counter = Math.min(shoesFilter, shoesFilterDiff)    
//     pair = [...pair, ...Array(counter).fill(shoeSize)]
//   }
//   return pair
// }

const shoes = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 42 }
]

organizeShoes(shoes)
// [38, 42]

const shoes2 = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'I', size: 38 },
  { type: 'I', size: 38 },
  { type: 'R', size: 38 }
]
organizeShoes(shoes2)
// [38, 38]

const shoes3 = [
  { type: 'I', size: 38 },
  { type: 'R', size: 36 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 43 }
]

organizeShoes(shoes3)
// []