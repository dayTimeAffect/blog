/**
 * @Author: dayTimeAffect
 * @Date: 2023/8/28
 */
/*
* https://leetcode.cn/problems/uUsW3B/
* */
var combine = function(n, k) {
    let res = []
    const handle = (tem, index) => {
        if (tem.length === k) return (res.push([...tem]))
        if (index === n + 1) return ;
        for (let i = index; i <= n; i ++){
            tem.push(i)
            handle(tem, i + 1)
            tem.pop()
        }
    }
    handle([], 1)
    return res
};
console.log(combine(4, 2));
console.log(combine(1, 1));