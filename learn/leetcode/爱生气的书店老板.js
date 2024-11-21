/**
 * @Author: dayTimeAffect
 * @Date: 2024/4/23
 */
/*
* https://leetcode.cn/problems/grumpy-bookstore-owner/description/?envType=daily-question&envId=2024-04-23
* */
/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, minutes) {
    let n = customers.length, sum = 0, max = 0
    for (let i = 0; i < n; i ++){
        if (grumpy[i] === 0){
            sum += customers[i]
        }
    }
    for (let i = 0; i < minutes; i ++){
        if (grumpy[i] === 1){
            sum += customers[i]
        }
    }
    max = sum
    for (let i = minutes; i < n; i ++){
        if (grumpy[i] === 1){
            sum += customers[i]
        }
        if (grumpy[i - minutes] === 1){
            sum -= customers[i - minutes]
        }
        max = Math.max(max, sum)
    }
    return max
};