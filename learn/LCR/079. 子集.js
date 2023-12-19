/**
 * @Author: dayTimeAffect
 * @Date: 2023/8/28
 */
/*
* https://leetcode.cn/problems/TVdhkn/
* */
var subsets = function(nums) {
    let res = [[]]
    const handle = (index, tem) => {
        if (index === nums.length) return;
        for (let i = index; i < nums.length; i ++){
            tem.push(nums[i])
            res.push([...tem])
            handle(i + 1, [...tem])
            tem.pop()
        }
    }
    handle(0, [])
    return res
};
console.log(subsets([1,2,3]));
console.log(subsets([1]));