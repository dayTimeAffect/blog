/**
 * @Author: dayTimeAffect
 * @Date: 2024/8/1
 */
/*
* https://leetcode.cn/problems/na-ying-bi/description/
* */
/**
 * @param {number[]} coins
 * @return {number}
 */
var minCount = function(coins) {
    return coins.reduce((sum, cur) => {
        return sum + Math.ceil(cur / 2) || 0
    }, 0)
};