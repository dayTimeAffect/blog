/**
 * @Author: dayTimeAffect
 * @Date: 2024/10/9
 */
/*
* https://leetcode.cn/problems/most-common-word/description/?envType=problem-list-v2&envId=array&difficulty=EASY
* */
/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    paragraph = paragraph.toLowerCase() + ' '
    let paragraphArr = [], word = ''
    for (let i = 0; i < paragraph.length; i ++){
        if (paragraph[i] >= 'a' && paragraph[i] <= 'z' || paragraph[i] >= 'A' && paragraph[i] <= 'Z'){
            word += paragraph[i]
        }else if(word.length){
            paragraphArr.push(word)
            word = ''
        }
    }
    let bannedMap = new Set(banned), resMap = {}, res = ''
    console.log(paragraphArr, bannedMap)

    for (let i = 0; i < paragraphArr.length; i ++){
        if (bannedMap.has(paragraphArr[i])) continue;
        if (resMap[paragraphArr[i]]){
            resMap[paragraphArr[i]] ++
        }else {
            resMap[paragraphArr[i]] = 1
        }
        if (resMap[paragraphArr[i]] > resMap[res] || !res){
            res = paragraphArr[i]
        }
    }
    console.log(resMap)
    return res

};
// console.log(mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", ['hit']));
console.log(mostCommonWord("Bob", []));