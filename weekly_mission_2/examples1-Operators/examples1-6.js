// Ejemplo 6: Uso de map para mostrar las primeras 3 letras de un string en MAYÚSCULAS.
const countries6 = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
const countriesFirstThreeLetters = countries6.map((country) =>
  country.toUpperCase().slice(0,3) // el método slice obtiene solo la longitud marcada del string // SLICE(Inicio,Fin)
)
console.log("Array: "+countries6)
console.log("Ejemplo 6: Uso de map para mostrar las primeras 3 letras de un string en MAYÚSCULAS.")
console.log(countriesFirstThreeLetters)