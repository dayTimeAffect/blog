/**
 * @Author: dayTimeAffect
 * @Date: 2024/6/26
 */
/*
* https://leetcode.cn/problems/task-scheduler/description/
* */
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    if (n === 0 || tasks.length <= 1) return tasks.length
    let map = {}
    for (let i = 0; i < tasks.length; i ++){
        if (!map[tasks[i]]) map[tasks[i]] = 0
        map[tasks[i]] ++
    }
    let tasks_tem = Object.keys(map).sort((a, b) => map[b] - map[a])
    let flag = -1, i = 0, res = 0
    while (tasks_tem.length !== 0){
        map[tasks_tem[i]] --
        flag ++
        res ++
        if (flag >= n || (i + 1) % tasks_tem.length === 0){
            if (map[tasks_tem[i]] < map[tasks_tem[i + 1]]){
                tasks_tem = tasks_tem.sort((a, b) => map[b] - map[a]).filter(v => map[v])
            }
            tasks_tem = tasks_tem.filter(v => map[v])
            if (tasks_tem.length){
                res += (n - flag)
                i = 0
                flag = -1
            }else {
                break;
            }
        }else {
            i = (i + 1) % tasks_tem.length
        }
    }
    return res
};
console.log(leastInterval(["A","A","A","A","A","A","B","C","D","E","F","G"], 2))
console.log(leastInterval(["A","A","A","B","B","B"], 2))
console.log(leastInterval(["A","A","A","B","B","B", "C","C","C", "D", "D", "E"], 2))
console.log(leastInterval(["A","A","A","B","B","B","C","D","E","F","G","H","I","J","K"], 7))