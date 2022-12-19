/**
 * @Author: dayTimeAffect
 * @Date: 2022/12/8
 */
var findErrorNums = function(nums) {
    const sortNums = new Array(nums.length + 1).fill(0), res = []
    sortNums[0] = 1
    for (let i = 0; i < nums.length; i ++){
        if (sortNums[nums[i]]){
            res[0] = nums[i]
        }else{
            sortNums[nums[i]] = 1
        }
    }
    res[1] = sortNums.indexOf(0)
    return res
};