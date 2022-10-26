
const greeting = (name) =>  {

    // Creates an alert(pop-up box) which says hello and appends the value of the variable `name`
    alert(`Hello ${name}`);
  }
  
  const processUserInput = (callback) =>  {
  
    // A simple user input box appears on the browser that take a value and assigns it to `name`
    let name = prompt('Please enter your name.');
  
    // Then pass the variable `name` to the callback function as parameter
    callback(name);
  }
  //Call the function `processUserInput()` and then pass `greeting` as a parameter.
  //processUserInput(greeting);
  
  let setCookie = (nameOfCookie, cookievalue, exdays) => {
    let date = new Date();
    date.setTime(date.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ date.toUTCString();
    document.cookie = nameOfCookie + "=" +"name:" + cookievalue + ";" + expires + ";path=/";
  }
  
  //We call it as so
  setCookie("myYummyCookie","Donald Tramp", "2");


  function doSomething(){
    console.log(bar); // undefined
    console.log(foo); // ReferenceError
    var bar = 1; 
    let foo = 2;
}
//doSomething()

function test(){
    var foo = 33; 
    if(foo){
        let foo = (foo + 60); // ReferenceError
    }
}
//test(); 

function example(){
    superPower()// => Zoomin' thru the sky.

    function superPower(){
        console.log("Zoomin' thru the sky.");
    }
}
//example()

function namedFunction(){
    console.log(named); // undefined

    named(); // TypeError named is not a function 

    superPower(); // ReferenceError superPower is not defined

    var named = function superPower(){
        console.log("Zoomin' through the sky");
    };
}
//namedFunction()

// function Person(first, middle, last, age) {
//     this.name = {
//       first: first,
//       middle: middle,
//       last: last,
//     };
//     this.age = age;
//     Person.nationality = "English";
// }
// let person1 = new Person("Chris", "P.", "Bacon", 21);

// console.log(person1.nationality);

function Person(first, middle, last, age) {
    this.name = {
      first: first,
      middle: middle,
      last: last,
    };
    this.age = age;
}
Person.prototype.nationality = "English";

let human = new Person("Chris", "P.", "Bacon", 22);
console.log(human.nationality); // English

function Student(firstName, lastName, DOB) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.DOB = DOB;
  }
  Student.prototype.details = function () {
    return (
      "The student's name is " +
      this.firstName +
      " " +
      this.lastName +
      " their DOB is " +
      this.DOB
    );
  };
  
  //let pupil1 = new Student("Donald", "Duck", "19/05/1976");
  //console.log(pupil1.details()); // The student's name is Donald Duck their DOB is 19/05/1976

// const params = new URLSearchParams(window.location.search)
// console.log(params)
// for (const param of params) {
//   console.log(param)
// }


// const req = new XMLHttpRequest();
// req.open("GET", "https://reqres.in/api/users/2");
// req.onload = () => {
//   if (req.status === 200 && req.readyState == 4) {
//     console.log("Server Responded with: " + req.responseText);
//   } else {
//     console.log("Oops...");
//   }
// };
// //req.send();

// fetch('https://reqres.in/api/users?page=2')
//      .then((response) => {
//          if (response.status !== 200) {
//              console.log(`Looks like there was a problem.Status Code: ${ response.status }`);
//              return;
//          }
//      response.json()
//      .then(data => console.log(data));         
//      })
//      .catch(err => console.error(`Fetch Error :-S ${err}`));

let grades = [
    {name: 'John', grade: 8, sex: 'M'},
    {name: 'Sarah', grade: 12, sex: 'F'},
    {name: 'Bob', grade: 16, sex: 'M'},
    {name: 'Johnny', grade: 2, sex: 'M'},
    {name: 'Cyrus', grade: 4, sex: 'M'},
    {name: 'Paula', grade: 18, sex: 'F'},
    {name: 'Jeff', grade: 5, sex: 'M'},
    {name: 'Jennifer', grade: 13, sex: 'F'},
    {name: 'Courtney', grade: 15, sex: 'F'},
    {name: 'Jane', grade: 9, sex: 'F'}
]

let isBoy = student => student.sex === "M";
let isGirl = student => student.sex === "F";

let getBoys = grades => (grades.filter(isBoy));
let getGirls = grades => (grades.filter(isGirl));

let average = grades => (grades.reduce((acc,curr) => (acc + curr.grade), 0) / grades.length);

let maxGrade = grades => (Math.max(...grades.map(student => student.grade)));
let minGrade = grades => (Math.min(...grades.map(student => student.grade)));

let classRoomAverage = average(grades);
let boysAverage = average(getBoys(grades));
let girlsAverage = average(getGirls(grades));

console.log(girlsAverage)

// Save data to sessionStorage
sessionStorage.setItem("key","value");

//Get saved data from sessionStorage
let data = sessionStorage.getItem("key");
console.log(data)

// Remove saved data from sessionStorage
sessionStorage.removeItem("key");

//Remove all saved data from sessionStorage
sessionStorage.clear();

localStorage.setItem("myCat", "Tom");
//Print to the console
console.log(localStorage.getItem("myCat"));
localStorage.removeItem("myCat");


let myWindow = window.open("", "", "width=300,height=100");
myWindow.document.write("<p> Isn't this cool? </p>");
setTimeout(function () {
  myWindow.close();
}, 3000);