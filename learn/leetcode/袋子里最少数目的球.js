/**
 * @Author: dayTimeAffect
 * @Date: 2022/12/20
 */
/*
* https://leetcode.cn/problems/minimum-limit-of-balls-in-a-bag/
* */
var minimumSize = function(nums, maxOperations) {
    let max = Math.max(...nums), min = 1, res = 1
    while (min <= max){
        const mid = Math.floor((max + min) / 2)
        let cur = 0
        for (let i = 0; i < nums.length; i ++){
            cur += Math.floor((nums[i] - 1) / mid)
        }
        if (cur > maxOperations){
            min = mid + 1
        }else{
            res = mid
            max = mid - 1
        }
    }
    return res
};
// console.log(minimumSize([9], 2));
// console.log(minimumSize([2,4,8,2], 4));
console.log(minimumSize([501,67,484,937,816,895,294,240,736,245,266,698,371,538,265,309,422,476,827,816,927,379,732,941,119,303,914,311,518,843,359,198,341,633,671,22,23,235,556,92,239,389,393,74,799,792,477,696,150,39,979,97,330,81,798,630,954,955,633,438,342,909,103,82,184,240,693,705,225,55,311,181,422,371,177,156,138,806,255,633,801,427,214,49,957,738,325,317,576,117,955,931,83,100,931,227,616,109,333,285,113,744,398,981,760]
    , 92));
