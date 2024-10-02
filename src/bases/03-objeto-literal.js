
//  {} es un objeto literal

const persona = {
  nombre: 'Tony',
  apellido: 'Stark',
  edad: 45,
};

console.log('OBJETO LITERAL PERSONA: ')
console.log(persona);

//  📇 para imprimir un objeto tambien podemos usar, console.table
//  nos muestra nuestro objeto como una tabla para poder verlo
//  de manera mas ordenada
console.log('')
console.log('OBJETO LITERAL ORDENADO PERSONA: ')
console.table(persona);


//  OBJETOS DENTRO DE OTROS OBJETOS O ANIDADOS
//  En los objetos, tambien podemos anidar otros objetos, 
//  funciones, métodos, etc.
const persona1 = {
  nombre: 'Tony',
  apellido: 'Stark',
  edad: 45,
  direccion: {
    ciudad: 'New York',
    zip: 5532231,
    lat: 14.25632,
    lng: 35.15643
  }
};

console.log('')
console.log('OBJETO ANIDADO persona1: ')
console.log(persona1);


//  FORMA INCORRECTA 🚫
//  Cuando asignamos los valores de un objeto a otro de esta manera 
//  cualquier cambio q realicemos en persona2, afectará tambien a persona1
// const persona2 = persona1;

//  FORMA CORRECTA ✅
//  usando el perador "...spread" para clonar los valores
//  de un objeto sin que esto afecte al objeto original
const persona2 = { ...persona1 }

persona2.nombre = 'Peter'

console.log('')
console.log('OBJETO PERSONA2 ASIGNADO CON VALORES DE PERSONA1: ')
console.log('Cambiamos el nombre en persona2: ')
console.log(persona2)
console.log('OBJETO PERSONA1: ')
console.log(persona1);