/**
 * @Author: dayTimeAffect
 * @Date: 2021/7/27
 */
var findSecondMinimumValue = function(root) {
    if (!root.left || !root.right) return -1
    let SecondMin = middle(root, root.val)
    return SecondMin === Infinity ? -1 : SecondMin
};
var middle = (root, target) => {
    if (root.val > target) return root.val
    if (!root.left || !root.right) return Infinity
    return Math.min(middle(root.left, target), middle(root.right, target))
}
