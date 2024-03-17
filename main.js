//Question no 2
var personName = "Muniza Zubair";
console.log("hello ".concat(personName, ", would you like to learn some Python today?"));
//Question no 3
//step 1 Upper case
var upperCase = personName.toUpperCase();
console.log("Upper Case = ", upperCase);
//step 2 Lower Case
var lowerCase = personName.toLowerCase();
console.log("Lower Case = ", lowerCase);
//step 3 Title case
//Question no 4
var authorName = "Quaid-e-Azam Muhammad Ali Jinnah";
console.log("".concat(authorName, " once said \"With faith, discipline and selfless devotion to duty. there is nothing worthwhile that you cannot achieve.\""));
//Question no 5
var famous_person = "Quaid-e-Azam Muhammad Ali Jinnah";
var message = "With faith, discipline and selfless devotion to duty. there is nothing worthwhile that you cannot achieve.";
console.log("".concat(famous_person, " once said \"").concat(message, "\""));
//Question no 6
var myName = "Muniza Zubair";
//step 1 next line
console.log("My name is \n \"".concat(myName, "\""));
//different method
console.log("Muniza \n Zubair");
//step 2 whitespace in starting
console.log("\t My name is \"".concat(myName, "\""));
//different method
console.log("Muniza \n Zubair");
//Question no 7
//Addition 
var num1 = 5;
var num2 = 3;
console.log("5 + 3 = ".concat(num1 + num2));
//Subtraction
var a = 10;
var b = 2;
console.log("10 - 2 = ".concat(a - b));
//Multiplication
var c = 2;
var d = 4;
console.log("2 * 8 = ".concat(c * d));
//Division
var x = 64;
var y = 8;
console.log("64 / 8 = ".concat(64 / 8));
//Question no 8
console.log(5 + 3);
console.log(10 - 2);
console.log(2 * 4);
console.log(64 / 8);
//Question no 9
var favNum = 8;
var mes = "My favourite number is ";
console.log("".concat(mes, "\"").concat(favNum, "\""));
//Question no 10
/* Muniza Zubair
Date : March 8,2024
program = A program refers to a set of instructions written in a specific programming language that tells a computer how to perform a certain task or solve a problem.*/
//Question no 11
var names = ["Aiman", "Ayesha", "Hoorain"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
//Question no 12
console.log("Hello! my friend", names[0]);
console.log("Hello! my friend", names[1]);
console.log("Hello! my friend", names[2]);
//Question no 13
var cars = ["Audi", "BMW", "Mercedes"];
console.log("I would like to own a ".concat(cars[0]));
console.log("I would like to own a ".concat(cars[1]));
console.log("I would like to own a ".concat(cars[2]));
//Question no 14
var guests = ["Maryam", "Ali", "Ahmed"];
console.log(guests);
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guest = guests_1[_i];
    console.log("Hey ".concat(guest, "! How about joining me for a delicious dinner? It would be awsome to have you there."));
}
//Question no 15
guests.splice(2, 1, "Bushra");
console.log(guests);
for (var _a = 0, guests_2 = guests; _a < guests_2.length; _a++) {
    var guest = guests_2[_a];
    console.log("Hey ".concat(guest, "! How about joining me for a delicious dinner? It would be awsome to have you there."));
}
//Question no 16
for (var _b = 0, guests_3 = guests; _b < guests_3.length; _b++) {
    var guest = guests_3[_b];
    console.log("Hey ".concat(guest, "I found a bigger dinner table, so now we can invite even more people to join us for dinner"));
}
//adding guest in start
guests.unshift("Laiba");
//adding guest in middle
guests.splice(1, 0, "Saad");
//adding guest in end
guests.push("Hiba");
console.log(guests);
//invitation message
for (var _c = 0, guests_4 = guests; _c < guests_4.length; _c++) {
    var guest = guests_4[_c];
    console.log("Hey ".concat(guest, " how about joining me for a delicious dinner? It would be awsome to have you there."));
}
//Question no 17
for (var _d = 0, guests_5 = guests; _d < guests_5.length; _d++) {
    var guest = guests_5[_d];
    console.log("Oh!".concat(guest, " Since my dinnerr table won't arrive on time, I just caled two people to join us instead."));
}
//
for (var guest = 1; guest <= 4; guest++) {
    console.log("Hey!".concat(guests.pop(), " I apologize for the issue,but there's been delay with my dinner table."));
}
console.log(guests);
//
for (var _e = 0, guests_6 = guests; _e < guests_6.length; _e++) {
    var guest = guests_6[_e];
    console.log("Hey! ".concat(guest, " I know my dinner table wont arrive on time, but that wont stop us from having a great time! Join us for a delicious dinner meal and good company."));
}
//
guests.splice(0, 2);
console.log(guests);
//Question no 18
var locations = ["Saudia Arabia", "Dubai", "Turkey", "Malaysia", "Singapore"];
console.log(locations);
console.log(locations[0] = "Dubai");
console.log(locations[1] = "Malaysia");
console.log(locations[2] = "Saudia Arabia");
console.log(locations[3] = "Singapore");
console.log(locations[4] = "Turkey");
console.log(locations);
//left some exerciseas which I skip,that I'll dop after all this Insha Allah
//Question no 19
//taking dinner guests list from exercise 14.
var dinnerGuests = ["Alina", "Sabahat", "Sawera"];
console.log("I am inviting ".concat(dinnerGuests.length, " guests to my dinner"));
//Question no 20
var cities = ["Islamabad", "Quetta", "Naran"];
console.log("Cities I'd like to visit:".concat(cities));
//Question no 21
var camera = { name: "Photographic Camera",
    cameraInventor: "French Joseph-Nicephore Niepcce",
    inventionYear: 1861 };
