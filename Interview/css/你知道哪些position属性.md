### 你知道哪些position属性值

**相对定位relative**

>相对于他原本的位置进行定位，不脱离文档流

**绝对定位absolute**

> 相对于**static定位以外**的**最邻近父级元素**进行偏移定位，即相对于其直接父级元素，脱离文档流

**固定定位fixed**

> 相对于**浏览器窗口**进行定位

**默认定位Static**

> 没用定位，元素处于正常的文档流中

**继承定位inherit**

> 继承父元素定位

**粘性定位sticky**

> 它的表现类似`position:relative`和`position:fixed`的合体，在目标区域在屏幕中可见时，它的行为就像`position:relative;` 而当页面滚动超出目标区域时，它的表现就像`position:fixed`，它会固定在目标位置。