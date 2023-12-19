/**
 * @Author: dayTimeAffect
 * @Date: 2023/9/26
 */
/*
* https://leetcode.cn/problems/IY6buf/
* */
var isInterleave = function(s1, s2, s3) {
    if (s1.length + s2.length !== s3.length) return false
    const map = new Set()
    const handle = (s1_i, s2_i, s3_i) => {
        if (s1_i >= s1.length && s2_i >= s2.length && s3_i >= s3.length) return true
        if (map.has(`${s1_i}_${s2_i}_${s3_i}`)) return false
        map.add(`${s1_i}_${s2_i}_${s3_i}`)
        if (s1_i >= s1.length) return s2.slice(s2_i) === s3.slice(s3_i)
        if (s2_i >= s2.length) return s1.slice(s1_i) === s3.slice(s3_i)
        return (s3[s3_i] === s1[s1_i] && handle(s1_i + 1, s2_i, s3_i + 1)) || (s3[s3_i] === s2[s2_i] && handle(s1_i, s2_i + 1, s3_i + 1))
    }
    return handle(0, 0, 0)
};
console.log(isInterleave("aabcc", "dbbca", "aadbbcbcac"));
console.log(isInterleave("aabcc", "dbbca", "aadbbbaccc"));