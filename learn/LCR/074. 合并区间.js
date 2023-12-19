/**
 * @Author: dayTimeAffect
 * @Date: 2023/8/14
 */
/*
* https://leetcode.cn/problems/SsGoHC/
* */

var merge = function(intervals) {
    let nextArr = intervals.sort((a, b) => a[0] - b[0])
    let curStart = nextArr[0][0], curEnd = nextArr[0][1], res = []
    for (let i = 1; i < nextArr.length; i ++){
        const [start, end] = nextArr[i]
        if (curStart === start){
            curEnd = Math.max(end, curEnd)
        }else if (curEnd < start){
            res.push([curStart, curEnd])
            curStart = start
            curEnd = end
        }else {
            curEnd = Math.max(end, curEnd)
        }
    }
    return [...res, [curStart, curEnd]]
};
console.log(merge([[1,3],[2,6],[8,10],[15,18]]));
console.log(merge([[1,4],[4,5]]));