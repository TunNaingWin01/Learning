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

// const question = new Map([
//   ['question', 'What is the best progamming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct 🎉'],
//   [false, 'Try again!'],
// ]);

// console.log(question);

//Convert object to map
// console.log(Object.entries(hours));
// const hoursMap = new Map(Object.entries(hours));
// console.log(hoursMap);

//Quiz app
// console.log(question.get('question'));

// for (const [key, value] of question) {
//   if (typeof key === 'number')
//   console.log(`Answer ${key}: ${value}`);
// }

// const answer = Number(prompt('Your answer'));
// const answer = 3;
// console.log(question.get(answer === question.get('correct')));

//Convert map to array
// const MapToArr = [...question];
// console.log(MapToArr);

// console.log([...question.entries()]);
// console.log([...question.keys()]);
// console.log([...question.values()]);

// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

// const gameEvents = new Map([
//     [17, '⚽ GOAL'],
//     [36, '🔁 Substitution'],
//     [47, '⚽ GOAL'],
//     [61, '🔁 Substitution'],
//     [64, '🟡 Yellow card'],
//     [69, '🔴 Red card'],
//     [70, '🔁 Substitution'],
//     [72, '🔁 Substitution'],
//     [76, '⚽ GOAL'],
//     [80, '⚽ GOAL'],
//     [92, '🟡 Yellow card'],
// ]);

// const events = [...new Set(gameEvents.values())];
// console.log(events);

// gameEvents.delete(64);
// console.log(gameEvents);

// const time = [...gameEvents.keys()].pop();
// console.log(time);

// console.log(`An event happened, on average, every ${time / gameEvents.size} minutes`);

// for (const [minu, event] of gameEvents) {
//     minu < 45 ? console.log(`[FIRST HALF] ${minu}: ${event}`) : console.log(`[SECOND HALF] ${minu}: ${event}`);
// };

// Another way
// for (const [min, event] of gameEvents) {
//     const half = min <= 45 ? 'FIRST' : 'SECOND';
//     console.log(`[${half} HALF] ${min}: ${event}`);
// };

// const airline = 'TAP Air Portugal';

// console.log(airline.toLocaleLowerCase());
// console.log('naing'.toUpperCase());

//Fix capitalization in name
// const passenger = 'jOnAS';
// const passengerLower = passenger.toLocaleLowerCase();
// const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// const debugName = function (name) {
//     const generalName = name.toLocaleLowerCase();
//     return generalName[0].toUpperCase() + generalName.slice(1);
// }

// console.log(debugName('tunNaingWIN'));
// console.log(debugName('jOnAS'));

//Comparing email
// const email = 'hello@jonas.io';
// const loginEmail = '   Hello@Jonas.Io  \n';

// const loweremail = loginEmail.toLocaleLowerCase();
// const trimmedEmail = loweremail.trim();
// console.log(trimmedEmail);

// const normalizeEmail = loginEmail.toLocaleLowerCase().trim();
// console.log(normalizeEmail);
// console.log(email === normalizeEmail);

// replacing
// const priceGB = '288,97£';
// const priceUS = priceGB.replace('£', '$').replace(',', '.');
// console.log(priceUS);

// console.log('TunNaingWin'.replace('NaingWin', 'NaungTun'));

// const announcement = 'All passengers come to boarding door 23. Boarding door 23!';
// console.log(announcement.replaceAll('door', 'gate'));

// ---- regular expression ---- write string between slashes instead of quotes and (g) stands for global
// console.log(announcement.replace(/door/g, 'gate'));

// Boolean
// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('Boeing'));
// console.log(plane.startsWith('Air'));
// console.log(plane.endsWith('neo'));

// plane.startsWith('Airbus') && plane.endsWith('neo') && console.log('Part of the New Airbus family');

// console.log('TunNaingWin'.startsWith('Tun'));

// Practice exercise
// const checkBaggage = function (items) {
//     const baggage = items.toLocaleLowerCase();

//     if (baggage.includes('knife') || baggage.includes('gun')) {
//         console.log('You are NOT allowed on board');
//     } else {
//         console.log('Welcome aboard!');
//     }
// };

// checkBaggage('I have a laptop, some Food and a pocket Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');

// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log(plane[3]);
// console.log(plane.length);
// console.log('B737'.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Portugal'));
// console.log(airline.indexOf('portugal'));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));
// console.log(airline.slice(4, 7));
// console.log(airline.slice(8, 16));

// --- The length of a extracted string is always going to be end minus beginning ---

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(1, -1));
// console.log(airline.slice(-2));

// const checkMiddleSeat = function (seat) {
//     // B and E are middle seat
//     const s = seat.slice(-1);
//     if (s === 'B' || s === 'E')
//         console.log('You got the middle seat 😐');
//     else
//         console.log('You got lucky 😎');
// }

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// console.log(new String('Tun'));
// console.log(typeof new String('Tun'));
// console.log(typeof new String('Tun').slice(1));

// Split and Join
// console.log('a+very+nice+string'.split('+'));
// console.log('Jonas Schmedtmann'.split(' '));

// const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');
// console.log(firstName, lastName);

// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const capitalizeName = function (username) {
//     const name = username.toLowerCase();
//     const names = name.split(' ');
//     let namesUpper = [];

    // for (const n of names) {
        //    namesUpper.push(n[0].toUpperCase() + n.slice(1));
        // --- Another method ---
//         namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//     }
//     console.log(namesUpper.join(' '));
// };

// capitalizeName('jessica ann smith devis')
// capitalizeName('TUN NAING WIN')
// capitalizeName('TUN NAUNG TUN')

// Padding
// const message = 'Go to gate 23!';
// console.log(message.padStart(25, '.').padEnd(30, '+'));
// console.log('Tun'.padStart(25, ' ').padEnd(30, '+'));

// const maskCreditCard = function (number) {
//     const str = number + '';
//     const last = str.slice(-4);
//     return last.padStart(str.length, '*')
// };

// console.log(maskCreditCard(2984848558558));
// console.log(maskCreditCard(123456789));
// console.log(maskCreditCard(123456));

// const check = 123 + '';
// console.log(typeof check);
// console.log(check.length);

// Repeat
// const message2 = 'Bad weather... All Departure Delayed... ';
// console.log(message2.repeat(5));

// const planesInLine = function (n) {
//     console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
// }

// planesInLine(5);
// planesInLine(8);
// planesInLine(12);



// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
  first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
document.querySelector('button').innerHTML = 'Click';
let result = [];

document.querySelector('button').addEventListener('click', () => {
    let i = 0;
    const text = document.querySelector('textarea').value.toLocaleLowerCase();
    const letter = text.split('\n');
    // console.log(letter);
    
    for (const w of letter) {
        i++;
        result = [];
        const word = w.trim().split('_');
        // console.log('word', word);
        for (const m of word) {
            if (m === word[0]) {
                result.push(m);
                continue;
            } else {
                result.push(m.replace(m[0], m[0].toUpperCase()));
            }
        } 
        const finalResult = result.join('').padEnd(20, ' ') + `${'✅'.repeat(i)}`;
        console.log(finalResult);
    }
});

// INFO_MYANMAR_UNIVERSITY
// underscore_case
// first_name
// Some_Variable 
// calculate_AGE
// delayed_departure