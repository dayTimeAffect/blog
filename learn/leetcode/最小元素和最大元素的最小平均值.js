/**
 * @Author: dayTimeAffect
 * @Date: 2024/10/16
 */
/*
* https://leetcode.cn/problems/minimum-average-of-smallest-and-largest-elements/description/?envType=daily-question&envId=2024-10-16
* */
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function(nums) {
    let preFlag = Infinity
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length / 2; i ++){
        let tem = (nums[i] + nums[nums.length - i - 1]) / 2
        if (tem < preFlag){
            preFlag = tem
        }
    }
    return preFlag
};
// console.log(minimumAverage([7,8,3,4,15,13,4,1]))
console.log(minimumAverage([1,9,8,3,10,5]))