/**
 * @Author: dayTimeAffect
 * @Date: 2022/8/15
 */
/*
* https://leetcode.cn/problems/design-circular-deque/
* */
/**
 * @param {number} k
 */
var MyCircularDeque = function(k) {
    this.createNode = (val) => {
        return ({val: val, next: null, prev: null})
    }
    this.insertNode = (cur, prev, next) => {
        prev.next = cur
        cur.prev = prev
        next.prev = cur
        cur.next = next
    }
    this.deleteNode = (cur) => {
        cur.prev.next = cur.next
        cur.next.prev = cur.prev
    }
    this.font = this.createNode(null)
    this.rear = this.createNode(null)
    this.font.next = this.rear
    this.rear.prev = this.font
    this.size = 0
    this.maxLen = k

};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
    if (this.isFull()){
        return false
    }
    let tem = this.createNode(value)
    this.insertNode(tem, this.font, this.font.next)
    this.size ++
    return true
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {
    if (this.isFull()){
        return false
    }
    let tem = this.createNode(value)
    this.insertNode(tem, this.rear.prev, this.rear)
    this.size ++
    return true
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
    if (this.isEmpty()){
        return false
    }
    this.deleteNode(this.font.next)
    this.size --
    return true
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {
    if (this.isEmpty()){
        return false
    }
    this.deleteNode(this.rear.prev)
    let a = this.font
    while (a.next){
        console.log(a.val)
        a = a.next
    }
    this.size --
    return true
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
    if (this.isEmpty()){
        return -1
    }
    return this.font.next.val
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
    if (this.isEmpty()){
        return -1
    }
    return this.rear.prev.val
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
    return this.size === 0
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
    return this.size === this.maxLen
};

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */
let obj = new MyCircularDeque(5)
obj.insertFront(7)
obj.insertLast(0)
obj.insertLast(3)
obj.insertFront(9)
console.log(obj.deleteLast());
console.log(obj.getRear());