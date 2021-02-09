//ep 9
let js = "amazing";
/* if (js === "amazing") alert("JS is fun"); */
console.log(40 + 8 + 23 - 10);

//ep10
let firstName = "Jonas";
console.log(firstName);
firstName = "Bob";
console.log(firstName);

let PI = 3.1415;
let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";
//better than
let job1 = "Programmer";
let job2 = "Teacher";

//Assignment 1 + 3
const country = "Sweden";
const continent = "Europe";
let population = 10.23;
console.log(country, continent, population);

//ep 12 -datatypes
let number = 23;
let string = "hello";
let booleanIsgreat = true;
let undefinedValue;
console.log(typeof booleanIsgreat, typeof true);

//Assignment 2 + 3
const isIsland = false;
let language;
console.log( typeof country, typeof continent, typeof population, typeof isIsland, typeof language);

//Assignment 3
language = 'swedish';

//ep 14  -operators
const now = 2021
const ageElli = now - 1988;
const ageMiri = now -2020;
console.log(ageElli);

let x = 10 + 5
console.log(x)
x += 10 // x = x + 10  = 25
x *= 4 // x = x * 4 = 100
console.log(x)

//Assignment 5
const population2021DividedInTwo = population / 2
console.log(population2021DividedInTwo)
console.log(population + 1)
let populationFinland = 6;
console.log( population > populationFinland);
let populationAverage = 33;
console.log( population > populationAverage);
const description = country + ' is in ' + continent + ' and its ' + population + ' million people speak ' + language;
console.log(description);
const descriptionTwo = `${country} is in ${continent} and its ${population} million people speak ${language}`;
console.log(descriptionTwo);



const isFullAge = ageElli >= 18;
console.log(isFullAge)

//same resault
console.log( ageElli > ageMiri)
console.log(now - 1988 > now - 2020)

const averageAge = (ageElli + ageMiri) / 2;
console.log(averageAge)


/* Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
GOOD LUCK 😀 */

let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heighJohn = 1.95;

/* massMark = 95;
heightMark = 1.88;
massJohn = 85;
heighJohn = 1.76;
 */

const BMIMark = massMark / (heightMark **2);
const BMIJohn = massJohn / (heighJohn **2);
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);


if(population > populationAverage) {
    console.log(`${country}s population is above average'`)
   
} else {
    const belowAvarage = populationAverage - population
    console.log(`${country}s population is ${belowAvarage} million below average'`) 
}

/* 
Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a templateliteral to include the BMI values in the outputs. Example:"Mark's BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 😉 GOOD LUCK 😀 */


if (markHigherBMI) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})`)
} else {
    console.log(`Mark's BMI (${BMIMark}) is lower than John's (${BMIJohn})`)
}

/* 
LECTURE: Type Conversion and Coercion
1. Predict the result of these 5 operations without executing them:
'9' - '5'; number
'19' - '13' + '17';  number // right answer string!
'19' - '13' + 17; number
'123' < 57; boolean
5 + 6 + '4' + 9 - 4 - 2; number
2. Execute the operations to check if you were right */

console.log('9' - '5', '19' - '13' + '17' , '19' - '13' + 17 , '123' < 57 , 5 + 6 + '4' + 9 - 4 - 2 )
