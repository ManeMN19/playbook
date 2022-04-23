const fruits = {
    name: "Fresa",
    // Esta es una función que se guarda como propiedad
    sayName: function(){
      // this.name hace referencia a la propiedad del objeto
      console.log(`Esta fruta es una: ${this.name}`)
    }
  }
  
  console.log("Ejemplo 4: Objeto con métodos")
  fruits.sayName()