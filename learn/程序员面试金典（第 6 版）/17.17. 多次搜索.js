/**
 * @Author: dayTimeAffect
 * @Date: 2024/4/9
 */
/*
* https://leetcode.cn/problems/multi-search-lcci/description/
* */
/**
 * @param {string} big
 * @param {string[]} smalls
 * @return {number[][]}
 */
var multiSearch = function(big, smalls) {
    let map = new Map(), res = []
    for (let i = 0; i < big.length; i ++){
        if (!map.has(big[i])){
            map.set(big[i], [])
        }
        map.set(big[i], map.get(big[i]).concat(i))
    }
    for (let i = 0; i < smalls.length; i ++){
        let arr = []
        if (!map.has(smalls[i][0])){
            res.push(arr)
            continue
        }else {
            let indexArr = map.get(smalls[i][0])
            for (let index of indexArr){
                if (smalls[i] === big.slice(index, index + smalls[i].length)){
                    arr.push(index)
                }
            }
        }
        res.push(arr)
    }
    return res
};
console.log(multiSearch("mississippi", ["is", "ppi", "hi", "sis", "i", "ssippi"])); //[[1,4],[8],[5],[3],[1,4,7,10],[9]]