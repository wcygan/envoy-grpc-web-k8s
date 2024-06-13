This application demonstrates how to connect a web application with a gRPC server via grpc-web protocol while deploying both on k8s.

```
grpcurl -plaintext -d '{"message": "hello"}' localhost:50050 pingserver.PingService/Ping
```