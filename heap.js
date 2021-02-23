function increment() {
  const i = 1;
  myObj.counter++;
}

const myObj = { counter: 0 };

function doIncrement() {
  increment();
  increment();
  increment();
  increment();
  increment();
}
