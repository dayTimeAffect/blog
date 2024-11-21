/**
 * @Author: dayTimeAffect
 * @Date: 2024/6/20
 */
/*
* https://leetcode.cn/problems/number-of-beautiful-pairs/description/?envType=daily-question&envId=2024-06-20
* */
/**
 * @param {number[]} nums
 * @return {number}
 */
var countBeautifulPairs = function(nums) {
    function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b);
    }
    let res = 0;
    let cnt = new Array(10).fill(0);
    for (let num of nums){
        for (let y = 1; y <= 9; y++) {
            if (gcd(num % 10, y) === 1) {
                res += cnt[y];
            }
        }
        while (num >= 10) {
            num = Math.floor(num / 10);
        }
        cnt[num] ++;
    }
    return res
};
