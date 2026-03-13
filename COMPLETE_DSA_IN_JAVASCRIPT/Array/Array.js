/*
 Oues 1. What is array
 Ans: Array is a collection of items
 Array can hold multiple values
 Most used data structure
 In build support in almost all programming languages
*/

// This how we use array to store string
let myNameArray = ["Abhay", "Pratap", "Ram", "Geeta", "Naveen"];
console.log(myNameArray);

//This is how we use array to store number
let MathsScore = [20, 200, 11, 2003];
console.log(MathsScore);

//This is how we use array to store objects
let students = [
  { name: "Abhay", city: "Lucknow", country: "India" },
  { name: "Ratakar", city: "Dheradon", country: "India" },
];
console.log(students);



/* <<----------------------------------------------------------------------------------------------------->> */

//Whey of creating using arrayConstructor
let  arrayConstructore = new Array()
arrayConstructore[0] = 20
arrayConstructore[1] = 11
console.log(arrayConstructore);


//Create array by using array fill
let  arrayConstructore1 = new Array("Abhay", "Ratnakar")
console.log(arrayConstructore1);


// This is the use of filled aray we are saying create array and take 7 element spaces on that array and fill it with 20
let filledArray = new Array(7).fill(20)
console.log(filledArray);


//Array.of also print same result like normal array
let ofArray = Array.of("Abhay", "Ratnakar", "Naveen")
console.log(ofArray);


//User array.from when we need to itrate element like string we can use array.from
let fromArra = Array.from("Abhay")
console.log(fromArra);


//we can create empty space array intenstionally and add when we need
let spaceArray = [20, , 11]
spaceArray[1] = 2
console.log(spaceArray);


//whey of using spread operator in array
let spreadArray = ["Billinor", ...arrayConstructore1]
console.log(spreadArray);



/* <<----------------------------------------------------------------------------------------------------->> */

/* 
1.Array Types
. Array in j.s can keep diffrent data types in one array 
. Array in j.s are dynamic - example
*/

//This what dynamic array is, it can store multiple datatype at single time and multiple
let dynamicArray = [12, "Abhay", { name: "Abhay" }];
console.log(dynamicArray);

/* 
2.How to access array elements
. Using of indexes in array start from zero
. UsingBracket Notation []
. Using Destructuring Assignment
*/

//This how we access array elements
let dynamicArray1 = [12, "Abhay", { name: "Abhay" }];
console.log(dynamicArray1[0]);


//This is how we destructire the array and can access it
let fruits = ["Mango", "Watermelon", "Papaya", "Prange", "Apple", "Banana"];
let allfruts = ([f1, f2, f3, f4, f5, f6] = fruits);
console.log(allfruts);



/* <<----------------------------------------------------------------------------------------------------->> */

/* 
3.Iterating to array
. Iterating meaning going over elements of an array one by one
. For loop
. for of loop
. for Each
*/


//using of itrating array in loop
let fruits1 = ["Mango", "Watermelon", "Papaya", "Prange", "Apple", "Banana"];
for (let i = 0; i < fruits1.length; i++) {
  console.log(fruits1[i]);
}


//using of itrating array in for of loop
let fruits2 = ["Mango", "Watermelon", "Papaya", "Prange", "Apple", "Banana"];
for (const element of fruits2) {
    console.log(element);
}


let fruits3 = ["Mango", "Watermelon", "Papaya", "Prange", "Apple", "Banana"];
fruits3.forEach((item) => ( console.log(item)))



/* <<----------------------------------------------------------------------------------------------------->> */

/* 
4. Comman Array methods
. Push: Add one at the last element
. pop: remove from last element
. Shift: Remove the first element
. Unshift: Add one at the start of an element
. Map: Apply a funtion to all elements
*/


// Push: Add one at the last element
let fruits4 = ["Mango", "Watermelon", "Papaya", "Prange", "Apple", "Banana"];
fruits4.push("litchi")
console.log(fruits4);


// pop: remove from last element
let fruits5 = ["Mango", "Watermelon", "Papaya", "Prange", "Apple", "Banana"];
fruits5.pop()
console.log(fruits5);


// . Shift: Remove the first element
let fruits6 = ["Mango", "Watermelon", "Papaya", "Prange", "Apple", "Banana"];
fruits6.shift()
console.log(fruits6);


// . Unshift: Add one at the start of an element
let fruits7 = ["Mango", "Watermelon", "Papaya", "Prange", "Apple", "Banana"];
fruits7.unshift("DragonFruit")
console.log(fruits7);

let fruits8 = ["Mango", "Watermelon", "Papaya", "Prange", "Apple", "Banana"];
fruits8.map((items)=>(
    console.log(`map ${items.toUpperCase()}`)    
))



// <<----------------------------------------------------------------------------------------------------->>

/* 
5. Multidimension array
. Array inside array
. Instead of array of string or number we have array of array
. Two Dimenstion array
. Three Dimenstion array
*/


// . Two Dimenstion array
let TwoDimesionArray = [[1,2,3,4], [4,5,6,7,7]]
console.log(TwoDimesionArray);


// . Three Dimenstion array
let ThreeDimesionArray = [[1,2,3,4], [4,5,6,7,7],  [4,5,6,7,7]]
console.log(ThreeDimesionArray[0][1]);