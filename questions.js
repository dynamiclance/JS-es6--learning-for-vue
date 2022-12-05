// Q1: Write A js variable following camelCase Syntax

const trainingForAll = "Larvel to vue";

// Q2: Remove multiple element from an array

const groupA = ["Japan", "Brazil", "America", "Mexico", "Argentina"];
const removedIndex = [2, 4];

const qualifiedTeam = groupA.filter((team, i) => !removedIndex.includes(i));
console.log(qualifiedTeam);


// Q3: // Write a function which will calculate product vat
function vatCal(productPrice, vat) {

    return (productPrice * vat ) / 100;
}

console.log(vatCal(1200, 10));


// Q4: Find truthy or falsy value

const value = "";

if(value) {
    console.log("Yah, it's truthy value");
} else {
    console.log("it's falsy value");
}

// Q5: print an array element using for loop

const students = ["Epu", "Lipa", "Shipu", "Izza"];

for(let i = 0; i < students.length; i++) {
    console.log(students[i])
}


