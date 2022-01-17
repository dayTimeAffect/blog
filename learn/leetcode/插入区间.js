/**
 * @Author: dayTimeAffect
 * @Date: 2022/1/11
 */
/*
* https://leetcode-cn.com/problems/insert-interval/
* */
var insert = function(intervals, newInterval) {
    let res = [], len = intervals.length, tem = []
    if (!intervals.length) return [newInterval]
    for (let i = 0; i < len; i ++){
        if (
            (intervals[i][0] <= newInterval[0] && intervals[i][1] >= newInterval[0])
            || (intervals[i][0] <= newInterval[1] && intervals[i][1] >= newInterval[1])
            || (intervals[i][0] >= newInterval[0] && intervals[i][1] <= newInterval[1])
        ) {
            newInterval[0] = Math.min(...newInterval, ...intervals[i])
            newInterval[1] = Math.max(...newInterval, ...intervals[i])
            intervals[i] = newInterval
        }else{
            tem.push(intervals[i])
        }
    }
    if (!tem.length) return [newInterval]
    for (let i = 0; i < tem.length; i ++){
        if (i === 0 && newInterval[1] < tem[i][0]) {
            res.push(newInterval, tem[i])
        } else if (i === tem.length - 1 && newInterval[0] > tem[i][1]){
            res.push(tem[i], newInterval)
        } else if (newInterval[0] < tem[i][0] && newInterval[1] > tem[i - 1][1]){
            res.push(newInterval, tem[i])
        }else{
            res.push(tem[i])
        }
    }
    return res
};
console.log(insert([[1,3],[6,9]], [2,5]));
console.log(insert([], [2,5]));
console.log(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]));
console.log(insert([[1,5]], [2,3]));
console.log(insert([[3,5],[12,15]], [6,6]));