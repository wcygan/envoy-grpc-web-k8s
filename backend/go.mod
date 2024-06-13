module github.com/wcygan/envoy-grpc-web-k8s/backend

go 1.21.6

require (
	github.com/wcygan/envoy-grpc-web-k8s/generated/go v0.0.0
	google.golang.org/grpc v1.64.0
)

require (
	golang.org/x/net v0.22.0 // indirect
	golang.org/x/sys v0.18.0 // indirect
	golang.org/x/text v0.14.0 // indirect
	google.golang.org/genproto/googleapis/rpc v0.0.0-20240318140521-94a12d6c2237 // indirect
	google.golang.org/protobuf v1.34.2 // indirect
)

replace github.com/wcygan/envoy-grpc-web-k8s/generated/go => ../generated/go

// require (
// 	github.com/wcygan/envoy-grpc-web-k8s/generated/go v0.0.0
// )

// replace github.com/wcygan/envoy-grpc-web-k8s/generated/go => ../generated/go
