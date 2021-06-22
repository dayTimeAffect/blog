/**
 * @Author: dayTimeAffect
 * @Date: 2021/6/22
 */
/*
* https://leetcode-cn.com/problems/zi-fu-chuan-de-pai-lie-lcof/
* */
var permutation = function(s) {
    // 优化递归算法。把map操作放入递归中
    // 优化去重策略，将去重规则放入递归算法中，也就是重复字符在结果的位置只出现一次
    let helper = (curS, prev) => {
        let recordChar = {}
        let res = []
        if (!curS) return res
        if (curS.length === 1) return [prev + curS]
        for (let i = 0; i < curS.length; i ++){
            if (recordChar[curS[i]]) continue;
            recordChar[curS[i]] = true
            let temS = curS.split('')
            temS.splice(i, 1)
            res.push(...helper(temS.join(''), prev + curS[i]))
        }
        return res
    }
    return helper(s, '')
};
var deleteRep = arr => {
    // set 去重
    return Array.from(new Set(arr))
}
console.log(permutation('aba'));

/*
var permutation = function(s) {
    // 递归算法
    let res = []
    if (!s) return res
    if (s.length === 1) return [s]
    for (let i = 0; i < s.length; i ++){
        let temS = s.split('')
        temS.splice(i, 1)
        res.push(...(permutation(temS.join('')).map(v => s[i] + v)))
    }

    return deleteRep(res)
};
var deleteRep = arr => {
    // set 去重
    return Array.from(new Set(arr))
}
* */
