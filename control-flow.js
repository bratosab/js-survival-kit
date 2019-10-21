console.log(true); // true
console.log(!!{}); // true => if({})
console.log(!![]); // true

console.log(!!''); // false
console.log(!!'witchcraft'); // true

console.log(!!0); // false
console.log(!!-1); // true

console.log('42' == 42); // true, Type conversion before comparison
console.log('42' === 42); // false, Equality on Type & Value
