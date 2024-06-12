.PHONY: build server

run: build server

build:
	go run cmd/build/main.go
server:
	go run cmd/server/main.go
