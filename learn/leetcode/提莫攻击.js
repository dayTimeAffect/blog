/**
 * @Author: dayTimeAffect
 * @Date: 2024/9/19
 */
/*
* https://leetcode.cn/problems/teemo-attacking/description/
* */
/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    let count = 0
    for (let i = 0; i < timeSeries.length; i ++){
        if (timeSeries[i + 1] < timeSeries[i] + duration){
            count += timeSeries[i + 1] - timeSeries[i]
        }else {
            count += duration
        }
    }
    return count
};
console.log(findPoisonedDuration([1, 4], 2));
console.log(findPoisonedDuration([1, 2], 2));