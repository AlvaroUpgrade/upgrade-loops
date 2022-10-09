// **Iteración #7: For...of avanzado**

// Usa un bucle **for...of** para recorrer todos los juguetes y añade los que tengan más de 15 ventas (sellCount) al array popularToys.
// Imprimelo por consola.. Puedes usar este array:

const popularToys = [];
const toys = [
  { id: 5, name: "Buzz MyYear", sellCount: 10 },
  { id: 11, name: "Action Woman", sellCount: 24 },
  { id: 23, name: "Barbie Man", sellCount: 15 },
  { id: 40, name: "El gato con Guantes", sellCount: 8 },
  { id: 40, name: "El gato felix", sellCount: 35 },
];

function arrayToArray(originArray, destinationArray) {
  for (const iterator of originArray) {
    console.log(iterator); //Recorre el array de origen
    if (iterator["sellCount"] > 15) {
      console.log("Este si");
      destinationArray.push(iterator);
      console.log(
        "Se ha añadido un juguete al listado de juguetes populares. +1");
    } else {
      console.log("Este no");
    }
  }
}

arrayToArray(toys, popularToys);
console.log("Listado de los juguetes más vendidos: ");
console.log(popularToys);
