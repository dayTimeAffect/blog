/*
* https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/
* */
var twoSum = function(numbers, target) {
    let left = 0, right = numbers.length - 1
    while (left < right){
        if (numbers[left] + numbers[right] > target) {
            right --
        }else if (numbers[left] + numbers[right] < target) {
            left ++
        }else{
            return [left + 1, right + 1]
        }
    } 
};