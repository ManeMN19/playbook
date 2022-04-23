// Ejemplo 8: Filtrar una lista por condicional
const scores = [
    { name: 'Almendra', score: 95 },
    { name: 'Luis', score: 98 },
    { name: 'Manuel', score: 80 },
    { name: 'Ernesto', score: 50 },
    { name: 'Mauricio', score: 85 },
    { name: 'Jorge', score: 100 },
  ]
  
  const scoresGreaterEighty = scores.filter((score) => score.score >= 80 && (score.name.includes("m")||score.name.includes("M")))
  console.log("Ejemplo 8: Filtrando elementos por score")
  console.log(scoresGreaterEighty)