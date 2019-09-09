package main

import "fmt"
import "net/http"

const port = 3000

// For development purposes only.
func main() {
	dir := http.Dir("dist")
	fileServer := http.FileServer(dir)
	http.Handle("/", fileServer)

	fmt.Printf("Listening on port %d\n", port)

	address := fmt.Sprintf("localhost:%d", port)
	http.ListenAndServe(address, nil)
}
