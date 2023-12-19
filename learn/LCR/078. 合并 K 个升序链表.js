/**
 * @Author: dayTimeAffect
 * @Date: 2023/8/21
 */
/*
* https://leetcode.cn/problems/vvXgSW/description/
* */
var mergeKLists = function(lists) {
    const merge = (head1, head2) => {
        let cur = {next: null}, head = cur
        while (head1 || head2){
            if (!head1){
                cur.next = head2
                break;
            }
            if (!head2){
                cur.next = head1
                break;
            }
            if (head1.val <= head2.val){
                cur.next = head1
                head1 = head1.next
            }else {
                cur.next = head2
                head2 = head2.next
            }
            cur = cur.next
        }
        return head.next
    }
    if (lists.length === 0) return null
    if (lists.length === 1) return lists[0]
    if (lists.length === 2) return merge(...lists)
    const mid = Math.floor(lists.length / 2)
    return merge(mergeKLists(lists.slice(0, mid)), mergeKLists(lists.slice(mid)))
};