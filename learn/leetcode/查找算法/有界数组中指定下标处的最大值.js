/**
 * @Author: dayTimeAffect
 * @Date: 2023/1/4
 */
/*
* https://leetcode.cn/problems/maximum-value-at-a-given-index-in-a-bounded-array/
* */
var maxValue = function(n, index, maxSum) {
    const calculate = (i_Value) => {
        let res = -i_Value
        const leftLen = index + 1, rightLen = n - index
        if (i_Value >= leftLen){
            res += leftLen * (i_Value + (i_Value - leftLen + 1)) / 2
        }else {
            res += (i_Value * (i_Value + 1) / 2 + (leftLen - i_Value))
        }
        if (i_Value >= rightLen){
            res += rightLen * (i_Value + (i_Value - rightLen + 1)) / 2
        }else {
            res += (i_Value * (i_Value + 1) / 2 + (rightLen - i_Value))
        }
        return res
    }
    let left = 1, right = maxSum
    while (left <= right){
        const cur = Math.floor((left + right) / 2)
        const curSum = calculate(cur)
        if (curSum === maxSum) return cur
        if (curSum < maxSum){
            left = cur + 1
        }else {
            right = cur - 1
        }
    }
    return right
};

console.log(maxValue(4, 2, 6));
console.log(maxValue(6, 1, 10));
console.log(maxValue(5, 0, 28));
console.log(maxValue(9, 6, 27));

