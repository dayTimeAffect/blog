/**
 * @Author: dayTimeAffect
 * @Date: 2022/4/20
 */
/*
* https://leetcode-cn.com/problems/longest-absolute-file-path/
* */
var lengthLongestPath = function(input) {
    let pathArr = input.split('\n')
    let filePath = new Array()
    let maxLength = 0
    for (let i = 0; i < pathArr.length; i ++){
        const cur = pathArr[i]
        const curPath = cur.split("\t")
        filePath[curPath.length - 1] = curPath[curPath.length - 1]
        filePath.splice(curPath.length)
        if (filePath[curPath.length - 1].match(/\w+\.\w+/)){
            const tem = filePath.join("/")
            if (tem.length > maxLength) maxLength = tem.length
        }
    }
    return maxLength
};
console.log(lengthLongestPath("dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext"));