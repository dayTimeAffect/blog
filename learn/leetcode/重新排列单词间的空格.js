/**
 * @Author: dayTimeAffect
 * @Date: 2022/9/7
 */
/*
* https://leetcode.cn/problems/rearrange-spaces-between-words/
* */
var reorderSpaces = function(text) {
    let wordArr = text.match(/\w+/g)
    let textLen = text.length
    let letterLen = text.replace(/ /g, '').length
    if (textLen === letterLen) return text
    if (wordArr.length === 1) return wordArr.toString() + new Array(textLen - letterLen).fill(' ').join('')
    let blank = new Array(Math.floor((textLen - letterLen) / (wordArr.length - 1))).fill(" ").join(''),
        surplus = new Array(textLen - letterLen - (blank.length * (wordArr.length - 1))).fill(" ").join('')
    return wordArr.join(blank) + surplus
};
// console.log(reorderSpaces("  walks  udp package   into  bar a"));
// console.log(reorderSpaces("a "));
console.log(reorderSpaces("  this   is  a sentence "));