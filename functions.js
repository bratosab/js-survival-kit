// Syntaxes full vs arrow
function myFunc(input) {
  return output;
}
const myFunc = input => output;

// Anonymous
(function() {});
() => {};

// Named
function someName() {}
const someName = function() {};
const someName = () => {};

// Higher order functions 1
function cool(fun) {
  fun();
}
cool(() => console.log('This is sweet!'));

// Closures
function bar() {
  const beer = '🍺';
  let pintsCount = 0;

  function drink() {
    pintsCount++;
    return `${pintsCount} ${beer}`;
  }

  return drink;
}

const soiree = bar();

console.log(soiree()); // 1 🍺
console.log(soiree()); // 2 🍺
console.log(soiree()); // 3 🍺
console.log(soiree()); // 4 🍺
