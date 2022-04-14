/**
 * @Author: dayTimeAffect
 * @Date: 2022/4/6
 */
/*
* https://leetcode-cn.com/problems/longest-consecutive-sequence/
* */
var longestConsecutive = function(nums) {
    const hashSet = new Set(nums)
    const handleNums = Array.from(hashSet)
    let maxLength = 0
    for (let i = 0; i < handleNums.length; i ++){
        if (hashSet.has(handleNums[i] - 1)) continue;
        let length = 1
        while (hashSet.has(handleNums[i] + length)){
            length ++
        }
        maxLength = Math.max(length, maxLength)
    }
    return maxLength
};