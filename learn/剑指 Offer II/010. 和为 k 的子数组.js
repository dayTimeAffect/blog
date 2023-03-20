/**
 * @Author: dayTimeAffect
 * @Date: 2023/3/7
 */
/*
* https://leetcode.cn/problems/QTMn0o/
* */
// var subarraySum = function(nums, k) {
//     let count = 0, preArr = [],tem = 0
//     for (let i = 0; i < nums.length; i ++){
//         tem += nums[i]
//         preArr.push(tem)
//     }
//
//     for (let i = 0; i < preArr.length; i ++){
//         if (preArr[i] === k) count ++
//         for (let j = 0; j < i; j ++){
//             if (preArr[i] - preArr[j] === k) count ++
//         }
//     }
//     return count
// };
var subarraySum = function(nums, k) {
    let count = 0, pre = 0, map = new Map([[0, 1]])
    for (let i = 0; i < nums.length; i ++){
        pre += nums[i]
        if (map.has(pre - k)){
            count += map.get(pre - k)
        }
        map.set(pre, (map.get(pre) || 0) + 1)
    }
    return count
};
console.log(subarraySum([1, 1, 1], 2));
console.log(subarraySum([1, 2, 3], 3));