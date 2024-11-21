/**
 * @Author: dayTimeAffect
 * @Date: 2024/5/16
 */
/*
* https://leetcode.cn/problems/single-number-ii/solutions/746993/zhi-chu-xian-yi-ci-de-shu-zi-ii-by-leetc-23t6/
* */
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // 将对应二进制的每一位的数相加，然后对3取余，剩下的就是只出现一次的数在该位的值
    let res = 0
    for (let i = 0; i < 32; i ++){
        let tem = 0
        for (let num of nums){
            tem = tem + (num >> i & 1)
        }
        res = res | ((tem % 3) << i)
    }
    return res
};
console.log(singleNumber([1,1,1,2,2,2,3]));