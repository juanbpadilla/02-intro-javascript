// -------- import y export --------------

// import { heroes } from '../data/heroes'

//  Importar un export default
import heroes from '../data/heroes'

//  Importación individual junto a importación por defecto
// import heroes, { owners } from "../data/heroes";

// import { heroes, owners } from "./data/heroes";

// console.log(owners)


// metodo find
export const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);

// console.log(getHeroeById(2))

// metodo filter
export const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);

// console.log(getHeroesByOwner('DC'))
