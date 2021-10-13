/**
 * @Author: dayTimeAffect
 * @Date: 2021/10/13
 */
/*
* https://leetcode-cn.com/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof/
* */
var reverseLeftWords = function(s, n) {
    // 字符串切片
    let left = s.substr(0, n)
    let right = s.substr(n)
    return right + left
};
var reverseLeftWords = function(s, n) {
    // 字符串遍历操作
    let i = 0
    while (i < n){
        s += s[i]
        i ++
    }
    return s.substr(n)
};
var reverseLeftWords = function(s, n) {
    // 列表遍历操作
    let list = s.split(''), i = 0
    while (i < n){
        list.push(s[i])
        i ++
    }
    return list.slice(n).join("")
};
console.log(reverseLeftWords("abcdefg", 2));