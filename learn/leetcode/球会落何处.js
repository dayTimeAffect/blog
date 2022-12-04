/**
 * @Author: dayTimeAffect
 * @Date: 2022/11/15
 */
/*
* https://leetcode.cn/problems/where-will-the-ball-fall/?envType=study-plan&id=leetcode_75_level_2&plan=leetcode_75&plan_progress=1hf250c
* */
var findBall = function(grid) {
    const m = grid.length, n = grid[0].length
    let tem = new Array(m).fill(0).map(() => new Array(n).fill(0))
    let dp = []
    const dfs = (i, j, m, n) => {
        if (i >= m) return j
        if (tem[i][j]) return tem[i][j]
        if (j === 0 && grid[i][j] === -1){
            tem[i][j] = -1
        } else if (j === n - 1 && grid[i][j] === 1){
            tem[i][j] = -1
        } else if (grid[i][j] === 1 && grid[i][j + 1] === -1){
            tem[i][j] = -1
        } else if (grid[i][j] === -1 && grid[i][j - 1] === 1){
            tem[i][j] = -1
        }else if (grid[i][j] === 1 && grid[i][j + 1] === 1){
            tem[i][j] = dfs(i + 1, j + 1, m, n)
        }else if (grid[i][j] === -1 && grid[i][j - 1] === -1){
            tem[i][j] = dfs(i + 1, j - 1, m, n)
        }
        return tem[i][j]
    }
    for (let i = 0; i < n; i ++){
        dp.push(dfs(0, i, m, n))
    }
    return dp
};
console.log(findBall([[1,1,1,-1,-1],[1,1,1,-1,-1],[-1,-1,-1,1,1],[1,1,1,1,-1],[-1,-1,-1,-1,-1]]));
console.log(findBall([[1,1,1,1,1,1],[-1,-1,-1,-1,-1,-1],[1,1,1,1,1,1],[-1,-1,-1,-1,-1,-1]]));