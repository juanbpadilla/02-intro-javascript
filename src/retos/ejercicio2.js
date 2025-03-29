// METODO 1
function battleHorde(zombies, humans) {
  let h = 0, z = 0
  for (let i = 0; i < zombies.length; i++) {
    z += +zombies[i]
    h += +humans[i]
  }
  
  if (h === z) return 'x'
  
  // const letter = h > z ? 'h' : 'z'
  return `${Math.abs(z - h)}${h > z ? 'h' : 'z'}`
}

// METODO 2
// Usando reduce para sumar los valores de los arrays
// function battleHorde(zombies, humans) {
//   let h = 0, z = 0
//   z = zombies.split('').reduce(function(r, n) { return r + parseInt(n) }, 0);
//   h = humans.split('').reduce(function(r, n) { return r + parseInt(n) }, 0);
  
//   if (h === z) return 'x'
  
//   const letter = h > z ? 'h' : 'z'
//   return `${Math.abs(z - h)}${letter}`
// }


// METODO 3
// Usando una función recursiva para sumar los dígitos
// function battleHorde(zombies, humans) {
  
//   var sumarDigitos = function(num) {
//     if(0<num) {
//       return (num%10) + sumarDigitos(Math.floor(num/10));
//     }
//     return num;
//   };
//   let z = sumarDigitos(Number(zombies))
//   let h = sumarDigitos(Number(humans))
  
//   if (h === z) return 'x'
  
//   const letter = h > z ? 'h' : 'z'
//   return `${Math.abs(z - h)}${letter}`
// }

const zombies = '242';
const humans = '334';

battleHorde(zombies, humans);  // -> "2h"

// primera ronda: zombie 2 vs human 3 -> humano gana (+1)
// segunda ronda: zombie 4 vs human 3+1 -> empate
// tercera ronda: zombie 2 vs human 4 -> humano gana (+2)
// resultado: "2h"


const zombies1 = '444';
const humans1 = '282';

battleHorde(zombies1, humans1);  // -> "x"

// primera ronda: zombie 4 vs human 2 -> zombie gana (+2)
// segunda ronda: zombie 4+2 vs human 8 -> humano gana (+2)
// tercera ronda: zombie 4 vs human 2+2 -> empate
// resultado: "x"