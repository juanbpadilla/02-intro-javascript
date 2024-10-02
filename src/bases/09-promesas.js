
// ----------- PROMESAS --------------------

import { getHeroeById } from "./08-imp-exp";

// const promesa = new Promise((resolve, reject) => {

//   setTimeout(() => {
//     // console.log('2 segundos después')

//     // Tarea
//     // importen el heroe
//     const p1 = getHeroeById(2)

//     // se ejecuta si se cumple la promesa
//     resolve(p1)

//     // se ejecuta si hay error
//     // reject('No se pudo encontrar el héroe')
//   }, 2000)

// });

// promesa.then((heroe) => {
//   console.log('heroe ', heroe)
// })
//   .catch(e => console.warn(e)) // aqui manejamos el error



// promesa a la q le podemos pasar argumentos
const getHeroeByIdAsynd = (id) => {

  return new Promise((resolve, reject) => {

    setTimeout(() => {
      // Tarea
      // importen el heroe
      const p1 = getHeroeById(id)

      if (p1) {
        // se ejecuta si se cumple la promesa
        resolve(p1)
      } else {
        // se ejecuta si hay error
        reject('No se pudo encontrar el héroe')
      }

    }, 2000)

  });

};

getHeroeByIdAsynd(5)
  .then(console.log)
  .catch(console.warn) // aqui manejamos el errortch

