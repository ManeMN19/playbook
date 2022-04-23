// Ejemplo 12: Uso de find en una lista de objetos
const scores12 = [
    { name: 'Almendra', score: 95 },
    { name: 'Luis', score: 98 },
    { name: 'Manuel', score: 80 },
    { name: 'Ernesto', score: 50 },
    { name: 'Mauricio', score: 85 },
    { name: 'Jorge', score: 100 },
  ]
  
  const score_less_than_80 = scores12.find((user) => user.score < 80)
  console.log("Ejemplo 12. Nombre del puntaje menor a 80: " + score_less_than_80.name)