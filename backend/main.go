package main

import (
	"context"
	pb "github.com/wcygan/envoy-grpc-web-k8s/generated/go/ping/v1"
	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
	"log"
	"net"
)

func main() {
	s := grpc.NewServer()
	reflection.Register(s)
	pb.RegisterPingServiceServer(s, &pingServer{})
	log.Printf("reflection is enabled")

	lis, err := net.Listen("tcp", ":50050")
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	log.Printf("yap-api is listening on %s", lis.Addr().String())

	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}

type pingServer struct {
	pb.UnimplementedPingServiceServer
}

func (s *pingServer) Ping(ctx context.Context, req *pb.PingRequest) (*pb.PingResponse, error) {
	log.Printf("Received ping with message: %s", req.GetMessage())
	return &pb.PingResponse{Message: "pong"}, nil
}
