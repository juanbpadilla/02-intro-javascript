// Una persona ha sido asesinada en la noche de Halloween 🔪. Usando un hechizo 🧙‍♀️, hemos conseguido escuchar su último susurro pero es muy debíl y no nos permite identificar quién pudo ser el asesino.

// La información que nos proporciona:

// whisper: cadena de texto que representa lo que la víctima intentó decir antes de morir

// suspects: lista de cadenas que representa los nombres de todos los sospechosos.

// Hay que tener que el susurro whisper tiene algunas reglas:

// Cada ~ representa una letra incierta en el susurro.
// Cada posición del susurro es una posición del nombre del asesino.
// La longitud del whisper no siempre representa la longitud completa del nombre, ya que la víctima pudo haber muerto antes de terminar de decirlo.
// Pero si el último carácter del susurro es una $, entonces el nombre del asesino terminaba ahí.
// ¡Tu objetivo es descubrir quién pudo ser el asesino! Debes devolver:

// Si solo un nombre encaja con el patrón del susurro, retorna ese nombre.
// Si hay varios nombres que encajan, retorna todos los nombres separados por comas.
// Si ningún nombre encaja, retorna una cadena vacía ("").
// Las mayúsculas y minúsculas de las letras no importan.

// METODO: 1
// Usando un map para recorrer los sospechosos y un filter para eliminar los sospechosos que no coincidan con el susurro
// function findTheKiller(whisper, suspects) {
//   let arr = [...suspects]
//   const whisperLng = whisper.length
//   suspects.map(function (suspect) {
    
//     if (whisper.includes('$') && (whisperLng -1) < suspect.length) {
//         let aux = arr.filter(value => value !== suspect);
//         arr = [...aux]
//     } else {
//       const str = suspect.toLowerCase()
//       for (let i = 0; i < whisperLng; i++) {
//         if ( !['~', '$', str[i]].includes(whisper[i]) ) {
//           let aux = arr.filter(value => value !== suspect);
//           arr = [...aux]
//         }
//       }
//     }
//   })
  
//   return arr.toString()
// }


// METODO: 2
// Usando la función every para comparar los caracteres
// function findTheKiller(whisper, suspects) {
//   const normalizedWhisper = whisper.toLowerCase()
//   const isExactMatch = whisper.endsWith('$')
  
//   const matchesPattern = (suspect) => {
//     const normalizedSuspect = suspect.toLowerCase()
//     const whisperToUse = isExactMatch 
//       ? normalizedWhisper.slice(0, -1)
//       : normalizedWhisper
    
//     if (isExactMatch && whisperToUse.length !== normalizedSuspect.length) {
//       return false
//     }
    
//     return [...whisperToUse].every((char, i) => {
//       return char ==='~' || char === normalizedSuspect[i]
//     })
//   }
  
//   const matchingSuspects = suspects.filter(matchesPattern)
  
//   return matchingSuspects.join(',')
// }


// METODO: 3
// Usando expresiones regulares y every para comparar los caracteres
function findTheKiller(whisper, suspects) {
  const endsWithSymbol = whisper.endsWith('$') // d~~~~~a  ~r~dd~$
  
  const baseWhisper = endsWithSymbol
    ? whisper.slice(0, -1) // ~r~dd~
    : whisper // d~~~~~a
  
  const wildcardWhisper = baseWhisper.replaceAll('~', '.') // .r.dd.
  
  const basePattern = `^${wildcardWhisper}` // `^.r.dd.`
  const endOfPattern = endsWithSymbol ? '$' : '.*$' // $
  const completePattern = `${basePattern}${endOfPattern}` //  `^.r.dd.$`
  const regex = new RegExp(completePattern, 'i')  //  
  
  const matchingSuspects = suspects.filter(suspect => regex.test(suspect))
  
  return matchingSuspects.join(',')
}

const whisper = 'd~~~~~a';
const suspects = ['Dracula', 'Freddy Krueger', 'Jason Voorhees', 'Michael Myers'];

findTheKiller(whisper, suspects); // -> 'Dracula'

const whisper2 = '~r~dd~';
const suspects2 = ['Freddy', 'Freddier', 'Fredderic']

findTheKiller(whisper2, suspects2); // -> 'Freddy,Freddier,Fredderic'

const whisper3 = '~r~dd~$';
const suspects3 = ['Freddy', 'Freddier', 'Fredderic']

findTheKiller(whisper3, suspects3); // -> ''

const whisper4 = 'mi~~def';
const suspects4 = ['Midudev', 'Midu', 'Madeval']

findTheKiller(whisper4, suspects4); // -> ''