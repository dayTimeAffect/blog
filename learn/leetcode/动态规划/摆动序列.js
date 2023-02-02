/**
 * @Author: dayTimeAffect
 * @Date: 2023/2/1
 */
/*
* https://leetcode.cn/problems/wiggle-subsequence/
* */
var wiggleMaxLength = function(nums) {
    // 贪心模拟算法
    const temNum = []
    for (let i = 0; i < nums.length; i ++){
        if (nums[i] !== nums[i + 1]) temNum.push(nums[i])
    }
    let flag = true, count = 1
    let flag_two = false, count_two = 1
    for (let i = 1; i < temNum.length; i ++){
        if (flag){
            if (temNum[i] > temNum[i - 1]){
                flag = !flag
                count ++
            }
        }else {
            if (temNum[i] < temNum[i - 1]){
                flag = !flag
                count ++
            }
        }
        if (flag_two){
            if (temNum[i] > temNum[i - 1]){
                flag_two = !flag_two
                count_two ++
            }
        }else {
            if (temNum[i] < temNum[i - 1]){
                flag_two = !flag_two
                count_two ++
            }
        }
    }
    return Math.max(count, count_two)
};
var wiggleMaxLength = function(nums) {
    // 动态规划
    const temNum = []
    for (let i = 0; i < nums.length; i ++){
        if (nums[i] !== nums[i + 1]) temNum.push(nums[i])
    }
    const up = new Array(temNum.length).fill(0);
    const down = new Array(temNum.length).fill(0);
    up[0] = 1
    down[0] = 1
    for (let i = 1; i < temNum.length; i ++){
        if (nums[i] > nums[i - 1]){
            up[i] = Math.max(up[i - 1], down[i - 1] + 1);
            down[i] = down[i - 1]
        }else {
            up[i] = up[i - 1]
            down[i] = Math.max(up[i - 1] + 1, down[i - 1]);
        }
    }
    return Math.max(up[temNum.length - 1], down[temNum.length - 1])
};
console.log(wiggleMaxLength([1,7,4,9,2,5]));
console.log(wiggleMaxLength([1,17,5,10,13,15,10,5,16,8]));
console.log(wiggleMaxLength([1,2,3,4,5,6,7,8,9]));
console.log(wiggleMaxLength([3,3,3,2,5]));
console.log(wiggleMaxLength([1,2,2,2,1]));
console.log(wiggleMaxLength([33,53,12,64,50,41,45,21,97,35,47,92,39,0,93,55,40,46,69,42,6,95,51,68,72,9,32,84,34,64,6,2,26,98,3,43,30,60,3,68,82,9,97,19,27,98,99,4,30,96,37,9,78,43,64,4,65,30,84,90,87,64,18,50,60,1,40,32,48,50,76,100,57,29,63,53,46,57,93,98,42,80,82,9,41,55,69,84,82,79,30,79,18,97,67,23,52,38,74,15]));