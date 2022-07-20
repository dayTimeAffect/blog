/**
 * @Author: dayTimeAffect
 * @Date: 2022/6/27
 */
/*
* https://leetcode.cn/problems/WhsWhI/
* */
var longestConsecutive = function(nums) {
    if (nums.length <= 1) return nums.length
    const set = new Set(nums)
    let res = 0
    for (const cur of nums){
        if (set.has(cur - 1)) continue;
        let tem = 1
        while (set.has(cur + tem)){
            tem ++
        }
        res = Math.max(res, tem)
    }
    return res
};
console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]));
console.log(longestConsecutive([1,2,0,1]));