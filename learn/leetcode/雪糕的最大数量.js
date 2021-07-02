/**
 * @Author: dayTimeAffect
 * @Date: 2021/7/2
 */
/*
* https://leetcode-cn.com/problems/maximum-ice-cream-bars/
* */
var maxIceCream = function(costs, coins) {
    // 给雪糕按价格排序
    let sortCosts = costs.sort((a, b) => a - b)
    let res = 0
    let tem = coins
    for (let i = 0 ; i < sortCosts.length; i ++){
        if (tem >= sortCosts[i]) {
            res ++
            tem -= sortCosts[i]
        }else{
            return res
        }
    }
    return res
};
console.log(maxIceCream([1, 3, 2, 4, 1], 7));