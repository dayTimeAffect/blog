### `href`与`scr`的区别

`href`：超文本引用英文的缩写，用于建立当前元素与引用资源的联系。在加载其引用资源时，不会停止对当前文档的处理即不会阻塞页面解析，比如link引入css等

`scr`：资源英文的缩写，它指向的资源会嵌入到当前元素所在的位置，所以scr指向的内容是页面的内容，因为浏览器在解析scr时会停止解析，直到对应资源下载或执行完毕。

所以对于css尽量使用`link`而不是`@import`，`script`放在文档最后。