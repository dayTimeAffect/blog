/**
 * @Author: dayTimeAffect
 * @Date: 2023/4/17
 */
var addTwoNumbers = function(l1, l2) {
    let s1 = [], s2 = [], tem = 0, node = null
    while (l1){
        s1.push(l1.val)
        l1 = l1.next
    }
    while (l2){
        s2.push(l2.val)
        l2 = l2.next
    }
    const getValAndCarry = (curVal) => {
        let val = curVal, carry = 0
        if (val >= 10){
            carry = 1
            val = val - 10
        }else {
            carry = 0
        }
        return ({ val, carry })
    }
    while (s1.length || s2.length){
        let curVal = tem
        if (s1.length) curVal += s1.pop()
        if (s2.length) curVal += s2.pop()
        let {val, carry} = getValAndCarry(curVal)
        tem = carry
        node = {val: val, next: node}
    }
    if (tem) return {val: tem, next: node}
    return node
};