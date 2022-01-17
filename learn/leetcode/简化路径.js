/**
 * @Author: dayTimeAffect
 * @Date: 2022/1/6
 */
/*
* https://leetcode-cn.com/problems/simplify-path/
* */
var simplifyPath = function(path) {
    let pathArr = path.split('/'), len = pathArr.length, res = []
    for (let i = 0; i < len; i ++){
        if (!pathArr[i] || pathArr[i] === '.') continue;
        if (pathArr[i] === '..') res.pop()
        else res.push(pathArr[i])
    }
    return '/' + res.join('/')
};
console.log(simplifyPath('/home/'));
console.log(simplifyPath('/../'));
console.log(simplifyPath('/home//foo/'));
console.log(simplifyPath('/a/./b/../../c/'));
console.log(simplifyPath('/a/../../b/../c//.//'));