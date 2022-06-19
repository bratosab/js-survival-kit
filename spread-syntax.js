// Objects

const pikachu = { name : 'Pikachu' };
const stats = { hp : 100, attack : 50, defense : 40 };

// Add the stats attributes to pikachu
pikachu['hp'] = stats.hp;
pikachu['attack'] = stats.attack;
pikachu['defense'] = stats.defense;

// OR 
const level0 = Object.assign(pikachu, stats);
const level1 = Object.assign(pikachu, { hp: 45 });

// or even better 
const level01 = { ...pikachu, ...stats };
const level02 = { ...pikachu, hp: 45 };


// Arrays

let pokemons = ['Raichu', 'Pikachu', 'Sandshrew', 'Sandslash'];

pokemons.push('Bulbasaur');
pokemons.push('Charmander');
pokemons.push('Squirtle');

// Using spread syntax
// push 
pokemons = [...pokemons, 'Bulbasaur', 'Charmander', 'Squirtle'];
// shift 
pokemons = ['Bulbasaur', 'Charmander', 'Squirtle', ...pokemons];