/**
 * @Author: dayTimeAffect
 * @Date: 2022/1/26
 */
/*
* https://leetcode-cn.com/problems/remove-linked-list-elements/
* */
var removeElements = function(head, val) {
    let res = {next: head}
    let tem = res
    while (tem.next){
        if (tem.next.val === val){
            tem.next = tem.next.next
        }else{
            tem = tem.next
        }
    }
    return res.next
};