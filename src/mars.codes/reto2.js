// El traje espacial ha sufrido una falla en su sistema de energía. ¡Hay que equilibrar la energía de los componentes!

// Equilibrio Energético del Traje Aeroespacial
// El traje espacial se compone de varios componentes. Cada uno tiene un nivel de energía representado por un número entero en un array. Para que el traje funcione bien, todos los componentes deben tener el mismo nivel de energía.

// Objetivo del Reto
// Redistribuye la energía entre los componentes utilizando únicamente la energía actualmente disponible. ¡No se permite añadir energía externa!

// Instrucciones y Requisitos
// Calcula el nivel objetivo: Determina el entero menor o igual al promedio actual de energía, es decir, el piso (Math.floor) de la división de la suma total de energía por el número de componentes. Este valor será el nivel que tendrá cada componente tras la redistribución.
// Energía sobrante: La energía sobrante es la diferencia entre la suma total de energía y el total consumido para equiparar todos los componentes al nivel objetivo.
// Salida de la función: La solución debe devolver un objeto que incluya:
// balanced: Un array con el nivel objetivo asignado a cada componente.
// leftover: El número de unidades de energía sobrante.
// No se permite añadir energía externa. Debes trabajar únicamente con la energía disponible en el array.
// ¡Recuerda! Sólo puedes usar la energía actual para equilibrar los componentes del traje. Así que leftover como mínimo debe ser 0.

function balanceEnergy(energy) {
  const initialValue = 0;
  const sumWithInitial = energy.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
  );
  const balanced = Math.floor(sumWithInitial / energy.length)
  energy = energy.fill(balanced)
  const leftover = sumWithInitial - (balanced * energy.length)
  
  return { balanced: energy, leftover: leftover };
}

balanceEnergy([1, 2, 3, 4])
// { balanced: [2, 2, 2, 2], leftover: 2 }

balanceEnergy([1, 3, 2])
// { balanced: [2, 2, 2], leftover: 0 }

balanceEnergy([4, 6, 4])
// { balanced: [4, 4, 4], leftover: 2 }

balanceEnergy([1, 1])
// { balanced: [1, 1], leftover: 0 }