// **Iteración #5: Probando For**

// Usa un bucle **for** para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40.
// Imprime en un ***console log*** el array. Puedes usar este array:

const placesToTravel = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];

function arrayDeployment(object) {
  for (const attributes in object) {
    if (object[attributes]["id"] === 11 || object[attributes]["id"] === 40) {
      console.log("Se ha borrado con exito el objeto.");
      delete object[attributes];
    }

    console.log(object[attributes]);
  }
}
console.log("Lista Actualizada: ");
arrayDeployment(placesToTravel);
