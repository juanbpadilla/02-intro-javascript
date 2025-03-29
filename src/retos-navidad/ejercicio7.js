// ¡El grinch 👹 ha pasado por el taller de Santa Claus! Y menudo desastre ha montado. Ha cambiado el orden de algunos paquetes, por lo que los envíos no se pueden realizar.

// Por suerte, el elfo Pheralb ha detectado el patrón que ha seguido el grinch para desordenarlos. Nos ha escrito las reglas que debemos seguir para reordenar los paquetes. Las instrucciones que siguen son:

// Recibirás un string que contiene letras y paréntesis.
// Cada vez que encuentres un par de paréntesis, debes voltear el contenido dentro de ellos.
// Si hay paréntesis anidados, resuelve primero los más internos.
// Devuelve el string resultante con los paréntesis eliminados, pero con el contenido volteado correctamente.

/** @param {string} packages with parentheses
 *  @returns {string} Fixed and sorted packages
 */
// function fixPackages(packages) {
  
//   const generatePackages = (arr) => {
//     const newArr = [...arr]
//     const localArr = []
    
//     while (newArr.length > 0) {
//       const char = newArr[0]
//       if (char ==='(') {
//         let j = 0;
//         let countOpeningParentheses = 1;
//         let countClosingParentheses = 0;
//         while (countOpeningParentheses > countClosingParentheses) {
//           j++
//           if (newArr[j] ==='(') {
//             countOpeningParentheses++
//           } else if (newArr[j] ===')') {
//             countClosingParentheses++
//           }   
//         }
//         const localArr2 = generatePackages([...newArr].slice(1, j))
//         newArr.splice(0, j+1)
//         localArr.push(localArr2)
//       } else {
//         localArr.push(char)
//         newArr.splice(0, 1)
//       }
//     }
//     return localArr
//   }
  
//   const openingIndex = generatePackages([...packages]);
  
//   const sortPackages = (arr) => {
//     return arr.flatMap(item => {
//       if (Array.isArray(item)) {
//         const aux = sortPackages(item)
//         return aux.reverse()
//       } 
//       return item
//     })
//   }
  
//   return sortPackages(openingIndex).join('')
// }

// METODO: 2
// function fixPackages(packages) {
//   const regex = /\([^()]*\)/;
//   let match = packages.match(regex);
  
//   while (match) {
//     const innerContent = match[0].slice(1, -1); // Extrae el contenido sin paréntesis
//     const reversed = innerContent.split("").reverse().join(""); // Invierte la cadena
//     packages = packages.replace(match[0], reversed)
    
//     match = packages.match(regex);
//   }
  
//   return packages
// }

// MÉTODO: 3

function fixPackages(packages) {
  /** Expresión regular para encontrar los paréntesis más internos
   * \( → Encuentra un paréntesis de apertura (.
   * [^()]* → Captura cualquier contenido dentro de los paréntesis que no contenga más paréntesis.
   * \) → Encuentra un paréntesis de cierre ).   *  
   */
  const regex = /\([^()]*\)/;
  
  /** Función recursiva para invertir los paquetes
   * 
   * @returns {string} Paquetes invertidos
   */
  const generatePackages = () => {
    const match = packages.match(regex); // Busca los paréntesis más internos en la cadena usando la expresión regular definida
    if (!match) return packages; // Si no hay coincidencias, devuelve la cadena original sin cambios y termina la recursión
    
    const innerContent = match[0].slice(1, -1); // Extrae el contenido sin paréntesis
    const reversed = innerContent.split("").reverse().join(""); // Invierte la cadena
    packages = packages.replace(match[0], reversed) // Reemplaza en la cadena original
    return generatePackages() // Llama recursivamente a la función para seguir buscando paréntesis
  }
  
  return generatePackages() // Devuelve la cadena resultante después de aplicar todas las inversiones
}

fixPackages('a(cb)de')
// ➞ "abcde"
// Volteamos "cb" dentro de los paréntesis

fixPackages('a(bc(def)g)h')
// ➞ "agdefcbh"
// 1º volteamos "def" → "fed", luego volteamos "bcfedg" → "gdefcb"

fixPackages('abc(def(gh)i)jk')
// ➞ "abcighfedjk"
// 1º volteamos "gh" → "hg", luego "defhgi" → "ighfed"

fixPackages('a(b(c))e')
// ➞ "acbe"
// 1º volteamos "c" → "c", luego "bc" → "cb"