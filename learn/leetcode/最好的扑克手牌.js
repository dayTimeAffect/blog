/**
 * @Author: dayTimeAffect
 * @Date: 2023/2/20
 */
/*
* https://leetcode.cn/problems/best-poker-hand/
* */
var bestHand = function(ranks, suits) {
    const suitsHandle = Array.from(new Set(suits))
    const ranksHandle = {}
    for (let i = 0; i < ranks.length; i ++){
        if (ranksHandle[ranks[i]]) ranksHandle[ranks[i]] ++
        else ranksHandle[ranks[i]] = 1
    }
    if (suitsHandle.length === 1){
        return 'Flush'
    }
    if (Object.keys(ranksHandle).length === 1 || Object.keys(ranksHandle).length === 2 || (Object.keys(ranksHandle).length === 3 && Math.max(...Object.values(ranksHandle)) === 3)){
        return "Three of a Kind"
    }
    if (Object.keys(ranksHandle).length === 4 || (Object.keys(ranksHandle).length === 3 && Math.max(...Object.values(ranksHandle)) === 2)){
        return "Pair"
    }
    return "High Card"
};
console.log(bestHand([4,2,2,4,5],["d","a","a","b","c"]));