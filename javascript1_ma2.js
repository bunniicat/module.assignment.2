//MODULE ASSIGNMENT 2 - LEVEL 1
//1. Create a function that displays prototypal inheritance

function cat() {
    this.name = "Mocha";
}

cat.prototype.kitten = function () {
    document.getElementById("taskOne").innerHTML = (this.name + " gave birth to a cute little kitten.");
}   

let pet = new cat();


//2. Create an array of numbers from 1 - 10; slice the 5th number in the array

function taskTwo() {
  let firstArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  let secondArray = firstArray.slice(0,4);
  let thirdArray = firstArray.slice(5,10);
  return newArray = secondArray.concat(thirdArray);
}

function arrayFunction() {
    document.getElementById("taskTwo").innerHTML = taskTwo();
}


//3. Delete the last number in the array that you created above.

let newestArray = taskTwo();

function lastArray() {
  return resultArray = newestArray.pop();
}

lastArray();

function newArrayFunction() {
    document.getElementById("taskThree").innerHTML = newestArray;
}


//4. Given the following paragraph, create a JavaScript function that changes all mentions of strawberry to banana and strawberries to bananas: 

function replaceText() {
    var str = document.getElementById("originalText").innerHTML; 
    var txt = str.replace(/Strawberries/g,"Bananas").replace(/strawberries/g, "bananas").replace(/strawberry/g, "banana");
    document.getElementById("originalText").innerHTML = txt;
}


//5. Create an array and a button. The array should contain 4 football clubs names. When the button is clicked, remove all elements out of the array that we just created. There after add in 4 names of cars inside that array. Log it to the console.

let fotballArray = ["Manchester United", "Chelsea", "Real Madrid", "Barcelona"];

function removeFotball() {
    while (fotballArray.length > 0) {
        fotballArray.pop();
    }
}
removeFotball();
console.log(fotballArray);

function addCars() {
    while (fotballArray.length === 0) {
        fotballArray.push("BMW", "Ferrari", "Tesla", "Toyota");
    }
}

addCars();
console.log(fotballArray);


    
//6. Create an array of objects with 3 people inside it. Use the filter function to map by a name.

var people = [
    {firstName: 'Ellen', lastName: 'Smith'},
    {firstName: 'May', lastName: 'Something'},
    {firstName: 'Daisy', lastName: 'Whatever'},
]

var byLastName = people.filter(function(firstName){
    return (firstName.lastName === "Something");
})

console.log(byLastName);


//7. Create a simple function that logs the date.

function todayDate() {
    let currentDate = new Date();
    console.log(currentDate);
}

todayDate();

