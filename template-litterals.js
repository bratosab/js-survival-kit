const hero = {
    name: 'Superman',
    gender: 'male',
    skills: ['flying', 'super strength', 'eye beam'],
    weakness: 'cryptonite',
    age: 568
}

// Old way
let bio = hero.name + ' is a ' + hero.age + ' years ' + hero.gender + ' hero skilled in ' + hero.skills.join(' & ')

// New way
const { name, age, gender, skills } = hero;
bio = `${name} is a ${age} years ${gender} hero skilled in ${skills.join(' & ')}`
console.log(bio);

// Advanced Tag Example
function heroAge(str, age) {
    const ageStr = age > 500 ? 'old' : 'young';
    return `${str[0]}${ageStr} at ${age} years`;
}

const bio2 = heroAge`This hero is ${hero.age}`;
console.log(bio2);