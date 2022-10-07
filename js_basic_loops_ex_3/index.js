// **Iteración #3: Probando For...of**
// Usa un bucle forof para recorrer todos los destinos del array. Imprime en un ***console.log*** sus valores.
// Puedes usar este array:

const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']

function arrayDeployment(array) {
  for (const elements of array) {
    console.log(elements);
  }
}

arrayDeployment(placesToTravel);