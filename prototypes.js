const Beer = { isRefreshing: true };
const Guinness = Object.create(Beer);

console.log(Guinness.isRefreshing); // true
