/**
 * @Author: dayTimeAffect
 * @Date: 2024/9/12
 */
/*
* https://leetcode.cn/problems/find-the-maximum-number-of-marked-indices/description/?envType=daily-question&envId=2024-09-12
* */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxNumOfMarkedIndices = function(nums) {
    nums = nums.sort((a, b) => a - b)
    let mid = Math.floor(nums.length / 2)
    let count = 0, j = mid
    for (let i = 0; i < mid; i ++){
        while (j < nums.length && nums[i] * 2 > nums[j]){
            j ++
        }
        if (j < nums.length){
            count += 2
            j ++
        }
    }
    return count
};
// console.log(maxNumOfMarkedIndices([3,5,2,4]));
// console.log(maxNumOfMarkedIndices([9,2,5,4]));
// console.log(maxNumOfMarkedIndices([42,83,48,10,24,55,9,100,10,17,17,99,51,32,16,98,99,31,28,68,71,14,64,29,15,40]));
console.log(maxNumOfMarkedIndices([1,78,27,48,14,86,79,68,77,20,57,21,18,67,5,51,70,85,47,56,22,79,41,8,39,81,59,74,14,45,49,15,10,28,16,77,22,65,8,36,79,94,44,80,72,8,96,78,39,92,69,55,9,44,26,76,40,77,16,69,40,64,12,48,66,7,59,10]));