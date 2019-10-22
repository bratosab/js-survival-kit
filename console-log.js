const a = { name: "Darth Vader", affiliation: "Galactic Empire", nervous: false };
const b = { name: "Princess Leia",  affiliation: "Rebel Alliance", nervous: true };
const c = { name: "Luke Skywalker", affiliation: "Rebel Alliance", nervous: true };
const d = { name: "Obi-Wan Kenobi", affiliation: "Jedi Order", nervous: false };

// Not ninja
console.log(a);
console.log(b);
console.log(c);
console.log(d);

// Ninja
console.log({ a, b, c, d });

// Ninja Master Jedi Order Of The Gods
console.table([a, b, c, d]);

// Ninja Master Jedi Order Of The Gods Premium
console.log('%c STAR WARS', 'color: blue; font-weight: bold;')

// Am I Slow ?
console.time('million');
let i = 0;
while (i < 1000000) {
    i++
}
console.timeEnd('million');