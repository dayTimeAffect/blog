/**
 * @Author: dayTimeAffect
 * @Date: 2024/3/11
 */
/*
* https://leetcode.cn/problems/pattern-matching-lcci/description/
* */
/**
 * @param {string} pattern
 * @param {string} value
 * @return {boolean}
 */
var patternMatching = function(pattern, value) {
    if (value === '') return pattern.length < 2
    if (pattern === '') return value === ''
    let a = 0, b = 0, patternArr = pattern.split('')

    for (let i = 0; i < patternArr.length; i ++){
        if (pattern[i] === 'a') a ++
        if (pattern[i] === 'b') b ++
    }
    if (a < b) {
        [a, b] = [b, a]
        for (let i = 0; i < patternArr.length; i ++){
            if (pattern[i] === 'a') patternArr[i] = 'b'
            else if (pattern[i] === 'b') patternArr[i] = 'a'
        }
    }
    if (b === 0) {
        if (value.length % a !== 0) return false
        let aLen = value.length / a, aStr = value.substr(0, aLen)
        for (let i = 0; (aLen * i) < value.length; i ++){
            if (value.substr(aLen * i, aLen) !== aStr) return false
        }
        return true
    }
    for (let i = 0; i < value.length / a; i ++){
        let aLen = i, bLen = (value.length - a * i) / b
        if (bLen !== Math.floor(bLen)) continue;
        let pos = 0, aStr = '', bStr = '', flag = true
        for (let j = 0; j < patternArr.length; j ++){
            let temStr = ''
            if (patternArr[j] === 'a'){
                temStr = value.substr(pos, aLen)
                if (aStr !== '' && aStr !== temStr) {
                    flag = false
                    break
                }
                aStr = temStr
                pos += aLen
            }
            if (patternArr[j] === 'b'){
                temStr = value.substr(pos, bLen)
                if (bStr !== '' && bStr !== temStr) {
                    flag = false
                    break
                }
                bStr = temStr
                pos += bLen
            }
        }
        if (flag && aStr !== bStr) return true
    }
    return false
};
// console.log(patternMatching('abba', 'dogcatcatdog'));
// console.log(patternMatching('abba', 'dogcatcatfish'))
// console.log(patternMatching('aaaa', 'dogcatcatdog'))
// console.log(patternMatching('abba', 'dogdogdogdog'))
// console.log(patternMatching('abbaa', 'dogdogdogdogdog'))
// console.log(patternMatching('bbba', 'xxxxxx'))
console.log(patternMatching('a', 'zqvamqvuuvvazv'))