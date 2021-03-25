### 删除排序链表中的重复元素 II
>来源leetcode:[删除排序链表中的重复元素 II](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii/solution/ling-huo-chu-li-lian-biao-cao-zuo-by-cyi-3x25/)  

存在一个按升序排列的链表，给你这个链表的头节点 head ，请你删除链表中所有存在数字重复情况的节点，只保留原始链表中 没有重复出现 的数字。

返回同样按升序排列的结果链表。
```
输入：head = [1,2,3,3,4,4,5]
输出：[1,2,5]

链表中节点数目在范围 [0, 300] 内
-100 <= Node.val <= 100
题目数据保证链表已经按升序排列
```
```javascript
var deleteDuplicates1 = function(head) {
    //链表解法
    //判断是否head为空
    if (!head) return head
    //头节点可能就重复了，所以需要定义一个假节点，最后返回res.next即可
    let res = {next: head}
    let cur = res
    let mark = head.next
    let flag = false
    while (mark){
        if (cur.next.val === mark.val){
            flag = true
        }else if (flag){
            cur.next = mark
            flag = false
        }else{
            cur = cur.next
        }
        mark = mark.next
    }
    //防止最后的的节点发生重复而没有删除跳出了循环
    if (flag) cur.next = null
    return res.next
};

var deleteDuplicates2 = function(head) {
    //递归解法
    if (!head || !head.next) return head
    if (head.val === head.next.val){
        let cur = head.next
        while (cur && head.val === cur.val) cur = cur.next
        //头结点需要删除，需要返回的是 deleteDuplicates2(cur)
        return deleteDuplicates2(cur)
    }else{
        //头结点需要保留，因此返回的是 head
        head.next = deleteDuplicates2(head.next)
    }
    return head
};
```