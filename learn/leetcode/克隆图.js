/**
 * @Author: dayTimeAffect
 * @Date: 2022/6/20
 */
/*
* https://leetcode.cn/problems/clone-graph/
* */
/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

var cloneGraph = function(node) {
    if (!node) return node;
    let map = new Map()
    const dfs = (v) => {
        const nCopy = new Node(v.val);
        map.set(v, nCopy);
        (v.neighbors || []).forEach(v_n => {
            if (!map.has(v_n)){
                dfs(v_n)
            }
            nCopy.neighbors.push(map.get(v_n))
        })
    }
    dfs(node)
    return map.get(node)
};