console.log("Camera Info: In ".concat(camera.inventionYear, ", ").concat(camera.cameraInventor, " invented the first ").concat(camera.name));
//Question no 22
var food = ["Biryani", "Pulao", "Nihari"];
console.log(food[3]); //Intentional error: Arrays are zero-indexed, so index 3 out of bounds.
console.log(food[2]); //Correcting a error by accessing a valid index.
//Question no 23
var phone = "Iphone";
console.log("Is phone == \"Iphone\"? \"".concat(phone == "Iphone", "\"")); //True
console.log("Is phone == \"toyota\"? \"".concat(phone == "toyota", "\"")); //False
//1
var language = "English";
console.log("Is English called a language?: \"".concat(language == "English", "\"")); //true
console.log("Is Lahore called a language?: \"".concat(language == "Lahore", "\"")); //false
//2
var flagOfPakistan = "white and green";
console.log("Is white and green colour called the flag colour of Pakistan?: \"".concat(flagOfPakistan == "white and green", "\"")); //true
console.log("Is red colour called the flag colour of Pakistan?: \"".concat(flagOfPakistan == "red", "\"")); //false
//3
var laptop = "Dell";
console.log("Is Dell a laptop company?: \"".concat(laptop == "Dell", "\"")); //true
console.log("Is Nokia a laptop company?: \"".concat(laptop == "Nokia", "\"")); //false
//4
var country = "Dubai";
console.log("Is Dubai a country?: \"".concat(country == "Dubai", "\"")); //true
console.log("Is Islamabad a country?: \"".concat(country == "Islamabad", "\"")); //false
//5
var car = "Ferrari";
console.log("Is Ferrari a car ?: \"".concat(car == "Ferrari", "\"")); //true
console.log("Is Samsung a car ?: \"".concat(car == "Samsung", "\"")); //false
//Question no 24
console.log("apple" == "apple");
//console.log("cherry" == "banana");
//using lower case function 
console.log("Apple".toLowerCase() == "apple"); //true
//numerical tests
console.log(2 < 4); //true
console.log(5 > 7); //false
//tests using "and" and "or"
var cond1 = "true";
var cond2 = "false";
console.log(cond1 && cond2); //false
console.log(cond1 || cond2); //true
//test whether an item is in a array
var languages = ["English", "Urdu", "Sindhi"];
console.log("Is \"Urdu\" in languages? ".concat(languages.includes("urdu"))); //true
console.log("Is \"Punjabi\" is not in languages? ".concat(!languages.includes("Punjabi"))); //true
//Question no 25
var alien_colour = "green";
if (alien_colour == "green") {
    console.log("player just earned 5 points");
}
alien_colour = "red";
if (alien_colour == "green") {
    console.log("you just earned 5 points!");
    //no output because the condition is false.
}
//Question no 26
var alien_colour2 = "green";
if (alien_colour2 == "green") {
    console.log("you just earned 5 points for shooting the green alien");
}
else {
    console.log("you just earned 10 points");
}
//Question no 27
var alien_colour3 = "green";
if (alien_colour3 == " yellow") {
    console.log("you just earned 5 points for shooting the yellow alien");
}
else if (alien_colour == "red") {
    console.log("you just earned 10 points for shooting the red alien");
}
else if (alien_colour == "green") {
    console.log("you just earned 15 points for shooting the green alien");
}
//Question no 28
var age = 45;
if (age < 2) {
    console.log("the person is a baby");
}
else if (age < 4) {
    console.log("the person is a toddler");
}
else if (age < 13) {
    console.log("the person is a kid");
}
else if (age < 20) {
    console.log("the person is a teenager");
}
else if (age < 65) {
    console.log("the person is a adult");
}
else {
    console.log("the person is an elder");
}
//Question no 29
var favourite_fruits = ["mango", "oranges", "strawberries"];
if (favourite_fruits.includes("mango")) {
    console.log("I really like mango");
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
var usernames = ["admin_muniza", "admin_maheen", "admin_haseeb", "admin_hoorain", "admin_aiman"];
if (usernames.includes("admin")) {
    console.log("Hello admin, would you like to see a status report?");
}
else {
    console.log("Hello, thank you for logging in again.");
}
//Question no 31
var username = [];
if (username.length == 0) {
    console.log("We need to find some users!");
}
else {
}
//Question no 32
var current_users = ["muniza", "maheen", "hiba", "aiman", "hoorain"];
var new_users = ["savera", "ayesha", "misbah", "maheen", "hiba"];
for (var users = 0; users < 0; users++) {
    if (new_users === current_users) {
        console.log("".concat(users, " will need to enter a new username!"));
    }
    else {
        console.log("".concat(users, " is available!"));
    }
}
// for(let users of new_users) {
// if(new_users.forEach(newUsers) => {
// } === current_users) {
//     console.log("hello you are good");
// }else {"you are not"}
// }
// if(current_users.forEach(newUsers => {
//     console.log(hello);
// }) === new_users) {
// console.log(`${newUsers} will need to enter a new username!`);
// }else {
//     console.log(`${newUsers} is available!`);
// }
//Question no 33
// let ordinalNumbers; number[] = [1,2,3,4,5,6,7,8,9];
// if (ordinalNumbers: number[] = 1,2,3) {
// } else {
//     ordinalNumbers.forEach((numbers) => {
// console.log(`${numbers} th`);
//     })
// }
//Question no 34
var pizzaFlavours = ["BBQ chicken pizza", "cheese pizza", "chicken tikka pizza "];
for (var _f = 0, pizzaFlavours_1 = pizzaFlavours; _f < pizzaFlavours_1.length; _f++) {
    var pizza = pizzaFlavours_1[_f];
    console.log(pizza);
}
for (var _g = 0, pizzaFlavours_2 = pizzaFlavours; _g < pizzaFlavours_2.length; _g++) {
    var pizza = pizzaFlavours_2[_g];
    console.log("I like ".concat(pizza));
}
//Qustin no 35
var animals = ["cat", "dog", "rabbit"];
for (var _h = 0, animals_1 = animals; _h < animals_1.length; _h++) {
    var animal = animals_1[_h];
    console.log(animal);
}
animals.forEach(function (animal) {
    console.log("A ".concat(animal, " would make a great pet"));
});
console.log("Any of these animals would make a great pet!");
//Question no 36
function make_shirt(size, message) {
    console.log("making a ".concat(size, " t-shirt with the message \"").concat(message, "\" printed on it."));
}
make_shirt("medium", "Hello World");
//Question no 37
function make_shirt2(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love Typescript"; }
    console.log("making a ".concat(size, " t-shirt with the message \"").concat(message, "\" printed on it."));
}
make_shirt2();
make_shirt2("medium");
make_shirt2("small", "Dive into coding");
//Question no 38
function describe_city(cityName, countryName) {
    if (countryName === void 0) { countryName = "Pakistan"; }
    console.log("".concat(cityName, " is in ").concat(countryName));
}
describe_city("Karachi");
describe_city("Islamabad");
describe_city("Lahore");
//Question no 39
function city_country(cityName, countryName) {
    console.log("\"".concat(cityName, ",").concat(countryName, "\""));
}
city_country("Lahore", "Pakistan");
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("Islamabad", "Pakistan"));
//Question no 40
function make_album(artistName, albumTitle) {
    console.log("It is the artist name ".concat(artistName, " and it is the album name").concat(albumTitle));
}
//Question no 41
var magicians = ["magician no 1", "magician no 2", "magician no 3"];
magicians.forEach(function (show_magicians) {
    console.log(show_magicians);
});
//Question no 42
var make_great = function (magicians) {
    console.log("the great", magicians);
};
magicians.forEach(make_great);
//Question no 43
var magicians2 = ["magician 1", "magician 2", "magician 3"];
function make_great2(magicians2) {
    console.log(magicians2);
}
;
make_great2(magicians2);
var show_magicians = magicians2.forEach(function (val) {
    console.log("".concat(val, " the great"));
});
//Question no 44
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("making a sandwich with: ".concat(items, ". "));
}
make_sandwich("ham", "cheese");
make_sandwich("tomato", "lettuce", "turkey");
make_sandwich("mustard", "mayo", "avacado", "sprouts");
//Question no 45
function make_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    options.forEach(function (key, value) {
        return car[key] = value;
    });
    return car;
}
console.log(make_car("toyota", "corolla", ["colour", "red"], ["year", "2020"]));
console.log(make_car("ford", "fiesta", ["colour", "blue"], ["sunroof", "true"]));
