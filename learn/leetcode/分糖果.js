/**
 * @Author: dayTimeAffect
 * @Date: 2022/5/26
 */
/*
* https://leetcode.cn/problems/distribute-candies/
* */
var distributeCandies = function(candyType) {
    let temLen = candyType.length / 2
    let kind = Array.from(new Set(candyType)).length
    return Math.min(temLen, kind)
};
console.log(distributeCandies([1,1,2,2,3,3]));