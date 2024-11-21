/**
 * @Author: dayTimeAffect
 * @Date: 2024/6/3
 */
/*
* https://leetcode.cn/problems/distribute-candies-to-people/description/?envType=daily-question&envId=2024-06-03
* */
/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
    let res = new Array(num_people).fill(0)
    for (let i = 0; candies > 0; i ++){
        res[i % num_people] += Math.min(candies, i + 1)
        candies -= i + 1
    }
    return res
};
console.log(distributeCandies(7, 4)); // [1,2,3,1]
console.log(distributeCandies(10, 3)); // [5,2,3]