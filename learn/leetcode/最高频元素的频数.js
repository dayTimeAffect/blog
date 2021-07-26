/**
 * @Author: dayTimeAffect
 * @Date: 2021/7/19
 */
/*
* https://leetcode-cn.com/problems/frequency-of-the-most-frequent-element/
* */
var maxFrequency = function(nums, k) {
    if (nums.length === 1) return 1
    let frequency = 1;
    let sortNums = nums.sort((a, b) => a - b)
    let temFrequency = 1;
    let temK = k;
    let i = 0, j = 1;
    while (j < sortNums.length) {
        if (i === j) {
            j = i + 1
            temFrequency = 1
            continue;
        }
        if ((sortNums[j] - sortNums[j - 1]) * temFrequency <= temK) {
            temK -= (sortNums[j] - sortNums[j - 1]) * temFrequency
            temFrequency ++
            j ++
        } else {
            temFrequency --
            temK += sortNums[j - 1] - sortNums[i]
            i ++
        }
        frequency = Math.max(frequency, temFrequency)

    }
    return frequency
}
console.log(maxFrequency([1, 2, 4], 5));