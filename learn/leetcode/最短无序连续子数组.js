/**
 * @Author: dayTimeAffect
 * @Date: 2021/8/3
 */
/*
* https://leetcode-cn.com/problems/shortest-unsorted-continuous-subarray/
* */
/*var findUnsortedSubarray = function(nums) {
    //排序对比
    let sortNums = [...nums].sort((a, b) => a - b)
    let left = 0, right = nums.length - 1
    while (left < right){
        if (nums[left] !== sortNums[left] && nums[right] !== sortNums[right]){
            break;
        }
        if (nums[left] === sortNums[left]){
            left ++
        }
        if (nums[right] === sortNums[right]){
            right --
        }
    }
    return right === left ? 0 : right - left + 1
};*/
var findUnsortedSubarray = function(nums) {
    let n = nums.length - 1
    let left, right;
    let min = Infinity, max = -Infinity
    for (let i = 0; i <= n; i ++){
        if (max > nums[i]){
            right = i
        }else{
            max = nums[i]
        }
        if (min < nums[n - i]){
            left = n - i
        }else{
            min = nums[n - i]
        }
    }
    return left === right ? 0 : right - left + 1
};
// console.log(findUnsortedSubarray([1]));
// console.log(findUnsortedSubarray([1, 2]));
// console.log(findUnsortedSubarray([2, 1]));
// console.log(findUnsortedSubarray([1,2,3,4]));
// console.log(findUnsortedSubarray([1,2,3,3,3]));
// console.log(findUnsortedSubarray([1,3,2,2,2]));
// console.log(findUnsortedSubarray([1,3,5,4,2]));
// console.log(findUnsortedSubarray([2,6,4,8,10,9,15]));
console.log(findUnsortedSubarray([5,4,3,2,1]));