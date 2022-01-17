/**
 * @Author: dayTimeAffect
 * @Date: 2021/12/29
 */
/*
* https://leetcode-cn.com/problems/count-special-quadruplets/
* */
var countQuadruplets = function(nums) {
    let res = 0, len = nums.length
    const judge = (number, index, flag) => {
        if (len - index - 1 < 4 - number) return;
        for (let i = index + 1; i < len; i ++){
            if (number === 3) {
                res = res + (flag - nums[i] === 0)
            }
            else  judge(number + 1, i, flag + nums[i])
        }
    }
    judge(0, -1, 0)
    return res
};
var countQuadruplets = function(nums) {
    let res = 0, len = nums.length, map = {}
    for (let c = len - 2; c >= 2; c --){
        map[nums[c + 1]] = (map[nums[c + 1]] || 0) + 1
        for (let b = c - 1; b >= 1; b --){
            for (let a = b - 1; a >= 0; a --){
                res += (map[nums[a] + nums[b] + nums[c]] || 0)
            }
        }
    }
    return res
};
var countQuadruplets = function(nums) {
    let res = 0, len = nums.length, map = {}
    for (let b = len - 3; b >= 1; b --){
        for (let d = b + 2; d < len; d ++){
            map[nums[d] - nums[b + 1]] = (map[nums[d] - nums[b + 1]] || 0) + 1
        }
        for (let a = b - 1; a >= 0; a --){
            res += (map[nums[a] + nums[b]] || 0)
        }
    }
    return res
};
console.log(countQuadruplets([1,2,3,6]));
console.log(countQuadruplets([3,3,6,4,5]));
console.log(countQuadruplets([1,1,1,3,5]));
console.log(countQuadruplets([28,8,49,85,37,90,20,8]));

