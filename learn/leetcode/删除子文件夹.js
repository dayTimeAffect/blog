/**
 * @Author: dayTimeAffect
 * @Date: 2023/2/8
 */
/*
* https://leetcode.cn/problems/remove-sub-folders-from-the-filesystem/
* */
var removeSubfolders = function(folder) {
    const preTree = {}, res = []
    folder.sort((a, b) => a.length - b.length)
    const handle = (data, tree) => {
        const arr = data.split('/')
        let curTree = tree
        for (let i = 1; i < arr.length; i ++){
            if (!curTree[arr[i]]){
                curTree[arr[i]] = {}
            }
            curTree = curTree[arr[i]]
            if (curTree.isLeafNode) return true
        }
        curTree.isLeafNode = true
        return false
    }
    for (let i = 0; i < folder.length; i ++){
        const flag = handle(folder[i], preTree)
        if (!flag) res.push(folder[i])
    }
    return res
};
console.log(removeSubfolders(["/a","/a/b","/c/d","/c/d/e","/c/f"]));
console.log(removeSubfolders(["/a","/a/b/c","/a/b/d"]));
console.log(removeSubfolders(["/a/b/c","/a/b/ca","/a/b/d"]));