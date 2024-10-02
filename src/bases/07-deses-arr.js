
// ----------- DESESTRUCTURACIÓN DE ARREGLOS ---------------

const personajes = ['Goku', 'Vegeta', 'Thrunks']
const [, , p3] = personajes
console.log(p3)




const retornaArreglo = () => {
  return ['ABC', 123]
}

const [letras, numeros] = retornaArreglo()
console.log(letras, numeros)



// Tarea
//  1. El primer valor de arreglo se llamará nombre
//  2. el segundo se llamará setNombre
const useState = (valor) => {
  return [valor, () => { console.log('Hola Mundo') }]
}

// eslint-disable-next-line react-hooks/rules-of-hooks
const [nombre, setNombre] = useState('Goku')

// console.log(arr)
// ejecutar la función dentro del array sin desestructuración
// arr[1]()

console.log(nombre);
setNombre()
