let vale="jojo";
function sayHello1() {
    console.log(vale)
    vale = "hola amigos";
    
    return "Someone says hello"
    
}
sayHello1()
console.log(vale)


let x1  = (x1, y1) => x1 + y1;

console.log(x1(1,2));
let x = function(x,y){
    return x + y;
}

console.log(x(1,2));

class Duck {
    constructor(nametag) {
      this.name = nametag;
    }
  
    speak() {
      return "Quack!";
    }
  
    getName(){
      return this.name;   
    }
  }
  
  myDuck = new Duck("Charlie");
  
  console.log( myDuck.speak() + " exclaimed '" + myDuck.getName() + "'");


  function sampleDefault(x, y, z = 5){
    return x + y + z;
}

// The value returned here would be 8 - this is because we have omitted the z parameter but our default value is used as a substitute. 
console.log( sampleDefault(1,2) );


let numberArray = [3, 24, 51, 41];
let value = numberArray.findIndex( greaterThan );

function greaterThan(value){
// let's use 5 as an example
return value > 5;
}

// The index of 24 is equal to "1"
console.log(value);


class Pet {
    constructor(name) {
      this._name = name;
      this._eaten = false;
    }
    hungry() {
      if (!this._eaten) {
        console.log(`${this._name} is hungry`);
      } else {
        console.log(`${this._name} has eaten!`);
      }
    }
    eating() {
      console.log(`${this._name} is eating!`);
      this._eaten = true;
    }
  
    speak() {
      console.log(`${this._name} says hello`);
    }
  }
  
  let pup = new Pet("Pup-eroni");
  pup.hungry(); // Pup-eroni is hungry
  pup.eating(); // Pup-eroni is eating
  pup.speak(); // Pup-eroni says hello
  pup.hungry(); // Pup-eroni has eaten!


  class Dog extends Pet {
    constructor(name, tricks) {
      super(name); // Calls the super constructor and assigns the attribute.
      this._tricks = tricks;
    }
    play() {
      console.log(`${this._name} wants to show you his tricks!`);
    }
  
    tricks() {
      console.log(`${this._name} can do a ${this._tricks}`);
    }
    speak() {
      super.speak();
      console.log(`WOOOOOOOOOF`); // Overrides parent function call();
    }
  }
  
  let doggy = new Dog("Bark Wahlberg", "Backflip");
  doggy.hungry();
  doggy.speak();

  let newProm = new Promise((resolve,reject)=>{
        let a = 1+0;
        if (a==2){
            //we say what happens in the success outcome
            resolve("Success");
        }else{
            //we say what happens in the reject outcome
            reject("Failed");
        }
    })

    //we then pass the value from resolve or reject and we set it to message.
    //.then() is executed if Fulfilled/successful.
    newProm.then((message)=>{
        console.log(`This is in the then block and the status is: ${message}`);
        //.catch() is executed if rejected/failed.
    }).catch((message)=>{
        console.log(`This is in the catch block and the status is: ${message}`);
    //.then can be chained and will execute regardless of the outcome.
    }).then(()=>{
        console.log("I will take place regardless of what happened before.");
    })