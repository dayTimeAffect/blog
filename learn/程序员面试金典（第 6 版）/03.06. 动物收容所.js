/**
 * @Author: dayTimeAffect
 * @Date: 2023/12/13
 */
/*
* https://leetcode.cn/problems/animal-shelter-lcci/
* */

var AnimalShelf = function() {
    this.queue = []
};

/**
 * @param {number[]} animal
 * @return {void}
 */
AnimalShelf.prototype.enqueue = function(animal) {
    this.queue.push(animal)
};

/**
 * @return {number[]}
 */
AnimalShelf.prototype.dequeueAny = function() {
    if (!this.queue.length) return [-1, -1]
    return this.queue.shift()
};

/**
 * @return {number[]}
 */
AnimalShelf.prototype.dequeueDog = function() {
    if (!this.queue.length) return [-1, -1]
    for (let i = 0; i < this.queue.length; i ++){
        if (this.queue[i][1] === 1){
            return this.queue.splice(i, 1)[0]
        }
    }
    return [-1, -1]
};

/**
 * @return {number[]}
 */
AnimalShelf.prototype.dequeueCat = function() {
    if (!this.queue.length) return [-1, -1]
    for (let i = 0; i < this.queue.length; i ++){
        if (this.queue[i][1] === 0){
            return this.queue.splice(i, 0)[0]
        }
    }
    return [-1, -1]
};

/**
 * Your AnimalShelf object will be instantiated and called as such:
 * var obj = new AnimalShelf()
 * obj.enqueue(animal)
 * var param_2 = obj.dequeueAny()
 * var param_3 = obj.dequeueDog()
 * var param_4 = obj.dequeueCat()
 */