// **Iteración #6: Mixed For e includes**

// Usa un bucle **for** para recorrer todos los juguetes y elimina los que incluyan la palabra gato.
// Recuerda que puedes usar la función ***.includes()*** para comprobarlo.Puedes usar este array:

const toys = [
  { id: 5, name: "Buzz MyYear" },
  { id: 11, name: "Action Woman" },
  { id: 23, name: "Barbie Man" },
  { id: 40, name: "El gato con Guantes" },
  { id: 40, name: "El gato felix" },
];

function deleteSomeToys(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i]["name"].includes("gato")) {
      console.log("Contiene la palabra gato");
      delete array[i];
      console.log("Se elimina el objeto*");
    } else {
      console.log("No tiene la palabra gato");
    }
  }
}

deleteSomeToys(toys);
console.log("Lista Actualizada:");
console.log(toys);
