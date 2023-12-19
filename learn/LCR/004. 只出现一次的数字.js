/**
 * @Author: dayTimeAffect
 * @Date: 2023/2/15
 */
/*
* https://leetcode.cn/problems/WGki4K/
* */
var singleNumber = function(nums) {
    let map = {}
    for (let i = 0; i < nums.length; i ++){
        if (!map[nums[i]]) map[nums[i]] = 0
        map[nums[i]] ++
    }
    return nums.find(v => map[v] === 1)
};
var singleNumber = function(nums) {
    let res = 0
    for (let i = 0; i < 32; i ++){
        let tem = 0
        for (let num of nums){
            tem += num >> i & 1
        }
        res |= tem % 3 << i
    }
    return res
};
console.log(singleNumber([0,1,0,1,0,1,100]));