console.log(typeof []); // object
console.log(typeof {}); // object
console.log(typeof function() {}); // function

var x = {}; // ASSIGN
x['key'] = 'value'; // MUTATION
console.log(x); // { key: 'value' }

const obj = new Object();
obj.name = 'Tom';
obj.age = 24;

const obj = {
  name: 'Tom',
  age: 24,
  hello: function() {
    console.log(this); // { name: 'Tom', age: 24, ... }
    console.log(`Hello ${this.name}!`);
  },
  hello2: () => {
    console.log(this); // {}
  }
};

obj.hello();
obj.hello2();

obj.name = 'Tom 2';
obj['age'] = obj.age++;

// Binding this
const woman = {
  face: '👩'
};
const man = {
  face: '👨'
};
function hello() {
  return this.face;
}

console.log(hello()); // ERR : property face undefined
console.log(hello.call(woman)); // 👩
