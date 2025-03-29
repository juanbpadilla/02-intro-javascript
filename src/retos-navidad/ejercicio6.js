// Ya hemos empaquetado cientos de regalos 🎁… pero a un elfo se le ha olvidado revisar si el regalo, representado por un asterisco *, está dentro de la caja.

// La caja tiene un regalo (*) y cuenta como dentro de la caja si:

// Está rodeada por # en los bordes de la caja.
// El * no está en los bordes de la caja.
// Ten en cuenta entonces que el * puede estar dentro, fuera o incluso no estar. Y debemos devolver true si el * está dentro de la caja y false en caso contrario.

/** @param {string[]} box
 *  @returns {boolean} True if the gift is inside the box
 */
function inBox(box) {
  // console.log(box[0].split('').every(item => item === '#'))
  const regex = new RegExp(/^#.*#$/gm, 'i')
  const regex2 = new RegExp(/^#\s*\*\s*#$/gm, 'i')
  
  let checkContour = (item) => item === '#'
  
  return (
    box[0].split('').every(checkContour) &&
    box[box.length - 1].split('').every(checkContour) &&
    box.every(char => regex.test(char)) &&
    box.some(item => regex2.test(item))
  )
}

// METODO: 2
// function inBox(box) {
//   const regex = new RegExp(/^#.*#$/gm, 'i')
//   const regex2 = new RegExp(/.*\*.*/gm, 'i')
//   const regex3 = new RegExp(/^#[#]*#$/gm, 'i')
//   return (
//     [box[0], box[box.length - 1]].every(char => regex3.test(char)) &&
//     box.every(char => regex.test(char)) &&
//     box.some(item => regex2.test(item))
//   )
// }

inBox([
  "###",
  "#*#",
  "###"
]) // ➞ true

inBox([
  "####",
  "#* #",
  "#  #",
  "####"
]) // ➞ true

inBox([
  "#####",
  "#   #",
  "#  #*",
  "#####"
]) // ➞ false

inBox([
  "#####",
  "#   #",
  "#   #",
  "#   #",
  "#####"
]) // ➞ false