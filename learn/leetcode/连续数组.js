/**
 * @Author: dayTimeAffect
 * @Date: 2022/6/21
 */
/*
* https://leetcode.cn/problems/contiguous-array/
* */
var findMaxLength = function(nums) {
    let map = new Map([[0, -1]]), len = nums.length, cur = 0, res = 0
    for (let i = 0; i < len; i ++){
       cur += nums[i] === 0 ? -1 : 1
        if (map.has(cur)){
            res = Math.max(i - map.get(cur), res)
        }else {
            map.set(cur, i)
        }
    }
    return res
};
// console.log(findMaxLength([0, 1, 0]));
console.log(findMaxLength([0, 1]));