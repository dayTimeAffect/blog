/**
 * @Author: dayTimeAffect
 * @Date: 2023/5/29
 */
/*
* https://leetcode.cn/problems/NaqhDT/
* */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */
var CBTInserter = function(root) {
    this.root = root
    this.nextArr = [root]
    this.nextIndex = 0
    while (1){
        let flag = false, tem = []
        this.nextIndex = 0
        for (let i = 0; i < this.nextArr.length; i ++){
            if (!this.nextArr[i].left){
                flag = true
                break;
            }
            this.nextIndex ++
            if (!this.nextArr[i].right){
                flag = true
                break;
            }
            this.nextIndex ++
            tem.push(this.nextArr[i].left, this.nextArr[i].right)
        }
        if (!flag) {
            this.nextArr = tem
        }else {
            break;
        }
    }
    return null
};

/**
 * @param {number} v
 * @return {number}
 */
CBTInserter.prototype.insert = function(v) {
    let i = Math.floor(this.nextIndex / 2)
    let pointer = this.nextIndex % 2 === 0 ? 'left' : 'right'
    let res = this.nextArr[i]
    res[pointer] = {val: v, left: null, right: null}
    this.nextIndex ++
    if (this.nextIndex >= this.nextArr.length * 2){
        this.nextIndex = 0
        let tem = []
        for (let i = 0; i < this.nextArr.length; i ++){
            tem.push(this.nextArr[i].left, this.nextArr[i].right)
        }
        this.nextArr = tem
    }
    return res.val
};

/**
 * @return {TreeNode}
 */
CBTInserter.prototype.get_root = function() {
    return this.root
};

/**
 * Your CBTInserter object will be instantiated and called as such:
 * var obj = new CBTInserter(root)
 * var param_1 = obj.insert(v)
 * var param_2 = obj.get_root()
 */