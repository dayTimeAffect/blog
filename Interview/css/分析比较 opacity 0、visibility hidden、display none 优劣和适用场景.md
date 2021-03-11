### 分析比较 opacity: 0、visibility: hidden、display: none 优劣和适用场景

这三种css属性都能使元素变为不可见，但是具体形式不一样

+ `display:none`: 会让元素完全从渲染树中消失，渲染的时候不占据任何空间, 不能点击，
+ `visibility: hidden`:不会让元素从渲染树消失，渲染元素继续占据空间，只是内容不可见，不能点击
+ `opacity: 0`: 不会让元素从渲染树消失，渲染元素继续占据空间，只是内容不可见，可以点击

在性能方面`display:none`会产生回流，而`visibility: hidden`与`opacity: 0`只会产生重绘

场景应用方面，`display:none`应用于关闭展示特定页面区域；`visibility: hidden`是用于保留页面结构的的关闭展示页面某个区域；`opacity: 0`一般用于效果过渡