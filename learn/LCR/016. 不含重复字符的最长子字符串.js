/**
 * @Author: dayTimeAffect
 * @Date: 2023/3/27
 */
/*
* https://leetcode.cn/problems/wtcaE1/
* */
var lengthOfLongestSubstring = function(s) {
    let map = new Set(), maxLen = 0
    for (let i = 0, j = 0; j < s.length; j ++){
        if (map.has(s[j])){
            while (map.has(s[j])){
                map.delete(s[i])
                i ++
            }
        }
        map.add(s[j])
        maxLen = Math.max(maxLen, j - i + 1)
    }
    return maxLen
};
console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));