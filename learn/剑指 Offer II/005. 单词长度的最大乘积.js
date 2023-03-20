/**
 * @Author: dayTimeAffect
 * @Date: 2023/2/20
 */
/*
* https://leetcode.cn/problems/aseY1I/
* */
// var maxProduct = function(words) {
//     let maxMul = 0
//     for (let i = 0; i < words.length; i ++){
//         let map = new Set(words[i].split(''))
//         for (let j = i + 1; j < words.length; j ++){
//             if (words[i].length * words[j].length <= maxMul) continue;
//             let l = words[j].length - 1
//             while (!map.has(words[j][l]) && l >= 0) l --
//             if (l === -1) maxMul = words[i].length * words[j].length
//         }
//     }
//     return maxMul
// };
var maxProduct = function(words) {
    //优化，使用位运算优化判断两个单词是否有相同字符
    let maxMul = 0, masks = new Array(words.length)
    for (let i = 0; i < words.length; i ++){
        for (let j = 0; j < words[i].length; j ++){
            masks[i] |= (1 << words[i][j].charCodeAt(0) - 'a'.charCodeAt(0))
        }
        /*let bitStr = new Array(26).fill(0)
        for (let j = 0; j < words[i].length; j ++){
            bitStr[25 - (words[i][j].charCodeAt(0) - 'a'.charCodeAt(0))] = 1
        }
        masks[i] = parseInt(bitStr.join(''), 2)*/
    }
    for (let i = 0; i < words.length; i ++){
        for (let j = i + 1; j < words.length; j ++){
            if (words[i].length * words[j].length <= maxMul) continue;
            if ((masks[i] & masks[j]) === 0) {
                maxMul = words[i].length * words[j].length
            }
        }
    }
    return maxMul
};

console.log(maxProduct(["abcw","baz","foo","bar","fxyz","abcdef"]));