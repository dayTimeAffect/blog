/**
 * @Author: dayTimeAffect
 * @Date: 2023/1/31
 */
/*
* https://leetcode.cn/problems/check-if-matrix-is-x-matrix/
* */
var checkXMatrix = function(grid) {
    const n = grid.length
    for (let i = 0; i < n; i ++){
        for (let j = 0; j < n; j ++){
            if ((i === j || (i + j + 1) === n) && grid[i][j] === 0){
                return false
            }
            if (i !== j && (i + j + 1) !== n && grid[i][j] !== 0){
                return false
            }
        }
    }
    return true
};
console.log(checkXMatrix([[2,0,0,1],[0,3,1,0],[0,5,2,0],[4,0,0,2]]));
console.log(checkXMatrix([[5,7,0],[0,3,1],[0,5,0]]));