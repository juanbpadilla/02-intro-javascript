// Exportar por defecto, manera 1
// export default [

// export const heroes = [
const heroes = [
  {
    id: 1,
    name: 'Batman',
    owner: 'DC'
  },
  {
    id: 2,
    name: 'Spiderman',
    owner: 'Marvel'
  },
  {
    id: 3,
    name: 'Superman',
    owner: 'DC'
  },
  {
    id: 4,
    name: 'Flash',
    owner: 'DC'
  },
  {
    id: 5,
    name: 'Wolverine',
    owner: 'Marvel'
  },
];

//  Exportación individual
// export const owners = ['DC', 'Marvel'];
const owners = ['DC', 'Marvel'];

// ✅ Exportar por defecto, manera más adecuada
// export default heroes;

// Agrupar exports
export {
  heroes as default,
  owners
}