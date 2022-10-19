/**
 * @param {string} digits
 * @return {string[]}
 */
/*
* https://leetcode.cn/problems/letter-combinations-of-a-phone-number/
* */
var letterCombinations = function(digits) {
    if (!digits) return []
    const map = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z'],
    }
    const temArr = digits.split('').map(v => map[v])
    let res = [], tem = []
    const ergodic = (arr, cur) => {
        if (cur === arr.length) return res.push(tem.join(''))
        for (let i = 0; i < arr[cur].length; i ++){
            tem.push(arr[cur][i])
            ergodic(arr, cur + 1)
            tem.pop()
        }
    }
    ergodic(temArr, 0)
    return res
};
console.log(letterCombinations('23'));