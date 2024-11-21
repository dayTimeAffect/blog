/**
 * @Author: dayTimeAffect
 * @Date: 2024/9/11
 */
/*
* https://leetcode.cn/problems/maximize-win-from-two-segments/description/?envType=daily-question&envId=2024-09-11
* */
/**
 * @param {number[]} prizePositions
 * @param {number} k
 * @return {number}
 */
var maximizeWin = function(prizePositions, k) {
    // 从右往左动态规划 dp，然后从左往右找滑动窗口。 结果就是最大的 right - left + 1 + dp[right]
    let map = {}, dp = [],points = [], count = 0, pre = -1
    for (let i = prizePositions.length - 1; i >= 0; i --){
        if (!map[prizePositions[i]]){
            map[prizePositions[i]] = 1
            points.unshift(prizePositions[i])
            pre ++
        }else {
            map[prizePositions[i]] ++
        }
        if (prizePositions[i] !== prizePositions[i - 1]){
            count += map[prizePositions[i]]
            while (points[pre] - points[0] > k){
                count -= map[points[pre]]
                pre --
            }
            dp.unshift(Math.max(count, dp[0] || 0))
        }
    }
    let res = 0, tem = 0
    for (let left = 0, right = 0; right < points.length; right ++){
        tem += map[points[right]]
        while (points[right] - points[left] > k){
            tem -= map[points[left]]
            left ++
        }
        res = Math.max(res, tem + (dp[right + 1] || 0))
    }
    return res
};
console.log(maximizeWin([1,2,3,4], 0));
console.log(maximizeWin([1,1,2,2,3,3,5], 2));