import {createGrpcWebTransport} from "@bufbuild/connect-web";
import {createPromiseClient} from "@bufbuild/connect";
import {PingService} from "./generated/ping/v1/ping_connectweb";

const grpcWebTransport = createGrpcWebTransport({
    baseUrl: "http://127.0.0.1:8080",
});

const pingClient = createPromiseClient(PingService, grpcWebTransport);

export default pingClient;