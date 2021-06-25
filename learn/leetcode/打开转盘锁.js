/**
 * @Author: dayTimeAffect
 * @Date: 2021/6/25
 */
/*
* https://leetcode-cn.com/problems/open-the-lock/
* */
var openLock = function(deadends, target) {
    // 广度优先遍历，一层一层来，遇见遍历过的值跳过，因为最先遍历到的肯定是层数最少的
    if (target === '0000') return 0
    if (deadends.includes(target) || deadends.includes('0000')) return -1
    const dead = new Set(deadends)
    let visitedSet = new Set()
    let visited = ['0000']
    let step = 0
    while (visited.length > 0){
        let temArr = []
        while (visited.length > 0){
            let cur = visited.shift()
            if (cur === target) return step
            let curArr = cur.split('')
            for (let i = 0; i < 4; i ++){
                let tem = turnOneLock([...curArr], i, 1)
                if (dead.has(tem)) continue;
                if (!visitedSet.has(tem)) {
                    temArr.push(tem)
                    visitedSet.add(tem)
                }
            }
            for (let i = 0; i < 4; i ++){
                let tem = turnOneLock([...curArr], i, -1)
                if (dead.has(tem)) continue;
                visitedSet.has(tem)
                if (!visitedSet.has(tem)) {
                    temArr.push(tem)
                    visitedSet.add(tem)
                }
            }
        }
        visited = temArr
        step ++
    }
    return -1
};
var turnOneLock = function (arr, index, dire){
    arr[index] = Number(arr[index]) + dire >= 0 ? (Number(arr[index]) + dire) % 10 : 9
    return arr.join('')
}
console.log(openLock([],'0018'));