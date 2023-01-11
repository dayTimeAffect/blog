/**
 * @Author: dayTimeAffect
 * @Date: 2023/1/9
 */
/*
* https://leetcode.cn/problems/minimum-number-of-operations-to-reinitialize-a-permutation/
* */
var reinitializePermutation = function(n) {
    let handleCount = 0, target = [], perm = []
    for (let i = 0; i < n; i ++) {
        target[i] = [i]
        perm[i] = [i]
    }
    const targetStr = target.toString()
    while (true){
        handleCount ++
        const cur = []
        for (let i = 0; i < n; i ++){
            cur[i] = (i & 1) !== 0 ? perm[(n / 2) + (i - 1) / 2] : perm[i / 2]
        }
        if (targetStr === cur.toString()) break
        perm = cur
    }
    return handleCount
};
var reinitializePermutation = function(n) {
    //我们选择数字 1，初始时下标也是 1，每次将数字 1 移动到新的位置，直到数字 1 回到原来的位置，就可以得到最小的操作次数
    let handleCount = 0, i = 1
    while (true){
        if (i % 2 === 0){
            i = i / 2
        }else {
            i = n / 2 + (i - 1) / 2
        }
        handleCount ++
        if (i === 1) break
    }
    return handleCount
};
console.log(reinitializePermutation(2));
console.log(reinitializePermutation(4));
console.log(reinitializePermutation(6));
console.log(reinitializePermutation(8));
console.log(reinitializePermutation(10));
