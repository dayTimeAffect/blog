/**
 * @Author: dayTimeAffect
 * @Date: 2023/7/31
 */
/*
* https://leetcode.cn/problems/ms70jA/
* */
function Trie(){
    this.trie = [null, null]
    this.insert = function (num){
        let next = this.trie
        for (let i = 30; i >= 0; i --){
            let bit = (num >> i) & 1
            if (!next[bit]){
                next[bit] = [null, null]
            }
            next = next[bit]
        }
    }
    this.getMaximumXOR = function (num){
        let next = this.trie
        let res = 0
        for (let i = 30; i >= 0; i --){
            let bit = (num >> i) & 1
            if (next[Number(!bit)]){
                res = res | (1 << i)
                next = next[Number(!bit)]
            }else {
                next = next[bit]
            }
        }
        return res
    }
}
var findMaximumXOR = function(nums) {
    let trie = new Trie()
    let maxVal = 0
    for (let num of nums){
        trie.insert(num)
        maxVal = Math.max(maxVal, trie.getMaximumXOR(num))
    }
    return maxVal
};
console.log(findMaximumXOR([3,10,5,25,2,8]));
console.log(findMaximumXOR([14,70,53,83,49,91,36,80,92,51,66,70]));
