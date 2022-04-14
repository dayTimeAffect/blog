/**
 * @Author: dayTimeAffect
 * @Date: 2022/4/12
 */
/*
* https://leetcode-cn.com/problems/M99OJA/
* */
var partition = function(s) {
    let len = s.length, map = new Array(len).fill(true).map(v => new Array(len).fill(true)), res = []
    for (let i = len - 1; i >= 0; i --){
        for (let j = i + 1; j < len; j ++){
            map[i][j] = (s[i] === s[j]) && map[i + 1][j - 1]
        }
    }
    const tem = []
    const dfs = index => {
        if (index === len){
            return res.push([...tem])
        }
        for (let i = index; i < len; i ++){
            if (map[index][i]){
                tem.push(s.substring(index, i + 1))
                dfs(i + 1)
                tem.pop()
            }
        }
    }
    dfs(0)
    return res
};
console.log(partition("google"));