/**
 * @Author: dayTimeAffect
 * @Date: 2023/5/8
 */
/*
* https://leetcode.cn/problems/lwyVBB/
* */
/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    let mapOrder = {
        'undefined': -1
    }
    for (let i = 0; i < 26; i ++){
        mapOrder[order[i]] = i
    }
    for (let i = 1; i < words.length; i ++){
        const cur = words[i], pre = words[i - 1]
        let j = 0
        while (j < cur.length || j < pre.length){
            if (mapOrder[cur[j]] > mapOrder[pre[j]]){
                break
            }
            if (mapOrder[cur[j]] < mapOrder[pre[j]]){
                return false
            }
            j ++
        }
    }
    return true
};
console.log(isAlienSorted(["hello","leetcode"], 'hlabcdefgijkmnopqrstuvwxyz'));