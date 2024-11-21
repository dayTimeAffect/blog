/**
 * @Author: dayTimeAffect
 * @Date: 2024/5/28
 */
/*
* https://leetcode.cn/problems/find-the-peaks/description/?envType=daily-question&envId=2024-05-28
* */
/**
 * @param {number[]} mountain
 * @return {number[]}
 */
var findPeaks = function(mountain) {
    if (mountain.length < 3) return []
    let res = []
    for (let i = 1; i < mountain.length; i ++){
        if (mountain[i] > mountain[i - 1] && mountain[i] > mountain[i + 1]){
            res.push(i)
        }
    }
    return res
};