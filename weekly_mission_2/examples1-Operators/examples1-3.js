// Ejemplo 3: forEach para imprimir los países en letras mayúsculas
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
console.log("Ejemplo 3: Imprimiendo la lista de países en mayúsculas \n")
console.log("Array Original: "+countries+"\n");
console.log("MAYÚSCULAS:");
countries.forEach((element) => console.log(element.toUpperCase())) // toUpperCase() => Mayúsculas
console.log("\nminúsculas:");
countries.forEach((element) => console.log(element.toLowerCase())) // toLowerCase() => Minúsculas