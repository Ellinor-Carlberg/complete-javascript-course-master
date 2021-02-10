'use strict';

/* LECTURE: Functions
1. Write a function called 'describeCountry' which takes three parameters: 'country', 'population' and 'capitalCity'. Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'
2. Call this function 3times, with input data for 3 different countries. Store the returned values in 3 different variables, and log them to the console */

function describeCountry(country, population, capitalCity) {
const infoText = `${country} has a population of ${population} million people and the capital city is ${capitalCity}.`;
return infoText;
}

const infoSweden = describeCountry('Sweden', 10.2, 'Stockholm')
const infoFinland = describeCountry('Finland', 5.5 , 'Helsinki')
const infoNorway = describeCountry('Norway', 5.3 , 'Oslo')
const infoDenmark = describeCountry('Denmark', 5.8 , 'Copenhagen')
const infoIceland = describeCountry('Iceland', 0.3 , 'Reykjavik')

console.log(infoSweden)
console.log(infoFinland)
console.log(infoNorway)
console.log(infoDenmark)
console.log(infoIceland)

/* 
LECTURE: Function Declarations vs. Expressions
1. The world population is 7900 million people. Create a function declaration called 'percentageOfWorld1' which receives a 'population' value, and returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of the world population
2. To calculate the percentage, divide the given 'population' value by 7900 and then multiply by 100
3. Call 'percentageOfWorld1' for 3 populations of countries of your choice, store the results into variables, and log them to the console
4. Create a function expression which does the exact same thing, called 'percentageOfWorld2', and also call it with 3 country populations (can be the same populations)
 */

function percentageOfWorld1(population) {
return (population / 7900) * 100;
} 

const percentageChina = percentageOfWorld1(1441)
const percentageSweden = percentageOfWorld1(10.2)
const percentageIceland = percentageOfWorld1(0.3)
console.log(percentageChina)
console.log(percentageSweden)
console.log(percentageIceland)

const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
}

const percentageChina2 = percentageOfWorld2(1441)
const percentageSweden2 = percentageOfWorld2(10.2)
const percentageIceland2 = percentageOfWorld2(0.3)
console.log(percentageChina2)
console.log(percentageSweden2)
console.log(percentageIceland2)