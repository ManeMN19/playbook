// const myPokemon = {
//     name: "Pikachu",
//     sayHelloToMyPokemon: function(yourPokemon){
//       console.log(`${this.name} dice "Hola" a ${yourPokemon}`)
//     }
//   }
  
//   console.log("Ejemplo 5: Objeto con método que recibe parámetros")
//   myPokemon.sayHelloToMyPokemon("Charizard");


  const myPet = {
    name: "Woopa",
    sayHelloToMyPet: function(yourPet){
      console.log(`${this.name} say's hello to ${yourPet}`)
    }
  }
  
  console.log("Ejemplo 5: Objeto con método que recibe parámetros")
  myPet.sayHelloToMyPet("Tulio")