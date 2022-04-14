/**
 * @Author: dayTimeAffect
 * @Date: 2022/3/15
 */
/*
* https://leetcode-cn.com/problems/count-number-of-maximum-bitwise-or-subsets/
* */
var countMaxOrSubsets = function(nums) {
    const len = nums.length, maxValue = nums.reduce((sum, cur) => sum | cur, 0)
    let count = 0
    if (len <= 1) return len
    const backtrack = (index, value) => {
        for (let i = index; i < len; i ++){
            let temValue = value | nums[i]
            if (temValue === maxValue) count ++
            backtrack(i + 1, temValue)
        }
    }
    backtrack(0, 0)
    return count
};
console.log(countMaxOrSubsets([3,1]));
console.log(countMaxOrSubsets([2,2,2]));
console.log(countMaxOrSubsets([3,2,1,5]));