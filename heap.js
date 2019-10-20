function increment() {
  const i = 1;
  myObj.value++;
}

const myObj = { value: 0 };

function doIncrement() {
  increment();
  increment();
  increment();
  increment();
  increment();
}
