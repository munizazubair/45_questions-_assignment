//Question no 1
//Done.

//Question no 2
let personName: string = "Muniza";
console.log(
  `hello ${personName}, would you like to learn some Typescript today?`
);

//Question no 3
//step 1 Upper case
let upperCase: string = personName.toUpperCase();
console.log("Upper Case = ", upperCase);

//step 2 Lower Case
let lowerCase: string = personName.toLowerCase();
console.log("Lower Case = ", lowerCase);

//step 3 Title case
console.log(
  personName.charAt(0).toUpperCase() + personName.slice(1).toUpperCase()
);

//Question no 4
let authorName: string = "Quaid-e-Azam Muhammad Ali Jinnah";

console.log(
  `${authorName} once said "With faith, discipline and selfless devotion to duty. there is nothing worthwhile that you cannot achieve."`
);

//Question no 5
let famous_person: string = "Quaid-e-Azam Muhammad Ali Jinnah";

let message: string =
  "With faith, discipline and selfless devotion to duty. there is nothing worthwhile that you cannot achieve.";

console.log(`${famous_person} once said "${message}"`);

//Question no 6
let myName: string = "Muniza Zubair";

//step 1 next line
console.log(`My name is \n "${myName}"`);

//different method
console.log(`Muniza \n Zubair`);

//step 2 whitespace in starting
console.log(`\t My name is "${myName}"`);

//different method
console.log(`Muniza \n Zubair`);

//Question no 7
//Addition
let num1: number = 5;
let num2: number = 3;
console.log(`5 + 3 = ${num1 + num2}`);

//Subtraction
let a: number = 10;
let b: number = 2;
console.log(`10 - 2 = ${a - b}`);

//Multiplication
let c: number = 2;
let d: number = 4;
console.log(`2 * 8 = ${c * d}`);

//Division
let x: number = 64;
let y: number = 8;
console.log(`64 / 8 = ${64 / 8}`);

//Question no 8
console.log(5 + 3);
console.log(10 - 2);
console.log(2 * 4);
console.log(64 / 8);

//Question no 9
let favNum: number = 8;
let mes: string = "My favourite number is ";
console.log(`${mes}"${favNum}"`);

//Question no 10
/* Muniza Zubair
Date : March 8,2024
program = A program refers to a set of instructions written in a specific programming language that tells a computer how to perform a certain task or solve a problem.*/

//Question no 11
let names = ["Aiman", "Ayesha", "Hoorain"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);

//Question no 12
console.log("Hello! my friend", names[0]);
console.log("Hello! my friend", names[1]);
console.log("Hello! my friend", names[2]);

//Question no 13
let cars = ["Audi", "BMW", "Mercedes"];
console.log(`I would like to own a ${cars[0]}`);
console.log(`I would like to own a ${cars[1]}`);
console.log(`I would like to own a ${cars[2]}`);

//Question no 14
let guests = ["Maryam", "Ali", "Ahmed"];

console.log(guests);

for (let guest of guests) {
  console.log(
    `Hey ${guest}! How about joining me for a delicious dinner? It would be awsome to have you there.`
  );
}

//Question no 15
guests.splice(2, 1, "Bushra");

console.log(guests);

for (let guest of guests) {
  console.log(
    `Hey ${guest}! How about joining me for a delicious dinner? It would be awsome to have you there.`
  );
}

//Question no 16
for (let guest of guests) {
  console.log(
    `Hey ${guest}I found a bigger dinner table, so now we can invite even more people to join us for dinner`
  );
}

//adding guest in start
guests.unshift("Laiba");
//adding guest in middle
guests.splice(1, 0, "Saad");
//adding guest in end
guests.push("Hiba");

console.log(guests);

//invitation message
for (let guest of guests) {
  console.log(
    `Hey ${guest} how about joining me for a delicious dinner? It would be awsome to have you there.`
  );
}

//Question no 17
for (let guest of guests) {
  console.log(
    `Oh!${guest} Since my dinnerr table won't arrive on time, I just caled two people to join us instead.`
  );
}

for (let guest = 1; guest <= 4; guest++) {
  console.log(
    `Hey!${guests.pop()} I apologize for the issue,but there's been delay with my dinner table.`
  );
}
console.log(guests);

for (let guest of guests) {
  console.log(
    `Hey! ${guest} I know my dinner table wont arrive on time, but that wont stop us from having a great time! Join us for a delicious dinner meal and good company.`
  );
}

guests.splice(0, 2);
console.log(guests);

//Question no 18

let places: string[] = [
  "New Zealand",
  "Iceland",
  "Japan",
  "Switzerland",
  "Norway",
];

