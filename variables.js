var g = 'global';

function app() {
  var l = 'local';
  u = 'i exist';
  console.log(g); // global

  if (true) {
    let x = 42;
    var y = 43;
    const z = 44;

    z = 45; // ERR : Assignment to constant variable.
  }

  console.log(x); // ERR : x is not defined
  console.log(y); // 43
  console.log(z); // ERR : z is not defined
}

console.log(l); // ERR : l is not defined
console.log(u); // i exist

app();
