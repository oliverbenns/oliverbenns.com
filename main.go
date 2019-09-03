package main

import "os"
import "io/ioutil"
import "fmt"
import "strings"

type Document struct {
	title string
	description string
	data string
}

func generateHtml(document Document) string {
	template, err := ioutil.ReadFile("src/templates/layout.html")

	if err != nil {
		panic(err)
	}

	html := string(template)
	html = strings.Replace(html, "{{title}}", document.title, -1)
	html = strings.Replace(html, "{{description}}", document.description, -1)
	html = strings.Replace(html, "{{url}}", "https://oliverbenns.com", -1)
	html = strings.Replace(html, "{{content}}", document.data, -1)

 	fmt.Print(html)
 	return html
}

func createPages() {
	files, err := ioutil.ReadDir("src/pages")

	if err != nil {
		panic(err)
	}

	for _, file := range files {
		if !strings.Contains(file.Name(), ".html") {
			return
		}

		source := fmt.Sprintf("src/pages/%s", file.Name())
		page, err := ioutil.ReadFile(source)

		if err != nil {
			panic(err)
		}

		title := fmt.Sprintf("Oliver Benns | %s", file.Name())
		document := Document {title: title, description: "Lorem Ipsum", data: string(page)}

		fmt.Println(file.Name())
		html := generateHtml(document)

		folderName := strings.Replace(file.Name(), ".html", "", -1)
		directory := fmt.Sprintf("dist/%s", folderName)
		os.MkdirAll(directory, 0755)

		destination := fmt.Sprintf("%s/index.html", directory)
		saveErr := ioutil.WriteFile(destination, []byte(html), 0644)

		if saveErr != nil {
			panic(saveErr)
		}
	}
}

func copyAssets() {
	os.MkdirAll("dist/assets", 0755)

	files, err := ioutil.ReadDir("src/assets")

	if err != nil {
		panic(err)
	}

	for _, file := range files {
		source := fmt.Sprintf("src/assets/%s", file.Name())
		data, err := ioutil.ReadFile(source)

		if err != nil {
			panic(err)
		}

		destination := fmt.Sprintf("dist/assets/%s", file.Name())
		saveErr := ioutil.WriteFile(destination, data, 0644)

		if saveErr != nil {
			panic(saveErr)
		}
	}
}

func createHome() {
	doc := Document {title: "Oliver Benns", description: "Lorem Ipsum", data: "<p>A bunch of links to each blog post would appear here.</p>"}

	html := generateHtml(doc)

	err := ioutil.WriteFile("dist/index.html", []byte(html), 0644)

	if err != nil {
		panic(err)
	}
}

func main() {
	os.RemoveAll("dist")
	os.Mkdir("dist", 0755)

	createHome()
	copyAssets()
	createPages()
}
