/**
 * @Author: dayTimeAffect
 * @Date: 2022/10/12
 */
/*
* https://leetcode.cn/problems/number-of-islands/
* */
var numIslands = function(grid) {
    let m = grid.length, n = grid[0].length, res = 0
    for (let i = 0; i < m; i ++){
        for (let j = 0; j < n; j ++){
            if (grid[i][j] / 1 === -1 || grid[i][j] / 1 === 0) continue;
            grid[i][j] = -1
            res ++
            let tem = [[i, j]]
            while (tem.length){
                const [a, b] = tem.shift()
                if ((a + 1) < m && grid[a + 1][b] / 1 === 1){
                    grid[a + 1][b] = -1
                    tem.push([a + 1, b])
                }
                if ((a - 1) >= 0 && grid[a - 1][b] / 1 === 1){
                    grid[a - 1][b] = -1
                    tem.push([a - 1, b])
                }
                if (grid[a][b + 1] / 1 === 1){
                    grid[a][b + 1] = -1
                    tem.push([a, b + 1])
                }
                if (grid[a][b - 1] / 1 === 1){
                    grid[a][b - 1] = -1
                    tem.push([a, b - 1])
                }
            }
        }
    }
    return res
};
const grid = [
    ["1","1","1","1","1","0","1","1","1","1"],
    ["1","0","1","0","1","1","1","1","1","1"],
    ["0","1","1","1","0","1","1","1","1","1"],
    ["1","1","0","1","1","0","0","0","0","1"],
    ["1","0","1","0","1","0","0","1","0","1"],
    ["1","0","0","1","1","1","0","1","0","0"],
    ["0","0","1","0","0","1","1","1","1","0"],
    ["1","0","1","1","1","0","0","1","1","1"],
    ["1","1","1","1","1","1","1","1","0","1"],
    ["1","0","1","1","1","1","1","1","1","0"]
]

console.log(numIslands(grid));