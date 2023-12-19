/**
 * @Author: dayTimeAffect
 * @Date: 2023/5/8
 */
/*
* https://leetcode.cn/problems/569nqc/
* */
/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
    const timeArr = [], map = {}, len = timePoints.length
    for (let i = 0; i < len; i ++){
        const [h, m] = timePoints[i].split(':')
        timeArr[i] = h * 60 + Number(m)
        if (map[timeArr[i]]) return 0
        map[timeArr[i]] = true
    }
    timeArr.sort((a, b) => a - b)
    let min = 24 * 60 - timeArr[len - 1] + timeArr[0]
    for (let i = 1; i < len; i ++){
        if (min > timeArr[i] - timeArr[i - 1]){
            min = timeArr[i] - timeArr[i - 1]
        }
    }
    return min
};
console.log(findMinDifference());