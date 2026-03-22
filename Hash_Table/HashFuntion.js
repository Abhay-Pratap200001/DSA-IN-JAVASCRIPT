/*
1. Hash Function Attributes
. Deterministic: The same input always produces the same output. 
. Fast: It should complete the hash value quickly. 
. Uniform Distribution: It aims to distributie inputs evenly across possible output to minimize collisions
. Collisions: As less collision as possible
*/


function HashFun(key, maxValue) {
    let total = 0
    for (let i = 0; i < key.length; i++) {
        let asciiCode = key[i].charCodeAt(0);
        total = total + asciiCode        
    }

    return total % maxValue
}

console.log("The max value of Abhay", HashFun("Abhay", 200));
