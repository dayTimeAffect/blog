/**
 * @Author: dayTimeAffect
 * @Date: 2023/2/15
 */
/*
* https://leetcode.cn/problems/xoh6Oh/
* */
var divide = function(a, b) {
    const MAX_VALUE = 2 ** 31 - 1, MIN_VALUE = -(2 ** 31);
    // 考虑被除数为最小值的情况
    if (a === MIN_VALUE && b === 1) return MIN_VALUE;
    if (a === MIN_VALUE && b === -1) return MAX_VALUE;
    // 考虑除数为最小值的情况
    if (b === MIN_VALUE) return a === MIN_VALUE ? 1 : 0;
    // 考虑被除数为 0 的情况
    if (a === 0) return 0;
    // 将所有负数的数取相反数，这样就只需要考虑一种情况,因为 正数转负数不会溢出，负数转正数有可能会溢出
    let rev = false, ans = 0
    if (a < 0) {
        a = -a;
        rev = !rev;
    }
    if (b < 0) {
        b = -b;
        rev = !rev;
    }
    let c = 1, d = b
    while (a >= b){
        while ((d + d) < MAX_VALUE && (d + d) <= a){
            d += d
            c += c
        }
        a = a - d
        d = b
        ans += c
        c = 1
    }
    return rev ? -ans : ans
};
// console.log(divide(8, 3));
console.log(divide(15, 2));
console.log(divide(1, 1));