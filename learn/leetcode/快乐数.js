/**
 * @Author: dayTimeAffect
 * @Date: 2022/5/5
 */
/*
* https://leetcode-cn.com/problems/happy-number/
* */
var isHappy = function(n) {
    // 如果收敛过程中出现重复值，那么必然不是快乐数
    // 所有的数都会在有限次数的转化中变成小于243的数
    // 枚举1——243，就会发现，非快乐数最终都在特定循环4 → 16 → 37 → 58 → 89 → 145 → 42 → 20 → 4 内
    let map = new Set(), tem = n
    while (tem !== 1){
        if (map.has(tem)) return false
        map.add(tem)
        tem = String(tem).split("").reduce((res, cur) => res + (cur * cur), 0)
    }
    return true
};
// console.log(isHappy(19));
// console.log(isHappy(2));
// console.log(isHappy(10));
console.log(isHappy(2));
