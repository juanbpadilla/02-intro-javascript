
const nombre = 'Juan';
const apellido = 'Perez';

// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido} ${1 + 1}`;

console.log(nombreCompleto);


function getSaludo(varNombre) {
  return 'Hola ' + varNombre;
}

console.log(`Es es un texto: ${getSaludo(nombre)}`)