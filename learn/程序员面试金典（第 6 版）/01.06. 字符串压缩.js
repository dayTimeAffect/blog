/**
 * @Author: dayTimeAffect
 * @Date: 2023/10/10
 */
/*
* https://leetcode.cn/problems/compress-string-lcci/description/
* */
var compressString = function(S) {
    if (S.length === 0) return S
    let res = S[0], flag = 1
    for (let i = 1; i <= S.length; i ++){
        if (S[i] === S[i - 1]){
            flag ++
        }else {
            res += flag + (S[i] || "")
            flag = 1
        }
    }
    return res.length < S.length ? res : S
};
console.log(compressString("a"));
console.log(compressString(""));
console.log(compressString("aab"));