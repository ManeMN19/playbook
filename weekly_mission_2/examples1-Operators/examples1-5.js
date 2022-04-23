// Ejemplo 5: Uso de Map para convertir todos los nombres de una lista a mayúsculas
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const namesToUpperCase = names.map(function(name) { return name.toUpperCase()}) // MAYÚSCULAS
const namesToLowerCase = names.map((name) => name.toLowerCase()) // minúsculas

console.log("Array Original: "+names+"\n")
console.log("Ejemplo 5: Uso de Map para convertir todos los nombres de una lista a mayúsculas")
console.log(namesToUpperCase)
console.log("\nEjemplo 5: Uso de Map para convertir todos los nombres de una lista a minúsculas")
console.log(namesToLowerCase)
