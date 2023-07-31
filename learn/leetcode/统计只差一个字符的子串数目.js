/**
 * @Author: dayTimeAffect
 * @Date: 2023/3/27
 */
/*
* https://leetcode.cn/problems/count-substrings-that-differ-by-one-character/
* */
var countSubstrings = function(s, t) {
    const m = s.length, n = t.length
    let count = 0
    for (let i = 0; i < m; i ++){
        for (let j = 0; j < n; j ++){
            let diff = 0
            for (let k = 0; i + k < m && j + k < n; k ++){
                diff += (s[i + k] === t[j + k] ? 0 : 1)
                if (diff > 1){
                    break
                }else if (diff === 1) {
                    count ++
                }
            }
        }
    }
    return count
};
console.log(countSubstrings('abe', 'bbc'));