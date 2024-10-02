

//  Arreglos en JS

//  Tamaño predefinido
// const arreglo = new Array(100);

// ⚠️ No se recomienda usar push para agregar objetos a un array
// const arreglo = [];
// arreglo.push(1)
// arreglo.push(2)
// arreglo.push(3)
// arreglo.push(4)
// ⚠️

const arreglo = [1, 2, 3, 4];

// 🚫 Forma incorrecta de asignar los valores de un array a otro
//    de esta manera al modificar el segundo tambien se modifica el primer array
// const arreglo2 = arreglo;
// arreglo2.push(5);

// ✅ Manera correcta de hacerlo
//    Usamos un operador "...spread", este manda individualmente los valores de un
//    array al otro, por eso podemos añadirle mas variable en la misma llave
const arreglo2 = [...arreglo, 5];


// ---------------- Array.map() --------------------

// 🚫 Un array.map() siempre debe retornar una función
// const arreglo3 = arreglo2.map();

// ⚠️ Cuando una función no tiene un return explícito
//    retorna undenined
// const arreglo3 = arreglo2.map(function (numero) {});


//  Creamos un nuevo arreglo3 en el q le asignamos el doble del
//  valor de los elementos del arreglo2, esto no afecta al arreglo2
const arreglo3 = arreglo2.map(function (numero) {
  return numero * 2;
});

console.log(arreglo)
console.log(arreglo2)
console.log(arreglo3)