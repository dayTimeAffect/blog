/**
 * @Author: dayTimeAffect
 * @Date: 2021/7/23
 */
/*
* https://leetcode-cn.com/problems/check-if-all-the-integers-in-a-range-are-covered/
* */
var isCovered = function(ranges, left, right) {
    ranges = ranges.sort((a, b) => a[0] - b[0])
    for (let i = 0; i < ranges.length; i ++){
        if (left > right) return true
        let [min, max] = ranges[i]
        if (left > max) continue;
        if (right < min) return false
        if (left < min) return false
        if (right <= max) return true
        left = max + 1
    }
    return false
};
console.log(isCovered([[13,43],[19,20],[32,38],[26,33],[3,38],[16,31],[26,48],[27,43],[12,24]], 36, 45));
