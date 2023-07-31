### WebSocket和HTTP区别
+ WebSocket 协议名是ws://，可双端发起请求
+ WebSocket 没有跨域限制
+ 通过send和onmessage通讯（HTTP通过request和respones）

#### 其他
+ ws 可升级为wss（像https）
+ WebSocket连接是先发起一个HTTP请求，成功之后再升级到WebSocket协议（状态码101），再通讯