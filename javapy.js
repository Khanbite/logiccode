// 1a: Odd or Even

function isEvenOrOdd(x) {
    return(x % 2 ==0);
}

let x = 22;
isEvenOrOdd(x) ? console.log("Even") : console.log("Odd");

// 1b: Eligible to vote

function checkVotingEligibility(age) {
    if (age >= 18) {
        console.log("You are eligible to vote.");
    } else {
        console.log("You are not eligible to vote.");
    }
}

let age = prompt("Please enter your age: ");
age = parseInt(age);

checkVotingEligibility(age);

// 1c: Check pos neg zerofunction checkNumberNegativeOddEven(num) {
function checkNumberNegativeOddEven(num) {
    if (num > 0) {
      console.log("The number is positive.");
    } else if (num < 0) {
      console.log("The number is negative.");
    } else {
      console.log("The number is zero.");
    }
}

 
  let userinput = prompt("Enter a number: ");
  userinput = parseFloat(userinput);
  checkNumberNegativeOddEven(userinput);


// 2a: Print 1-10 for loop

for (let x = 1; x <= 10; x++) {
    console.log(x);
  }

// 2b: Print 1-5 while loop
i = 1
while (i < 6 && i>0){
    console.log(i)
    i += 1
}

// 2c: Factorial
let facnum = 5
let fact = 1
for(let i=1;i<=facnum;i++){
    fact = fact *i
}
console.log(fact)

// 3a: Greeting user
let username = prompt("Give your name: ")
function Greetings(name){
    console.log('Hello, ${name}')
}

// 3b: Even or odd, function
function EvenOdd(){
    let num = 26
    if (num%2 === 0) {
        console.log("Even")
    }
    else{
         console.log("Odd")
    }
}
// 3c: Number of vowels

function getCount(str) {
    let vowelCount = 0
    const vowels = ['a', 'e', 'i', 'o', 'u']
    for (let char of str) {
        if (vowels.includes(char)) {
            vowelCount ++
        }
    }
    console.log(vowelCount)
}

getCount("abracadabra")

// 4a: List of fruits

let fruit = ['grapefruit', 'kiwi', 'grape'];
for (let i = 0; i < fruit.length; i++) {
    console.log(fruit[i]);
}
// 4b: Student name and grade

let studentGrades = {
    "Sham": 100,
    "Alex": 100,
    "Khani": 100
};

for (let student in studentGrades) {
    console.log(student + ": " + studentGrades[student])
}
// 4c: Highest number in array

function highestNum(n) {
    let high = n[0];
    for (let i = 1; i < n.length; i ++) {
        if (n[i] > high) {
            high = n[i];
        }
    }
    return high;
}

let numarray = [1, 5, 17, 200, 2, 9, 37, 91];
console.log(highestNum(numarray));