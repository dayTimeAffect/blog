/**
 * @Author: dayTimeAffect
 * @Date: 2023/2/13
 */
/*
* https://leetcode.cn/problems/replace-the-substring-for-balanced-string/
* */
var balancedString = function(s) {
    //滑动窗口
    //从左到右遍历字符串 s，每次遍历到一个字符，就将该字符的数量减 1，然后判断当前窗口是否满足条件，即窗口外的字符数量都不超过 n/4。
    // 如果满足条件，那么就更新答案，然后将窗口的左边界右移，该字符数量加 1，直到不满足条件为止
    const COUNT = { Q: 0, W: 1, E: 2, R: 3 }
    const countArr = [0, 0, 0, 0], partial = s.length / 4
    for (let i = 0; i < s.length; i ++) countArr[COUNT[s[i]]] ++
    let l = -1, r = -1, res = Infinity
    while (r < s.length && l <= r){
        if (countArr.find(v => v > partial)){
            r ++
            countArr[COUNT[s[r]]] --
        }else {
            res = Math.min(r - l, res)
            l ++
            countArr[COUNT[s[l]]] ++
        }
    }
    return res
};
console.log(balancedString("QQWE"));
console.log(balancedString("QQQW"));
console.log(balancedString("QQQQ"));
console.log(balancedString("WQWRQQQW"));