console.log("Original order:", places);

console.log("Alphabetical order:", [...places].sort());

console.log("Original order:", places);

console.log("Reverse alphabetical order:", [...places].sort().reverse());

console.log("Original order:", places);

places.reverse();

console.log("Reversed order:", places);

places.reverse();

console.log("Original order:", places);
places.sort();

console.log("Alphabetical order:", places);

places.reverse();

console.log("Reverse alphabetical order:", places);

//Question no 19

let dinnerGuests = ["Alina", "Sabahat", "Sawera"];
console.log(`I am inviting ${dinnerGuests.length} guests to my dinner`);

//Question no 20
let cities = ["Islamabad", "Quetta", "Naran"];
console.log(`Cities I'd like to visit:${cities}`);

//Question no 21
let camera: { name: string; cameraInventor: string; inventionYear: number } = {
  name: "Photographic Camera",
  cameraInventor: "French Joseph-Nicephore Niepcce",
  inventionYear: 1861,
};
console.log(
  `Camera Info: In ${camera.inventionYear}, ${camera.cameraInventor} invented the first ${camera.name}`
);

//Question no 22
let food = ["Biryani", "Pulao", "Nihari"];

console.log(food[3]); //Intentional error: Arrays are zero-indexed, so index 3 out of bounds.

console.log(food[2]); //Correcting a error by accessing a valid index.

//Question no 23

let phone = "Iphone";
console.log(`Is phone == "Iphone"? "${phone == "Iphone"}"`); //True
console.log(`Is phone == "toyota"? "${phone == "toyota"}"`); //False

//1
let language = "English";
console.log(`Is English called a language?: "${language == "English"}"`); //true
console.log(`Is Lahore called a language?: "${language == "Lahore"}"`); //false
//2
let flagOfPakistan = "white and green";
console.log(
  `Is white and green colour called the flag colour of Pakistan?: "${
    flagOfPakistan == "white and green"
  }"`
); //true

console.log(
  `Is red colour called the flag colour of Pakistan?: "${
    flagOfPakistan == "red"
  }"`
); //false

//3
let laptop = "Dell";

console.log(`Is Dell a laptop company?: "${laptop == "Dell"}"`); //true

console.log(`Is Nokia a laptop company?: "${laptop == "Nokia"}"`); //false

//4
let country = "Dubai";
console.log(`Is Dubai a country?: "${country == "Dubai"}"`); //true
console.log(`Is Islamabad a country?: "${country == "Islamabad"}"`); //false

//5
let car = "Ferrari";
console.log(`Is Ferrari a car ?: "${car == "Ferrari"}"`); //true
console.log(`Is Samsung a car ?: "${car == "Samsung"}"`); //false

//Question no 24
console.log("apple" == "apple");

//console.log("cherry" == "banana");

//using lower case function
console.log("Apple".toLowerCase() == "apple"); //true

//numerical tests

console.log(2 < 4); //true
console.log(5 > 7); //false

//tests using "and" and "or"
let cond1: string = "true";
let cond2: string = "false";

console.log(cond1 && cond2); //false

console.log(cond1 || cond2); //true

//test whether an item is in a array
let languages = ["English", "Urdu", "Sindhi"];
console.log(`Is "Urdu" in languages? ${languages.includes("urdu")}`); //true
console.log(
  `Is "Punjabi" is not in languages? ${!languages.includes("Punjabi")}`
); //true

//Question no 25
let alien_colour = "green";
if (alien_colour == "green") {
  console.log("player just earned 5 points");
}
alien_colour = "red";
if (alien_colour == "green") {
  console.log("you just earned 5 points!");
  //no output because the condition is false.
}

//Question no 26
let alien_colour2 = "green";
if (alien_colour2 == "green") {
  console.log("you just earned 5 points for shooting the green alien");
} else {
  console.log("you just earned 10 points");
}

//Question no 27
let alien_colour3 = "green";
if (alien_colour3 == " yellow") {
  console.log("you just earned 5 points for shooting the yellow alien");
} else if (alien_colour == "red") {
  console.log("you just earned 10 points for shooting the red alien");
} else if (alien_colour == "green") {
  console.log("you just earned 15 points for shooting the green alien");
}

//Question no 28
let age = 45;
if (age < 2) {
  console.log("the person is a baby");
} else if (age < 4) {
  console.log("the person is a toddler");
} else if (age < 13) {
  console.log("the person is a kid");
} else if (age < 20) {
  console.log("the person is a teenager");
} else if (age < 65) {
  console.log("the person is a adult");
} else {
  console.log("the person is an elder");
}

