/**
 * @Author: dayTimeAffect
 * @Date: 2024/10/31
 */
/*
* https://leetcode.cn/problems/shortest-completing-word/description/?envType=problem-list-v2&envId=array&difficulty=EASY
* */
/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function(licensePlate, words) {
    let map = {}
    for (let i = 0; i < words.length; i ++){
        let word = words[i]
        map[i] = {
            length: word.length,
            charMap: {}
        }
        for (let j = 0; j < word.length; j ++){
            map[i].charMap[word[j]] ? (map[i].charMap[word[j]] ++) : (map[i].charMap[word[j]] = 1)
        }
    }
    let strMap = {}, lowerStr = licensePlate.toLowerCase()
    for (let i = 0; i < lowerStr.length; i ++){
        if (/[a-z]/.test(lowerStr[i])){
            strMap[lowerStr[i]] ? (strMap[lowerStr[i]] ++) : (strMap[lowerStr[i]] = 1)
        }
    }
    let minLen = Infinity, minI = -1, keys = Object.keys(strMap)
    for (let i = 0; i < words.length; i ++){
        if (keys.every(v => strMap[v] <= map[i].charMap[v])){
            if (map[i].length < minLen){
                minI = i
                minLen = map[i].length
            }
        }
    }
    return words[minI]
};
console.log(shortestCompletingWord("1s3 PSt", ["step", "steps", "stripe", "stepple"]));
console.log(shortestCompletingWord("1s3 456", ["looks", "pest", "stew", "show"]));