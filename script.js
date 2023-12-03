const rest = new Map();
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");
rest.set(2, "Lisbon, Protugal");
console.log(rest.set(2, "Lisbon, Portugal"));

rest
  .set("categories", ["Italian", "Pizzeria", "Vegatarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open :D")
  .set(false, "We are closed :(");

console.log(rest);

console.log(rest.get("name"));
console.log(rest.get(true));
console.log(rest.get(false));
console.log(rest.get(1));
console.log(rest.get(2));

const time = 0;
console.log(rest.get(time >= rest.get('open') && time <= rest.get('close')));
console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();
const arr = [1, 2, 3];
rest.set(arr, 'test');

rest.set(document.querySelector('h1'), 'Heading');

console.log(rest);
console.log(rest.get(arr));
// console.log(rest.size);