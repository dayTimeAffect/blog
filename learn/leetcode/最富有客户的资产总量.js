/**
 * @Author: dayTimeAffect
 * @Date: 2022/4/14
 */
/*
* https://leetcode-cn.com/problems/richest-customer-wealth/
* */
var maximumWealth = function(accounts) {
    return accounts.reduce((max, cur) => {
        return Math.max(max, cur.reduce((sum, cur) => sum + cur, 0))
    }, -Infinity)
};