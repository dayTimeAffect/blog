/**
 * @Author: dayTimeAffect
 * @Date: 2022/3/17
 */
/*
* https://leetcode-cn.com/problems/longest-word-in-dictionary/
* */
var longestWord = function(words) {
    words.sort((a, b) => a.length - b.length)
    let hashMap = new Set(['']), res = ''
    for (let i = 0; i < words.length; i ++){
        let pre = words[i].substr(0, words[i].length - 1)
        if (hashMap.has(pre)){
            hashMap.add(words[i])
            if (words[i].length > res.length || words[i] < res) {
                res = words[i]
            }
        }
    }
    return res
};
console.log(longestWord(["a", "banana", "app", "appl", "ap", "apply", "apple"]));
console.log(longestWord(["w","wo","wor","worl", "world"]));