/**
 * @Author: dayTimeAffect
 * @Date: 2024/3/17
 */
/*
* https://leetcode.cn/problems/lru-cache-lcci/description/
* */
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.createNode = (key, value) => {
        return {
            key,
            value,
            next: null,
            prev: null
        }
    }
    this.moveToHead = (node) => {
        if (!node) return;
        if (node.key === 'head') return;
        if (node.prev.key === 'head') return;
        if (this.last === node) this.last = this.last.prev
        while (node.prev.key !== 'head'){
            let temp = node.prev
            node.prev = temp.prev
            temp.prev.next = node
            temp.next = node.next
            if (temp.next){
                temp.next.prev = temp
            }
            node.next = temp
            temp.prev = node
        }
    }
    this.capacity = capacity
    this.length = 0
    this.hash = {}
    this.last = this.createNode('head', 'head')
    this.head = this.last
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    let node = this.hash[key]
    let res = node ? node.value : -1
    debugger
    this.moveToHead(node)
    return res
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.hash[key]){
        this.hash[key].value = value
        this.moveToHead(this.hash[key])
        return
    }
    if (this.length === this.capacity){
        let last = this.last
        this.hash[last.key] = null
        last.prev.next = null
        this.last = last.prev
        this.length --
    }
    let node = this.createNode(key, value)
    node.next = this.head.next
    if (node.next){
        node.next.prev = node
    }
    this.head.next = node
    node.prev = this.head
    this.hash[key] = node
    this.length ++
    if (this.length === 1){
        this.last = node
    }
};

function print (node){
    let res = []
    while (node){
        res.push(node.key)
        node = node.next
    }
    return res
}
/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// let lRUCache = new LRUCache(2);
// console.log(lRUCache.put(1, 1),print(lRUCache.head));
// console.log(lRUCache.put(2, 2),print(lRUCache.head));
// console.log(lRUCache.get(1),print(lRUCache.head));
// console.log(lRUCache.put(3, 3),print(lRUCache.head));
// console.log(lRUCache.get(2),print(lRUCache.head));
// console.log(lRUCache.put(4, 4),print(lRUCache.head));
// console.log(lRUCache.get(1),print(lRUCache.head));
// console.log(lRUCache.get(3),print(lRUCache.head));
// console.log(lRUCache.get(4),print(lRUCache.head));

// let lRUCache = new LRUCache(2);
// console.log(lRUCache.put(2, 1));
// console.log(lRUCache.put(2, 2));
// console.log(lRUCache.get(2));
// console.log(lRUCache.put(1, 1));
// console.log(lRUCache.put(4, 1));
// console.log(lRUCache.get(2));
