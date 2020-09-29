### 如何使chrome 显示 12px 以下的字体

在 chrome 下默认会将 12px 及以下的字体渲染为 12px，可以使用这两种方法：
+ 将字体换成图片
+ 将行级元素转成块级元素，使用`transform: scale(x)`改变大小，并且可以使用`transform-origin`调整缩放基准点
