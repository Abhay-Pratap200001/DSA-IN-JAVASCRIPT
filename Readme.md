# 🚀 Data Structures and Algorithms in JavaScript

This repository contains my journey of learning **Data Structures and Algorithms (DSA)** using **JavaScript**.  
I am solving problems regularly to improve my **problem-solving skills, logical thinking, and coding ability**.

Problems are mainly solved on **LeetCode** and organized topic-wise.

---

## 🎯 Goals

- Strengthen problem-solving skills
- Master core Data Structures
- Improve algorithmic thinking
- Prepare for coding interviews
- Solve problems consistently

---

## 🛠 Language Used

- JavaScript (ES6+)

---

## 📚 Topics Covered

- Arrays
- Strings
- Hash Maps
- Recursion
- Stack
- Queue
- Linked List
- Trees
- Binary Search
- Sliding Window
- Two Pointers
- Dynamic Programming
- Graphs

---

## 📂 Repository Structure

```
dsa-javascript
│
├── Arrays
│   ├── two-sum.js
│   ├── contains-duplicate.js
│
├── Strings
│   ├── valid-palindrome.js
│
├── Stack
│   ├── valid-parentheses.js
│
└── README.md
```

Each file includes:
- Problem name
- Problem link
- Approach
- Time & Space Complexity
- JavaScript solution

---

## ✍ Example Solution Format

```javascript
// Problem: Two Sum
// Platform: LeetCode
// Approach: Hash Map
// Time Complexity: O(n)
// Space Complexity: O(n)

var twoSum = function(nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (map.has(complement)) {
            return [map.get(complement), i];
        }

        map.set(nums[i], i);
    }
};
```

---

## 📈 Progress Tracker

| Topic | Problems Solved |
|------|----------------|
| Arrays | 0 |
| Strings | 0 |
| Stack | 0 |
| Queue | 0 |
| Linked List | 0 |
| Trees | 0 |
| Graphs | 0 |

*(Updating as I progress)*

---

## 🔥 Platforms

- LeetCode
- GitHub

---

## 📌 Notes

Consistency is the key to mastering DSA.  
This repository will be updated regularly as I solve more problems.

---

## 🤝 Connect With Me

If you're also learning DSA, feel free to connect and learn together!
