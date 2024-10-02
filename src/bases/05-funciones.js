
// -------- FUNCIONES EN JS -----------

// 🚫 No debemos crear funciones de esta manera
// function saludar(nombre) {
//   return `Hola, ${nombre}`
// }

// ✅ Debemos trabajarla siempre como una constante
const saludar = function (nombre) {
  return `Hola, ${nombre}`
}

//  Combirtiendola a una función de flecha
const saludar2 = (nombre) => {
  return `Hola, ${nombre}`
}

//  Simplificando la función saludar2
const saludar3 = (nombre) => `Hola, ${nombre}`

//  Función q no recibe ningún argumento
const saludar4 = () => `Hola Mundo`

// ----------- Funciones de forma implícita------------

// 🚫 No debemos mandar el cuerpo de la función de esta manera
// const getUser = () => {
//   uid: 'ABC123',
//     username: 'Us_Name23'
// }

// ✅ Para mandar el el cuerpo de una función de forma implícita
//    (sin return) esta debe estar entre paréntesis
const getUser = () => ({
  uid: 'ABC123',
  username: 'Us_Name23'
})

console.log(saludar('Goku'))
console.log(saludar2('Goku'))
console.log(saludar3('Goku'))
console.log(saludar4())
console.log(getUser())


// TAREA
//  1. Transformar a una función de flecha
//  2. Tiene q retornar un objeto implícito
//  3. Pruebas
const getUsuarioActivo = (nombre) => ({
  uid: 'ABC456',
  nombre: nombre
})

const usuarioActivo = getUsuarioActivo('Juan');
console.log(usuarioActivo);
console.log(getUsuarioActivo('Pedro'));

