### HTTP握手过程
+ 客户端首先发送将 TCP报文标志位SYN置为1，随机产生一个序号值seq的数据包给服务端
  > SYN = 1,seq = client_isn
+ 服务端收到后，回传一个SYN/ACK标志为1的数据包给客户端
  > SYN = 1, ACK = 1, ack = client_isn + 1, seq = server_isn
+ 最后，客户端再回传一个带ACK标志的数据包，代表握手结束
  > ACK = 1, ack = server_isn + 1, seq = client_isn + 1