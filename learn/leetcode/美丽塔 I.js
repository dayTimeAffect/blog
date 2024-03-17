/**
 * @Author: dayTimeAffect
 * @Date: 2024/1/24
 */
/*
* https://leetcode.cn/problems/beautiful-towers-i/description/?envType=daily-question&envId=2024-01-24
* */
/**
 * @param {number[]} maxHeights
 * @return {number}
 */
var maximumSumOfHeights = function(maxHeights) {
    let max = 0
    maxHeights[-1] = 0
    maxHeights[maxHeights.length] = 0
    const handle = (index) => {
        let res = maxHeights[index], temp = maxHeights[index]
        for (let i = index - 1; i >= 0; i --){
            temp = Math.min(temp, maxHeights[i])
            res += temp
        }
        temp = maxHeights[index]
        for (let i = index + 1; i < maxHeights.length; i ++){
            temp = Math.min(temp, maxHeights[i])
            res += temp
        }
        return res
    }
    for (let i = 0; i < maxHeights.length - 1; i ++){
        if (maxHeights[i] >= maxHeights[i - 1] && maxHeights[i] >= maxHeights[i + 1]){
            max = Math.max(max, handle(i))
        }
    }
    return max
};
console.log(maximumSumOfHeights([5,3,4,1,1]));
console.log(maximumSumOfHeights([6,5,3,9,2,7]));
console.log(maximumSumOfHeights([3,2,5,5,2,3]));