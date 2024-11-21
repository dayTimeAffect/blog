/**
 * @Author: dayTimeAffect
 * @Date: 2024/4/9
 */
/*
* https://leetcode.cn/problems/word-transformer-lcci/description/
* */
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[]}
 */
var findLadders = function(beginWord, endWord, wordList) {
    if (!wordList.includes(endWord)) return []
    let tem = [...new Set([beginWord, ...wordList])]
    let map = {}
    for (let i = 0; i < tem.length; i ++){
        for (let j = i + 1; j < tem.length; j ++){
            if (tem[i].length === tem[j].length){
                let flag = 0, len = tem[i].length
                for (let k = 0; k < len; k ++){
                    if (tem[i][k] !== tem[j][k]) flag ++
                    if (flag > 1) break
                }
                if (flag === 1){
                    if (!map[tem[i]]) map[tem[i]] = []
                    if (!map[tem[j]]) map[tem[j]] = []
                    map[tem[i]].push(tem[j])
                    map[tem[j]].push(tem[i])
                }
            }
        }
    }
    let path = [beginWord], hash = {}
    const findPath = (start, target) => {
        if (start === target) return path
        if (!map[start]) return []
        let tem = []
        for (let str of map[start]){
            if(!hash[str]){
                hash[str] = true
                path.push(str)
                tem = findPath(str, target)
                if (tem.length) return tem
                path.pop()
            }
        }
        return []
    }

    return findPath(beginWord, endWord).length ? path : []
};
console.log(findLadders("hit", "cog", ["hot","dot","dog","lot","log","cog"]));