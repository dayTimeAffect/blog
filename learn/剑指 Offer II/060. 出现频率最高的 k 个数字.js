/**
 * @Author: dayTimeAffect
 * @Date: 2023/7/10
 */
/*
* https://leetcode.cn/problems/g5c51o/
* */
var topKFrequent = function(nums, k) {
    const map = {};
    let mapLength = 0
    for (let i = 0; i < nums.length; i ++){
        if (map[nums[i]]){
            map[nums[i]] ++
        } else{
            mapLength ++
            map[nums[i]] = 1
        }
    }
    return Object.entries(map).sort((a, b) => b[1] - a[1]).slice(0, k).map(v => v[0] / 1)
};
console.log(topKFrequent([1,1,1,2,2,3], 2));
console.log(topKFrequent([1], 1));