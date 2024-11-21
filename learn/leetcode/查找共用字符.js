/**
 * @Author: dayTimeAffect
 * @Date: 2024/10/16
 */
/*
* https://leetcode.cn/problems/find-common-characters/description/?envType=problem-list-v2&envId=array&difficulty=EASY&status=TO_DO
* */
/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    let map = [], res = []
    for (let i = 0; i < words.length; i ++){
        let temMap = {}
        for (let j = 0; j < words[i].length; j ++){
            if (temMap[words[i][j]]){
                temMap[words[i][j]] ++
            }else {
                temMap[words[i][j]] = 1
            }
        }
        map.push(temMap)
    }
    for (let i = 0; i < 26; i ++){
        let char = String.fromCharCode(97 + i), num = Infinity
        for (let j = 0; j < map.length; j ++){
            if (!map[j][char]){
                num = Infinity
                break;
            }else {
                num = Math.min(num, map[j][char])
            }
        }
        if (num !== Infinity){
            res = res.concat(new Array(num).fill(char))
        }
    }
    return res
};
console.log(commonChars(["bella","label","roller"]))