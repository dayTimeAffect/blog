/**
 * @Author: dayTimeAffect
 * @Date: 2023/5/24
 */
/*
* https://leetcode.cn/problems/iIQa4I/
* */
var dailyTemperatures = function(temperatures) {
    let res = [], len = temperatures.length
    let nextMax = {}
    nextMax[len - 1] = Infinity
    temperatures[Infinity] = Infinity
    res[len - 1] = 0
    const findNextMax = (i) => {
        if (temperatures[i] < temperatures[i + 1]) {
            nextMax[i] = i + 1
        }else {
            let tem = nextMax[i + 1]
            while (temperatures[i] >= temperatures[tem]){
                tem = nextMax[tem]
            }
            nextMax[i] = tem
        }
        return nextMax[i]
    }
    for (let i = len - 2; i >= 0; i --){
        findNextMax(i)
        res[i] = nextMax[i] === Infinity ? 0 : nextMax[i] - i
    }
    console.log(nextMax)
    return res
};
// console.log(dailyTemperatures([73,74,75,71,69,72,76,73]));
console.log(dailyTemperatures([34,80,80,34,34,80,80,80,80,34]));