//Question no 29
let favourite_fruits: string[] = ["mango", "oranges", "strawberries"];
if (favourite_fruits.includes("mango")) {
  console.log(`I really like mango`);
}
if (favourite_fruits.includes("apples")) {
  console.log("I don't like apples");
}

if (favourite_fruits.includes("oranges")) {
  console.log("I really like oranges");
}

if (favourite_fruits.includes("pear")) {
  console.log("I really like pear");
}

if (favourite_fruits.includes("strawberries")) {
  console.log("I really like strawberries");
}

//Question no 30
let usernames = [
  "admin_muniza",
  "admin_maheen",
  "admin_haseeb",
  "admin_hoorain",
  "admin_aiman",
];
if (usernames.includes("admin")) {
  console.log("Hello admin, would you like to see a status report?");
} else {
  console.log("Hello, thank you for logging in again.");
}

//Question no 31
let username: string[] = [];
if (username.length == 0) {
  console.log("We need to find some users!");
} else {
}

//Question no 32
let current_users: string[] = ["muniza", "maheen", "hiba", "aiman", "hoorain"];
let new_users: string[] = ["savera", "ayesha", "misbah", "maheen", "hiba"];

new_users.forEach((newUser) => {
  if (current_users.some((currentusers) => currentusers === newUser)) {
    console.log(`${newUser} will need to enter a new username.`);
  } else {
    console.log(`${newUser} is available.`);
  }
});


//Question no 33
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach((number) => {
  let suffix = "th";
  if (number === 1) {
    suffix = "st";
  } else if (number === 2) {
    suffix = " nd";
  } else if (number === 3) {
    suffix = "rd";
  }
  console.log(`${number}${suffix}`);
});


//Question no 34

let pizzaFlavours: string[] = [
  "BBQ chicken pizza",
  "cheese pizza",
  "chicken tikka pizza ",
];

for (let pizza of pizzaFlavours) {
  console.log(pizza);
}

for (let pizza of pizzaFlavours) {
  console.log(`I like ${pizza}`);
}

//Qustin no 35
let animals: string[] = ["cat", "dog", "rabbit"];

for (let animal of animals) {
  console.log(animal);
}

animals.forEach((animal) => {
  console.log(`A ${animal} would make a great pet`);
});

console.log("Any of these animals would make a great pet!");

//Question no 36
function make_shirt(size: string, message: string) {
  console.log(
    `making a ${size} t-shirt with the message "${message}" printed on it.`
  );
}

make_shirt("medium", "Hello World");

//Question no 37
function make_shirt2(
  size: string = "large",
  message: string = "I love Typescript"
) {
  console.log(
    `making a ${size} t-shirt with the message "${message}" printed on it.`
  );
}
make_shirt2();
make_shirt2("medium");
make_shirt2("small", "Dive into coding");

//Question no 38
function describe_city(cityName: string, countryName: string = "Pakistan") {
  console.log(`${cityName} is in ${countryName}`);
}
describe_city("Karachi");
describe_city("Islamabad");
describe_city("Lahore");

//Question no 39
function city_country(cityName, countryName) {
  console.log(`"${cityName},${countryName}"`);
}

city_country("Lahore", "Pakistan");

console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("Islamabad", "Pakistan"));

//Question no 40

function make_album(artistName: string, albumTitle: string) {
  console.log(
    `It is the artist name ${artistName} and it is the album name${albumTitle}`
  );
}
//Question no 41
let magicians = ["magician no 1", "magician no 2", "magician no 3"];

magicians.forEach((show_magicians) => {
  console.log(show_magicians);
});

//Question no 42
let make_great = (magicians) => {
  console.log("the great", magicians);
};
magicians.forEach(make_great);

//Question no 43

let magicians2 = ["magician 1", "magician 2", "magician 3"];

function make_great2(magicians2) {
  console.log(magicians2);
}

make_great2(magicians2);

let show_magicians = magicians2.forEach((val) => {
  console.log(`${val} the great`);
});

//Question no 44

function make_sandwich(...items) {
  console.log(`making a sandwich with: ${items}. `);
}
make_sandwich("ham", "cheese");
make_sandwich("tomato", "lettuce", "turkey");
make_sandwich("mustard", "mayo", "avacado", "sprouts");

//Question no 45

function make_car(manufacturer, model, ...options): object {
  let car = { manufacturer, model };
  options.forEach((key, value) => (car[key] = value));
  return car;
}
console.log(make_car("toyota", "corolla", ["colour", "red"], ["year", "2020"]));
console.log(
  make_car("ford", "fiesta", ["colour", "blue"], ["sunroof", "true"])
);
