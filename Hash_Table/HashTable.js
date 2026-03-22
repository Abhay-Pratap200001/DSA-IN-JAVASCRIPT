/*
1. What is hash table
. A hash table is a data structure that stores key-value pairs in an efficient manner
. It uses a hashing function to compute an index into an array, where the desired value can be found
*/

/*
2. We will create our implementaion
. Array size of 50
. We will support following operations
     . Set: Adds a new Key-value pair to the hash table
     . Get: Retrieves the value associated with a given key
. Handle collision of keys
*/


/*
3. Hash table usages
. Used where fast lookups, insert and delete are needed
. Google Search
        . Key: What is a data structure
        . Value: All links
*/

class HashTable {
  constructor(size = 50) {
    this.KeyMap = new Array(50);
  }

  HashFun(key, maxValue) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      let asciiCode = key[i].charCodeAt(0);
      total = total + asciiCode;
    }
    return total % maxValue;
  }

  set(key, value) {
    const hashCode = this.HashFun(key, this.KeyMap.length);
    if (!this.KeyMap[hashCode]) {
      this.KeyMap[hashCode] = [];
    }
    this.KeyMap[hashCode].push([key, value]);
  }

  get(key) {
    const hashCode = this.HashFun(key, this.KeyMap.length);
    const res = this.KeyMap[hashCode];
    for (let pair of res) {
      if (pair[0] === key) {
        return pair[1];
      }
    }
    return undefined
  }
}


const hashTable = new HashTable();

hashTable.set("name", "Abhay Pratap");
console.log("Value of name is:", hashTable.get("name"));


hashTable.set("nam", "verma");
console.log("Value of name is:", hashTable.get("nam"));
