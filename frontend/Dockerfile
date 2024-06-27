# First stage: Build the Protobuf files using Buf
FROM bufbuild/buf:latest as bufbuild
WORKDIR /app
COPY buf.gen.yaml ./
COPY proto ./proto
RUN buf generate proto

# Second stage: Build the React application
FROM node:16 as build
WORKDIR /app/frontend
COPY frontend/package.json frontend/package-lock.json ./
RUN npm install
COPY frontend ./
COPY --from=bufbuild /app/frontend/src/generated ./src/generated
RUN npm run build

# Final stage: Create the runtime image
FROM nginx:alpine
COPY --from=build /app/frontend/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]