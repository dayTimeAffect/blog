/**
 * @Author: dayTimeAffect
 * @Date: 2022/5/12
 */
/*
* https://leetcode.cn/problems/delete-columns-to-make-sorted/
* */
var minDeletionSize = function(strs) {
    let len = strs.length, col = strs[0].length, res = 0
    for (let i = 0; i < col; i ++){
        for (let j = 1; j < len; j ++){
            if (strs[j][i] < strs[j - 1][i]) {
                res ++
                break;
            }
        }
    }
    return res
};
console.log(minDeletionSize(["abc", "bce", "cae"]));
console.log(minDeletionSize(["cba","daf","ghi"]));
console.log(minDeletionSize( ["a","b"]));
console.log(minDeletionSize( ["zyx","wvu","tsr"]));