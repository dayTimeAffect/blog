/**
 * @Author: dayTimeAffect
 * @Date: 2022/4/6
 */
/*
* https://leetcode-cn.com/problems/word-break/
* */
var wordBreak = function(s, wordDict) {
    let wordSet = new Set(wordDict), len = s.length, memo = new Array(len)
    const findSame = (start) => {
        if (start === len) return true
        if (memo[start] !== undefined) return memo[start]
        let cur = ''
        for (let i = start; i < len; i ++){
            cur += s[i]
            if (wordSet.has(cur) && findSame(i + 1)) {
                memo[start] = true
                return true
            }
        }
        memo[start] = false
        return false
    }
    return findSame(0)
};
console.log(wordBreak("leetcode",["leet", "code"]));
console.log(wordBreak("applepenapple",["apple", "pen"]));
console.log(wordBreak("catsandog",["cats", "dog", "sand", "and", "cat"]));