/**
 * @Author: dayTimeAffect
 * @Date: 2022/11/15
 */
/*
* https://leetcode.cn/problems/maximum-units-on-a-truck/
* */
var maximumUnits = function(boxTypes, truckSize) {
    let res = 0, flag = truckSize
    boxTypes.sort((a, b) => b[1] - a[1])
    for (let i = 0; i < boxTypes.length && flag > 0; i ++){
        const [curNum, curCapacity] = boxTypes[i]
        if (flag >= curNum){
            res += curNum * curCapacity
        }else {
            res += flag * curCapacity
        }
        flag -= curNum
    }
    return res
};
console.log(maximumUnits([[1,3],[2,2],[3,1]], 4));