// const rest = new Map();
// rest.set("name", "Classico Italiano");
// rest.set(1, "Firenze, Italy");
// rest.set(2, "Lisbon, Protugal");
// console.log(rest.set(2, "Lisbon, Portugal"));

// rest
//   .set("categories", ["Italian", "Pizzeria", "Vegatarian", "Organic"])
//   .set("open", 11)
//   .set("close", 23)
//   .set(true, "We are open :D")
//   .set(false, "We are closed :(");

// console.log(rest);

// console.log(rest.get("name"));
// console.log(rest.get(true));
// console.log(rest.get(false));
// console.log(rest.get(1));
// console.log(rest.get(2));

// const time = 0;
// console.log(rest.get(time >= rest.get('open') && time <= rest.get('close')));
// console.log(rest.has('categories'));
// rest.delete(2);
// rest.clear();
// const arr = [1, 2, 3];
// rest.set(arr, 'test');

// rest.set(document.querySelector('h1'), 'Heading');

// console.log(rest);
// console.log(rest.get(arr));
// console.log(rest.size);

'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const hours = {
    [weekdays[3]]: {
        open: 12,
        close: 22,
    },
    [weekdays[4]]: {
        open: 11,
        close: 23,
        anotherObj: {myName: 'Tun Naing Win', age: 19, school: 'Info Myanmar University'},
    },
    [weekdays[5]]: {
        open: 0,
        ['close']: 12 + 12,
    },
};

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegatarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    hours,

    info (yourName, email, age) {
        console.log('Hello, my name is Tun Naing Win');
    },

    order (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    // orderDelivery: function ({starterIndex = 0, mainIndex = 0, time = '12:00', address = 'Melbourne'}) {
    //     console.log(`order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will delivered to the ${address} at ${time}🔥❤️`);        
    // },

    orderDelivery ({time = '10:00', starterIndex = 1, mainIndex = 1, address}) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will delivered to the ${address} at ${time}🔥`);
    },

    // orderPasta: function (ing1, ing2, ing3) {
    //     console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
    // },

    orderPasta (ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
    },

    orderPizza (mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    }
};

const question = new Map([
  ['question', 'What is the best progamming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]);

console.log(question);

//Convert object to map
console.log(Object.entries(hours));
const hoursMap = new Map(Object.entries(hours));
console.log(hoursMap);

//Quiz app
console.log(question.get('question'));

for (const [key, value] of question) {
  if (typeof key === 'number')
  console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(question.get(answer === question.get('correct')));

//Convert map to array
const MapToArr = [...question];
console.log(MapToArr);

console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);