/**
 * @Author: dayTimeAffect
 * @Date: 2023/10/24
 */
/*
* https://leetcode.cn/problems/number-of-dice-rolls-with-target-sum/?envType=daily-question&envId=Invalid%20Date
* */
var numRollsToTarget = function(n, k, target) {
    const memo = new Array(n + 1).fill(-1).map(v => new Array(target + 1).fill(-1))
    const dfs = (count, sum) => {
        if (count === 0){
            return Number(sum === 0)
        }
        if (memo[count][sum] !== -1){
            return memo[count][sum]
        }
        let flag = 0
        for (let i = 1; i <= k && i <= target; i ++){
            if (sum - i < 0) break;
            flag = (flag + dfs(count - 1, sum - i)) % (Math.pow(10, 9) + 7)
        }
        return memo[count][sum] = flag
    }
    dfs(n, target)
    return memo[n][target]
};
console.log(numRollsToTarget(2, 6, 7));
console.log(numRollsToTarget(30, 30, 500));