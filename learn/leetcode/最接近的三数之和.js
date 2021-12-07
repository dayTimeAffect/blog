/**
 * @Author: dayTimeAffect
 * @Date: 2021/11/24
 */
/*
* https://leetcode-cn.com/problems/3sum-closest/
* */
var threeSumClosest = function(nums, target) {
    let len = nums.length - 1, res = Infinity
    nums.sort((a, b) => a -b)
    for (let i = 0; i <= len - 2; i ++){
        let tem = nums[i]
        let m = i + 1, n = len
        while (m < n){
            let sum = tem + nums[m] + nums[n]
            if (sum < target){
                m ++
            }else {
                n --
            }
            if (Math.abs(target - sum) < Math.abs(target - res)) res = sum
        }
    }
    return res
};
console.log(threeSumClosest([-1,2,1,-4], 1));
console.log(threeSumClosest([0, 0 , 0], 1));