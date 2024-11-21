/**
 * @Author: dayTimeAffect
 * @Date: 2024/4/9
 */
/*
* https://leetcode.cn/problems/longest-word-lcci/description/
* */
/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
    if (!words.length) return ''
    const mateWord = (word, index, map) => {
        debugger
        if (index === word.length) return true
        if (map.get(word[index])){
            const tem = index === 0 ? map.get(word[index]).filter(v => v !== word) : map.get(word[index])
            for (let i = 0; i < tem.length; i ++){
                if (tem[i].length + index > word.length) continue
                if (tem[i] === word.slice(index, index + tem[i].length) && mateWord(word, index + tem[i].length, map)){
                    return true
                }
            }
        }
        return false
    }
    let res = '', map = new Map()
    for (let i = 0; i < words.length; i ++){
        if (!map.has(words[i][0])){
            map.set(words[i][0], [])
        }
        map.get(words[i][0]).push(words[i])
    }
    for (let i = 0; i < words.length; i ++){
        if (mateWord(words[i], 0, map)){
            if (words[i].length > res.length || (words[i].length === res.length && words[i] < res)){
                res = words[i]
            }
        }
    }
    return res
};
console.log('1', longestWord(["a", "banana", "app", "appl", "ap", "apply", "apple"]));
console.log('2', longestWord(["w","wo","wor","worl", "world"]));
console.log('3', longestWord(["cat","banana","dog","nana","walk","walker","dogwalker"]));