// Ejemplo 6: Getters para acceder a los atributos del objeto

class Animal {
    constructor(name, age){
     this.name = name
     this.age = age
     this.foods_completed = 3
     this.foods_todo = 5
    }
  
    // Podemos acceder a los atributos de esta clase
    get getFoodsCompleted() {
          return this.foods_completed
    }

    get getFoodsToDo() {
        return this.foods_todo
  }
  }
  
  console.log("Ejemplo 6: Getters para acceder a los atributos del objeto")
  const lion = new Animal("Lion", 1, [])
  console.log("Comidas completadas: " +lion.getFoodsCompleted)
  console.log("Comidas pendientes: " +lion.getFoodsToDo)