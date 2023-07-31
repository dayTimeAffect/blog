### HTTP协议1.0、1.1、2.0有什么区别？
+ http 1.0
> 最基础的HTTP协议，支持基本的GET、POST请求
+ http 1.1
> 缓存策略 cache-control E-tag等；支持长链接 Connection:keep-alive,一次TCP连接多次请求；断点续传，状态码206；支持PUT、DELETE等新的方法，可用于Restful API
+ http 2.0
> 可压缩header，减少体积；多路复用，一次TCP连接中可以多个HTTP并行请求；服务端推送；
