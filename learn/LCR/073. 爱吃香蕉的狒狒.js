/**
 * @Author: dayTimeAffect
 * @Date: 2023/8/7
 */
/*
* https://leetcode.cn/problems/nZZqjQ/
* */
var minEatingSpeed = function(piles, h) {
    let lowS = 1, highS = Math.max(...piles)
    const getTime = (s) => {
        let sumS = 0
        for (let i = 0; i < piles.length; i ++){
            sumS += Math.ceil(piles[i] / s)
        }
        return sumS
    }
    while (lowS <= highS){
        let k = Math.floor((lowS + highS) / 2)
        if (getTime(k) <= h){
            highS = k - 1
        }else {
            lowS = k + 1
        }
    }
    return lowS
};
console.log(minEatingSpeed([3,6,7,11], 8));
console.log(minEatingSpeed([30,11,23,4,20], 6));