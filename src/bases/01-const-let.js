
//  Variables y constantes

const nombre = 'Juan';
const apellido = 'Perez';

let valorDado = 5;
valorDado = 4;

console.log(nombre, apellido, valorDado)

// 🚫 var No se debe de usar...🚫

if (true) {
  //  Podemos volver a declarar valorDado ya q en este caso
  //  es un variable de scope, es decir, q solo va a existir
  //  en el ámbito de if
  const nombre = 'Peter'
  let valorDado = 6;

  console.log('nombre Dentro del scope: ' + nombre)
  console.log('valorDado Dentro del scope: ' + valorDado)
}

//  fuera de ese scope podemos usar el valorDado declarado en la
//  linea 7 sin q haya sido afectado por el valorDado dentro
//  del scope if, lo mismo para los valores const
console.log('nombre otra vez fuera de este: ' + nombre)
console.log('valorDado otra vez fuera de este: ' + valorDado)