/**
 * @Author: dayTimeAffect
 * @Date: 2022/6/7
 */
/*
* https://leetcode.cn/problems/koko-eating-bananas/
* */
var minEatingSpeed = function(piles, h) {
    const getTime = (s, piles) => {
        return piles.reduce((sum, cur) => {
            return sum + Math.ceil((cur / s))
        }, 0)
    }
    let min = 1, max = Math.max(...piles)
    while (min < max){
        const s = Math.floor((min + max) / 2)
        const t = getTime(s, piles)
        if (t <= h){
            max = s
        }else{
            min = s + 1
        }
    }
    return min
};