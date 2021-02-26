### [求1+2+…+n](https://leetcode-cn.com/problems/qiu-12n-lcof/)

难度中等

求 1+2+...+n ，要求不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）。

```javascript
/**
 * @param {number} n
 * @return {number}
 */
var sumNums = function(n) {
    // && 的短路特性
    return n && n + sumNums(n - 1)
};
```
