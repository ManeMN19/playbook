import Pokemon from './pokemon'
const myPokemon = new Pokemon('Charmander','Fire')
test('1) Create a new object pokemon', () => {
  expect(myPokemon.name).toBe('Charmander'); // Corrige esta prueba
});

test('2) Pokemon Type', () => {
    expect(myPokemon.type).toBe('Air'); 
  });