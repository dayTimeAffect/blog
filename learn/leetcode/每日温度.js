/**
 * @Author: dayTimeAffect
 * @Date: 2022/11/2
 */
/*
* https://leetcode.cn/problems/daily-temperatures/
* */
var dailyTemperatures = function(temperatures) {
    let len = temperatures.length, answer = new Array(len).fill(0)
    for (let i = len - 1; i >= 0; i --){
        for (let j = i; j < len; j ++){
            if (temperatures[j] > temperatures[i]){
                answer[i] = j - i
                break;
            }
        }
    }
    return answer
};
var dailyTemperatures = function(temperatures) {
    let len = temperatures.length, answer = new Array(len).fill(0), list = [0], listIndex = 0, cur
    for (let i = 1; i < len; i ++){
        while (listIndex >= 0 && temperatures[i] > temperatures[list[listIndex]]){
            cur = list[listIndex --]
            answer[cur] = i - cur
        }
        list[++ listIndex] = i
    }
    return answer
};
console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));