
// ----------- DESESTRUCTURACIÓN-----------------
//  Asignación Desestructurante

const persona = {
  nombre: 'Tony',
  edad: 45,
  clave: 'Ironman'
}

// ⚠️ Imprimir de la forma tediosa
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);
// ⚠️

//  Extraemos en una constante con llave 
//  los campos q necesitamos del objeto persona
const { edad, clave, nombre } = persona;

// ✅ De esta manera simplificamos su manejo
console.log(nombre);
console.log(edad);
console.log(clave);
// ✅


//  Podemos recibir todo el objeto persona
const retornaPersona = (usuario) => {
  const { edad, clave, nombre } = usuario;

  console.log(edad, nombre, clave);
}

// Tambien podemos filtrar solo una de sus propiedades o mas de sus propiedades
// Tambien podemos asignarles valores por defecto a los argumentos
const retornaPersona1 = ({ nombre, edad, rango = 'capitan' }) => {

  console.log(nombre, edad, rango);
}

retornaPersona(persona);
retornaPersona1(persona);


const useContext = ({ nombre, clave, edad, rango = 'capitan' }) => {

  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 14.46543,
      lng: -12.654231
    }
  }

}

// Desestructurando objetos anidados
// eslint-disable-next-line react-hooks/rules-of-hooks
const { nombreClave, anios, latlng: { lat, lng } } = useContext(persona);
console.log(nombreClave, anios)
console.log(lat, lng)