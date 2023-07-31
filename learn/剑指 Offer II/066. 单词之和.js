/**
 * @Author: dayTimeAffect
 * @Date: 2023/7/24
 */
/*
* https://leetcode.cn/problems/z1R5dt/
* */
/**
 * Initialize your data structure here.
 */
var MapSum = function() {
    this.map = {

    }
    this.root = {
        children: {}
    }
    this.add = function (key, val){
        let next = this.root
        for (let v of key){
            if (next.children[v]){
                next.children[v].valArr.push(val)
                next = next.children[v]
            }else {
                next.children[v] = {
                    cur: v,
                    children: {},
                    valArr: [val]
                }
                next = next.children[v]
            }
        }
    }
    this.findPreFixSum = function (prefix){
        let next = this.root
        for (let v of prefix){
            if (next.children[v]){
                next = next.children[v]
            }else {
                return []
            }
        }
        return next.valArr
    }
};

/**
 * @param {string} key
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
    if (this.map[key]){
        this.map[key].val = val
    }else {
        this.map[key] = { val: val }
        this.add(key, this.map[key])
    }
};

/**
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
    console.log(this.findPreFixSum(prefix).reduce((sum, next) => {
        console.log(sum, next)
        return next.val + sum
    }, 0))
    this.findPreFixSum(prefix).reduce((sum, next) => next.val + sum, 0)
};

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */