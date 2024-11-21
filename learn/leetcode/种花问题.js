/**
 * @Author: dayTimeAffect
 * @Date: 2024/6/26
 */
/*
* https://leetcode.cn/problems/can-place-flowers/description/
* */
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    if (flowerbed.length === 1 && flowerbed[0] === 0 && n === 1) return true
    let flag = 0
    for (let i = 0; i < flowerbed.length; i ++){
        if (flowerbed[i] === 0){
            if (i === 0 && flowerbed[i + 1] === 0){
                flag ++
                i = i + 1
            }else if (i === flowerbed.length - 1 && flowerbed[i - 1] === 0){
                flag ++
                i = i + 1
            }else if (flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0){
                flag ++
                i = i + 1
            }
        }
    }
    return flag >= n
};