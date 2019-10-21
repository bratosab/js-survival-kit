console.log(typeof []); // object
console.log(typeof {}); // object
console.log(typeof function() {}); // function

var x = {}; // ASSIGN
x['key'] = 'value'; // MUTATION
console.log(x); // { key: 'value' }
