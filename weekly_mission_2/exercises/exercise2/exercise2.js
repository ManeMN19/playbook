const explorerlist = require('./explorer.js');

console.log("\n1. Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH.")
explorerlist.forEach( (explorer) => console.log(`Name: ${explorer.name}`));

console.log("\n2. Imprime el stack de cada explorer en la lista, usa FOR EACH.")
explorerlist.forEach( (explorer) => console.log(`Stack: ${explorer.stack}`));

console.log("\n3. Crea una nueva lista con las listas de stacks de cada explorer, usa MAP.")
const newList= explorerlist.map((explorer) => explorer.stack)
console.log(newList)

console.log("\n4. Obtén la lista de explorers que tengan en su stack js, usa FILTER (para validar un elemento en un lista se usa el método includes)")
const listFilter = explorerlist.filter(explorer => explorer.stack.includes('js'));
console.log(listFilter)

console.log("\n5. Busca el primer explorer que sea de la CDMX, usa FIND")
console.log(explorerlist.find(explorer=>explorer.city=="CDMX"))

console.log("\n6. Obtén la suma de todos los exercises_completed, usa REDUCE")
const Suma= explorerlist.reduce((acc, explorer) => acc + explorer.exercises_completed,0)
console.log(`Suma: ${Suma}`)

console.log("\n7. Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME")
console.log(explorerlist.some((explorer) =>  explorer.missions.frontend.exercisesFinished === true))

console.log("\n8. Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.")
console.log(explorerlist.every((explorer) =>  explorer.missions.onboarding.isFinished == true))
