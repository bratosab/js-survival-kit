function apple() {
  const price = 1.2;
  return '🍏';
}

function eat(food) {
  return food;
}

function alive() {
  console.log("I'm hungry");
  return eat(apple());
}

function stackOverflow(i = 1) {
  i++;
  return stackOverflow(i);
}
