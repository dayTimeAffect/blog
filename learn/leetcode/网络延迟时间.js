/**
 * @Author: dayTimeAffect
 * @Date: 2021/8/2
 */
/*
* https://leetcode-cn.com/problems/network-delay-time/
* */
var networkDelayTime = function(times, n, k) {
    // Floyd 弗洛伊德算法
    // w存储每个点到其他点的最短路径
    let w = []
    for (let i = 0; i <= n; i ++){
        w[i] = []
        for (let j = 0; j <= n; j ++){
            w[i][j] = (i === j ? 0 : Infinity)
        }
    }
    for (let i = 0; i < times.length; i ++){
        const [u, v, path] = times[i]
        w[u][v] = path
    }

    for (let k = 1; k <= n; k ++){
        for (let i = 1; i <= n; i ++){
            for (let j = 1; j <= n; j ++){
                // 如果i, j两个点，对于每一个中间点k，w[i][k] + w[k][j] < w[i][j] 那么就可以更新最短路径
                if (w[i][k] + w[k][j] < w[i][j]){
                    w[i][j] = w[i][k] + w[k][j]
                }
            }
        }
    }
    let maxTime = -Infinity
    for (let i = 1; i <= n; i ++){
        maxTime = Math.max(w[k][i], maxTime)
    }
    return maxTime === Infinity ? -1 : maxTime
};

//2
// console.log(networkDelayTime([[2,1,1],[2,3,1],[3,4,1]], 4, 2));
//3
// console.log(networkDelayTime([[1,2,1],[2,1,3]], 2, 2));
//2
console.log(networkDelayTime([[1,2,1],[2,3,2],[1,3,2]], 3, 1));
//3
console.log(networkDelayTime([[1,2,1],[2,3,2],[1,3,4]], 3, 1));
//-1
// console.log(networkDelayTime([[1,2,1]], 2, 2));
//2
console.log(networkDelayTime([[2,1,1],[2,3,1],[3,4,1]], 4, 2));

