/*
* https://leetcode-cn.com/problems/xor-operation-in-an-array/
* */
var xorOperation = function(n, start) {
    // 循环一次即可
    let res = start
    for (let i = 1; i < n; i ++){
        res = res ^ (start + 2 * i)
    }
    return res
};
console.log(xorOperation(1, 7));