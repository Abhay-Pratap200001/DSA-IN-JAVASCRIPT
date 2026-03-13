// Ques1. Given a sorted array of distinct and a target value, return the index if the target is found. if not return the index where it would be if it where inserted in order.

function searchInsert(nums, target) {
    let i = 0
    for (let i = 0; i < nums.length; i ++) {
        if (nums[i] === target) {
            return i
        }else if(nums[i] > target){
            return i
        }
    }
    return i
}



console.log(searchInsert([1,3,5,6] , 2))