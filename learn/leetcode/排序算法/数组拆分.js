/**
 * @Author: dayTimeAffect
 * @Date: 2022/12/8
 */
var arrayPairSum = function(nums) {
    nums = nums.sort((a, b) => b - a)
    let res = 0
    for (let i = 0; i < nums.length / 2; i ++){
        res += nums[i * 2 + 1]
    }
    return res
};
console.log(arrayPairSum([6,2,6,5,1,2]));