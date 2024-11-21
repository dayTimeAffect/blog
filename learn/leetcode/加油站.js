/**
 * @Author: dayTimeAffect
 * @Date: 2024/5/16
 */
/*
* https://leetcode.cn/problems/gas-station/description/
* */
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let total_gas = 0, total_cost = 0
    for (let i = 0; i < gas.length; i ++){
        total_gas += gas[i]
        total_cost += cost[i]
    }
    if (total_gas < total_cost) return -1
    let tem_gas = 0, tem_start = 0
    for (let i = 0; i < gas.length; i ++){
        tem_gas += gas[i] - cost[i]
        if (tem_gas < 0){
            tem_gas = 0
            tem_start = i + 1
        }
    }
    return tem_start
};
console.log(canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2]));
console.log(canCompleteCircuit([2,3,4], [3,4,3]));