/**
 * @Author: dayTimeAffect
 * @Date: 2024/5/21
 */
/*
* https://leetcode.cn/problems/maximum-gap/description/
* */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    if (nums.length < 2) return 0
    let max = Math.max(...nums), min = Math.min(...nums);
    let bucketSize = Math.max(1, Math.floor((max - min) / (nums.length - 1)))
    let bucketNum = Math.floor((max - min) / bucketSize) + 1
    let bucket = new Array(bucketNum).fill(null).map(() => [Infinity, -Infinity])
    for (let i = 0; i < nums.length; i ++){
        let index = Math.floor((nums[i] - min) / bucketSize)
        bucket[index][0] = Math.min(bucket[index][0], nums[i])
        bucket[index][1] = Math.max(bucket[index][1], nums[i])
    }
    let res = 0, pre = -1
    for (let i = 0; i < bucketNum; i ++){
        if (bucket[i][0] === Infinity) continue
        if (pre !== -1){
            res = Math.max(res, bucket[i][0] - bucket[pre][1])
        }
        pre = i
    }
    return res
};
console.log(maximumGap([3,6,9,1]));