const myPokemon = {
    name: "Pikachu",
    sayHelloToMyPokemon: function(yourPokemon){
      console.log(`${this.name} dice "Hola" a ${yourPokemon}`)
    }
  }  
  
  console.log("Ejemplo 5: Objeto con método que recibe parámetros")
  myPokemon.sayHelloToMyPokemon("Charizard");