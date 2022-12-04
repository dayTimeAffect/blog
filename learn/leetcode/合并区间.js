/**
 * @Author: dayTimeAffect
 * @Date: 2022/10/27
 */
/*
* https://leetcode.cn/problems/merge-intervals/
* */
var merge = function(intervals) {
    const temArr = intervals.sort((a, b) => a[0] - b[0])
    const res = []
    let temLeft = temArr[0][0], temRight = temArr[0][1]
    for (let i = 1; i < temArr.length; i ++){
        const [curLeft, curRight] = temArr[i]
        if (curLeft > temRight){
            res.push([temLeft, temRight])
            temLeft = curLeft
            temRight = curRight
        }else {
            temRight = Math.max(temRight, curRight)
        }
    }
    res.push([temLeft, temRight])
    return res
};
console.log(merge([[1,3],[2,6],[8,10],[15,18]]));