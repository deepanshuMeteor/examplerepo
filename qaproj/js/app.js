// console.log("Hello World");

// let str1 = "Welcome to JavaScript";

// console.log(str1);

// console.info(str1);

// console.warn(str1);

// console.error(str1);

let car = "Audi A5 ";
let myObj = { str: "Just keep logging you are nearly there ", id:48576 }
console.info("My first car was a ", car, ". The object is: ", myObj);

let myTxt = "This could be useful!";

console.log("this is a %c a message with some CSS."+myTxt,"color: yellow; font-style: italic; background-color: blue;padding: 2px");
let str1 = "5 + 3 = ";
let value = 5 + 3;
let str2 = str1 + value
console.log(str2);

// const person = {
//     firstName:"John",
//     lastName: "Doe",
//     fullName: function () {
//       return this.firstName + " " + this.lastName;
//     }
//   }
  
//   // This will return "John Doe":
//   console.log(person.fullName())
// person.fullName();

function sayHello() {
    return "Someone says hello"
    
  }
let testVar = sayHello()
console.log(typeof(testVar))

let puppies = 0;
let notEnoughPups = true;

while (notEnoughPups) {
  console.log("Another pup"+puppies);
  puppies++;

  if (puppies > 5) {
    notEnoughPups = false;
  }
}
console.log("Oh so many puppies!");

let num = 11;
switch (num) {
  case 4:
    console.log(`Value is 4`);
    break;
  case 5:
    console.log(`Value is 5`);
    break;
  case 6:
    console.log(`Well...`);
  case 7:
  case 8:
  case 9:
  case 10:
    console.log(`Value is greater than 5`);
    break;
  default:
    console.log(`Sorry can't find the range you're looking for...`);
}


let now = 18;
let greeting = "Good";
if (now > 17) {
  greeting += " evening.";
} else {
  greeting += " day.";
}
console.log(greeting)