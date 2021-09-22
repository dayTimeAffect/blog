/**
 * @Author: dayTimeAffect
 * @Date: 2021/9/22
 */
/*
* https://leetcode-cn.com/problems/pascals-triangle-ii/
* */
var getRow = function(rowIndex) {
    if (rowIndex < 1) return [1]
    let dp = [1]
    for (let i = 2; i <= rowIndex; i ++){
        let tem = [1]
        for (let j = 1; j < i; j ++){
            tem[j] = dp[j - 1] + (dp[j] || 1)
        }
        dp = tem
    }
    return [...dp, 1]
};
console.log(getRow(0));
console.log(getRow(1));
console.log(getRow(2));
console.log(getRow(3));
console.log(getRow(4));
// console.log(getRow(5));