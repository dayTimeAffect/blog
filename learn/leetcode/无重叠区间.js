/**
 * @Author: dayTimeAffect
 * @Date: 2023/2/9
 */
/*
* https://leetcode.cn/problems/non-overlapping-intervals/
* */
var eraseOverlapIntervals = function(intervals) {
    //贪心算法。先按左端点排序，然后对比是否有交集，有的话，保留第二个数字小的，留出更大的空间
    intervals.sort((a, b) => a[0] - b[0])
    let right = intervals[0][1], count = 1
    for (let i = 1; i <intervals.length; i ++){
        const [temLeft, temRight] = intervals[i]
        if (temLeft >= right){
            count ++
            right = temRight
        }else {
            if (right > temRight){
                right = temRight
            }
        }
    }
    return intervals.length - count
};
var eraseOverlapIntervals = function(intervals) {
    //贪心算法。先按右端点排序，然后对比是否有交集，有的话，保留第二个数字小的，留出更大的空间
    intervals.sort((a, b) => a[1] - b[1])
    let right = intervals[0][1], count = 1
    for (let i = 1; i <intervals.length; i ++){
        if (intervals[i][0] >= right){
            count ++
            right = intervals[i][1]
        }
    }
    return intervals.length - count
};
console.log(eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]]));
console.log(eraseOverlapIntervals([ [1,2], [1,2], [1,2] ]));
console.log(eraseOverlapIntervals([ [1,2], [2,3] ]));
console.log(eraseOverlapIntervals([[-52,31],[-73,-26],[82,97],[-65,-11],[-62,-49],[95,99],[58,95],[-31,49],[66,98],[-63,2],[30,47],[-40,-26]]));