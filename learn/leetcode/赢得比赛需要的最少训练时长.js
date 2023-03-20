/**
 * @Author: dayTimeAffect
 * @Date: 2023/3/13
 */
/*
* https://leetcode.cn/problems/minimum-hours-of-training-to-win-a-competition/
* */
var minNumberOfHours = function(initialEnergy, initialExperience, energy, experience) {
    const energySum = energy.reduce((c, n) => c + n, 0)
    let record = energySum >= initialEnergy ? energySum - initialEnergy + 1 : 0
    let temExperience = initialExperience
    for (let i = 0; i < experience.length; i ++){
        if (temExperience <= experience[i]){
            record += experience[i] - temExperience + 1
            temExperience += experience[i] - temExperience + 1
        }
        temExperience += experience[i]
    }
    return record
};
console.log(minNumberOfHours(5, 3, [1, 4, 3, 2], [2, 6, 3, 1]));
console.log(minNumberOfHours(2, 4, [1], [3]));
console.log(minNumberOfHours(5, 3, [1, 4], [2, 5]));
console.log(minNumberOfHours(1, 1, [1,1,1,1], [1,1,1,50]));


