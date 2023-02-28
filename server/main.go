package main

import (
	"embed"
	"fmt"
	"io/fs"
	"net/http"
)

//go:embed dist
var files embed.FS

func getFileSystem() http.FileSystem {
	fsys, err := fs.Sub(files, "dist")
	if err != nil {
		panic(err)
	}
	return http.FS(fsys)
}

func main() {
	
	port := ":8080"
	
	http.Handle("/", http.FileServer(getFileSystem()))
	
	fmt.Printf("Starting server on port %s\n", port)
	
	err := http.ListenAndServe(port, nil)

	if err != nil {
		fmt.Printf("Server failed to start: %v\n", err)
	}
}
