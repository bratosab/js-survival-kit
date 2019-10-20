const Beer = { isRefreshing: true };
const Guiness = Object.create(Beer);

console.log(Guiness.isRefreshing); // true
