/**
 * @Author: dayTimeAffect
 * @Date: 2022/6/13
 */
/*
* https://leetcode.cn/problems/height-checker/
* */
var heightChecker = function(heights) {
    let expected = [...heights].sort((a, b) => a - b), res = 0
    heights.forEach((v, i) => res += (heights[i] !== expected[i]))
    return res
};
console.log(heightChecker([1, 1, 4, 2, 1, 3]));