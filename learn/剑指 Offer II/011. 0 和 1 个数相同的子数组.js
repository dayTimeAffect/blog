/**
 * @Author: dayTimeAffect
 * @Date: 2023/3/13
 */
/*
* https://leetcode.cn/problems/A1NYOS/
* */
var findMaxLength = function(nums) {
    let count_0 = 0, count_1 = 0, res = 0
    for (let i = 0; i < nums.length; i ++){
        if (nums[i] === 0) count_0 ++
        if (nums[i] === 1) count_1 ++
        for (let j = i + 1; j < nums.length; j ++){
            if (nums[j] === 0) count_0 ++
            if (nums[j] === 1) count_1 ++
            if (count_0 === count_1) res = Math.max(count_0 + count_1, res)
        }
        count_0 = 0
        count_1 = 0
    }
    return res
};
var findMaxLength = function(nums) {
    const map = new Map()
    let tem = 0, res = 0
    for (let i = 0; i < nums.length; i ++){
        tem += (nums[i] === 0 ? - 1 : 1)
        if (tem === 0){
            res = i + 1
        }else {
            if (map.has(tem)){
                res = Math.max(res, i - map.get(tem))
            }else {
                map.set(tem, i)
            }
        }
    }
    return res
};
// console.log(findMaxLength([0, 1]));
// console.log(findMaxLength([0, 1, 0]));
console.log(findMaxLength([0,1,1,0,1,1,1,0]));