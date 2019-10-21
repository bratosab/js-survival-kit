console.log(typeof undefined); // undefined
console.log(typeof 42); // number
console.log(typeof '42'); // string
console.log(typeof true); // boolean
console.log(null == undefined); // true
console.log(null === undefined); // false

var val;
console.log(val); // undefined

function func() {}
console.log(func); // undefined

var val2 = null;
console.log(val2); // null

function func2() {
  return null;
}
console.log(func2); // null
