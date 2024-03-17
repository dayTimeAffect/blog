/**
 * @Author: dayTimeAffect
 * @Date: 2024/3/4
 */
/*
* https://leetcode.cn/problems/master-mind-lcci/description/
* */
/**
 * @param {string} solution
 * @param {string} guess
 * @return {number[]}
 */
var masterMind = function(solution, guess) {
    let sure = 0, probably = 0, solutionMap = {}, probablyMap = {}
    for (let i = 0; i < 4; i ++){
        solutionMap[solution[i]] = (solutionMap[solution[i]] || 0) + 1
        probablyMap[guess[i]] = (probablyMap[guess[i]] || 0) + 1
        if (solution[i] === guess[i]){
            sure ++
            solutionMap[solution[i]] --
            probablyMap[guess[i]] --
        }
    }
    for(let key in solutionMap){
        if (solutionMap[key] && probablyMap[key]){
            probably += Math.min(solutionMap[key], probablyMap[key])
        }
    }
    return [sure, probably]
};
console.log(masterMind('RGRB','BBBY'));
console.log(masterMind('YBBY','GYYB'));