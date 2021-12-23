/**
 * @Author: dayTimeAffect
 * @Date: 2021/12/14
 */
/*
* https://leetcode-cn.com/problems/permutations/
* */
var permute = function(nums) {
    let res = []
    const combination = (cur, nextArr) => {
        if (nextArr.length === 1) return res.push([...cur, ...nextArr])
        for (let i = 0; i <= nextArr.length - 1; i ++){
            let tem = [...nextArr]
            tem.splice(i, 1)
            combination([...cur, nextArr[i]], tem)
        }
    }
    combination([], nums)
    return res
};

var permute = function(nums) {
    const res = [], path = [], len = nums.length;
    function backtracking(used) {
        if(path.length === len) return res.push([...path]);
        for (let i = 0; i < len; i++ ) {
            if(used[i]) continue;
            path.push(nums[i]);
            used[i] = true; // 同支
            backtracking(used);
            path.pop();
            used[i] = false;
        }
    }
    backtracking([]);
    return res;
};

console.log(permute([1, 2, 3]));