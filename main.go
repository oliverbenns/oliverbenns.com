package main

import "io/ioutil"
import "fmt"
import "strings"

func main() {
	template, err := ioutil.ReadFile("src/templates/layout.html")
	if err != nil {
		panic(err)
	}
	
	aboutPage, _err := ioutil.ReadFile("src/pages/about.html")

	if _err != nil {
		panic(err)
	}
	
	html := strings.Replace(string(template), "{{content}}", string(aboutPage), -1)
	
 	fmt.Print(html)

	// Read template file
	// read about/home/contact pages
	// string replace 
	// save to dist folder
}
