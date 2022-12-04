/**
 * @Author: dayTimeAffect
 * @Date: 2022/9/21
 */
/*
* https://leetcode.cn/problems/longest-substring-without-repeating-characters/submissions/
* */
var lengthOfLongestSubstring = function(s) {
    let maxLen = 0, curS = []
    for (let i = 0; i < s.length; i ++){
        let p = curS.indexOf(s[i])
        if (p !== -1){
            curS.splice(0, p + 1)
        }
        curS.push(s[i])
        maxLen = Math.max(maxLen, curS.length)
    }
    return maxLen
};
var lengthOfLongestSubstring = function(s) {
    //滑动窗口
    if (s.length <= 1) return s.length
    let maxLen = 0, left = 0, right = 0, len = s.length, map = new Set(s[0])
    while (right < len - 1){
        right ++
        while (map.has(s[right])){
            map.delete(s[left])
            left ++
        }
        map.add(s[right])
        maxLen = Math.max(right - left + 1, maxLen)
    }
    return maxLen
};
// console.log(lengthOfLongestSubstring("abcabcbb"));
// console.log(lengthOfLongestSubstring("pwwkew"));
// console.log(lengthOfLongestSubstring(""));
// console.log(lengthOfLongestSubstring("aaa"));
console.log(lengthOfLongestSubstring("a"));