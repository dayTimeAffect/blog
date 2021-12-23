/**
 * @Author: dayTimeAffect
 * @Date: 2021/12/14
 */
/*
* https://leetcode-cn.com/problems/sort-list/
* */
const mergeTwoLists = (listOne, listTwo) => {
    let res = {next: null}, temOne = listOne, temTwo = listTwo, node = res
    while (temOne !== null || temTwo !== null){
        if (temOne === null){
            node.next = temTwo
            break;
        }
        if (temTwo === null){
            node.next = temOne
            break
        }
        if (temOne.val > temTwo.val){
            node.next = temTwo
            temTwo = temTwo.next
        }else{
            node.next = temOne
            temOne = temOne.next
        }
        node = node.next
    }
    return res.next
}
var sortList = function(head) {
    if (!head || !head.next) return head
    let left = head, right = head, node = null
    while (right !== null){
        right = right.next
        if (right){
            right = right.next
        }
        node = left
        left = left.next
    }
    node.next = null
    let listOne = head, listTwo = left
    if (head.next) listOne = sortList(head)
    if (left.next) listTwo = sortList(left)
    return mergeTwoLists(listOne, listTwo)
};
console.log(sortList({
    val: 4, next: {val: 3, next: {val: 2, next: {val: 1, next: {val: 5, next: null}}}}
}));