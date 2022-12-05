
// Class #01

console.log("Laravel to Vue Learning Journey");

const num = 20;

console.log(num)


//class #02

// Data type : There has mainly two type of data in js
// 1. Primitive Data type
// 2. NoN Primitive Data type


// ****** Primitive Data has 7 type ********
// 1. String | const name = "Dynamic Lance"
// 2. Number | const number = 100.0
// 3. Boolean | const isLogin = true
// 4. undefined | const car;
// 5. Null
// 6. BigInt
// 7. Symbol


// ****** NoN Primitive Data has 3 type ********
// 1. Array | const numbers = [1, 3, 4, 6]
// 2. Object | const {name: "Dynamic Lance", }
// 3. Function | const num = () => 100 + 2;


// Things to keep in mind
// - All primitive are immutable
// - Primitive data has no methods and object
// - primitive data are also knows as built in data type
// - NoN Primitive data are also knowns as derived data type or reference data type

// class #3 | Operator
// There are different types of js operators

// - Arithmetic Operator | [+, -, *, /, %, ** , ++, --]
// - Assignment operator | =
// - Logical Operator | &&, || , !


// 
// ******* Arithmetic Operator  **********

// NaN ** 2 gives NaN
// -(4 ** 2) gives -16, this is a correct expression

let x = 3
let y = x++;

console.log(x, y) // 4, 3

let a = 5;
let b = --a;
console.log(b, a) // 4, 4



// ******* Logical Operator **********

// && (Logical AND): 
// It checks whether two operands are non-zero (0, false, undefined, null or “” are considered as zero), if yes then return the last operand when evaluating from left to right. 

// Example : 
// Y = 5 and X = 6
// Y && X is 6.


// || (Logical OR) : 
// It checks whether two operands are non-zero (0, false, undefined, null, or “” is considered as zero), if yes then return the first operand when evaluating from left to right.

// Example :
// Y = 5 and X = 0
// Y || X is 5.

// ! (Logical NOT): 
// It reverses the boolean result of the operand (or condition). 
// Example : 
// Y = 5 and X = 0
// !(Y || X) is false.


// class #4  | CONDITIONAL STATEMENT

// nested if-else example: #1

let i = 21;

if(i > 20) {
    if( i > 15)
        console.log("i is greater than 15");
    if(i < 10)
        console.log("i is greater than 10 too")
    else
        console.log("i is less than 10")
} else {
    console.log("i is greater than our exception")
}


// Nested if-else example #2

// let sum = 35;
// if (sum % 10 == 0){
//     console.log("a");
// } else if (sum % 2 == 1){
//     if (sum % 5 == 0 && sum % 2 == 0){
//         console.log("b");
//     } else if (sum % 5 == 0){
//         console.log("c") // correct answer
//     } else {
//         console.log("d")
//     }
// } else {
//     console.log("e")
// }

let sum = 36;
if(sum % 10 == 0) {
    console.log("a")
} else if(sum % 2 == 1) {
    if(sum % 5 == 0 && sum % 2 ==0) {
        console.log("b")
    } else if(sum % 5 == 0) {
        console.log("c")
    } else {
        console.log("d")
    }
} else {
    console.log("e")
}




// Class #5 | switch statement

let day = "friday"

switch(day) {

    case "saturday":
        console.log("this is working day sat")
        break;
    case "sunday":
        console.log("this is prime sunday")
        break;
    case "friday":
        console.log("Yahoo, it's holiday")
        break;

    default:
        console.log("this is default day")
}

// class #6 | LOOP | for, while, do while

// Print 1-100 (Even Value | Odd Value)

// let add = 0
// for(let i = 0; i <= 100; i+=2) {
//     console.log(i)
//     add = add + i;
// }

// console.log(add)

// let num = 1; let addition = 0;

// while(num<100) {
//     console.log(num)
//     num+=2;
//     addition = addition + num;
   
// }

// console.log(addition)

// class #7: Array 

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const lastFruits = fruits.pop(); // Pop Method Return the last element of any array
// console.log(fruits)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const fruits2 = fruits.push("Kiwi");

// console.log(fruits2); // Note: Push Method add element at the end of an array and  return new array length
// console.log(fruits)


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const fruits2 = fruits.shift();

// console.log(fruits2); // Note: shift() Method remove the first element of an array &  returns the value that was "shifted out"
// console.log(fruits)


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const fruits2 = fruits.unshift("Pineapple");

// console.log(fruits2); // Note: unshift() add element at the beggining of an array and return the length of an array

    /* 
        The splice() method adds new items to an array.

        The slice() method slices out a piece of an array.


    */

// NOTE: The splice() method returns an array with the deleted items:

// const fruits = ["Banana", "Orange", "Apple", "Mango", "pineapple"];


// const newArr = fruits.splice(3, 2, "kawi")

// console.log(newArr) // deleted items here : Mango, pineapple
// console.log(fruits) // changes the main array 


// Slice method cut piece of array element and don't remove any element from source array

// const fruits = ["Orange", "Banaa", " Mango", "Pineapple", "sgs", "ddfd"]
// const fruits2 = fruits.slice(2,5) // The slice() method creates a new array.
// console.log(fruits2)
// console.log(fruits)


// find the highest value form an array without using built in function

const points = [40, 100, 1, 5, 25, 10];

points.sort(function(a, b) {
    return b - a;
})

console.log(points)
console.log(points[0])

// Class #8 | Object 

const mouse = {
    name : "Devel Rat",
    age : 21,
};

const bird = {
    name : "Hyper queen",
    age: 23,
    mouse,
};

// console.log(mouse['name'])
// console.log(bird['mouse']['name'])
// console.log(mouse.name);
// console.log(bird.mouse.name);

// console.log(bird["mouse"]["age"]);
// console.log(bird["mouse"].name);


// Class #9 |  Function
 
// var char = 'John Doe'
// function myName(){
//     var char = 'Enayet Chy'
//     console.log(char)
// }

// myName()
// console.log(char)


// function sayHi(){
//     console.log(name) // Hoisting
//     console.log(age) 

//     var name = 'Js'
//     var age = 21
// }

// sayHi()


// var groupE = [
//     'Japan',
//     'germany',
//     'Span',
//     'Costaricka'
//    ]

    // groupE.splice(1,1)
    // groupE.splice(2)
    // console.log(groupE)










