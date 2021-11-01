/**
 * @Author: dayTimeAffect
 * @Date: 2021/10/21
 */
/*
* https://leetcode-cn.com/problems/di-yi-ge-zhi-chu-xian-yi-ci-de-zi-fu-lcof/
* */
var firstUniqChar = function(s) {
    let map = new Array(26).fill(0)
    for (let char of s){
        map[char.charCodeAt(0) - 97] ++
    }
    for (let char of s){
        if (map[char.charCodeAt(0) - 97] === 1) return char
    }
    return " "
};
console.log(firstUniqChar("abaccdeff"));
console.log(firstUniqChar("leetcode"));