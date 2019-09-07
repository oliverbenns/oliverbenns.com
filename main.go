package main

import "os"
import "io/ioutil"
import "fmt"
import "strings"
import "text/template"
import "bytes"
import "gopkg.in/russross/blackfriday.v2"
import "github.com/gosimple/slug"
import "time"

type Document struct {
	Title       string
	Description string
	Url         string
	Content     string
}

func generateHtml(document Document) string {
	var err error
	t, err := template.ParseFiles("src/templates/layout.html")

	if err != nil {
		panic(err)
	}

	var tpl bytes.Buffer

	eerr := t.Execute(&tpl, document)

	if eerr != nil {
		panic(eerr)
	}

	html := tpl.String()

	// fmt.Print(html)

	return html
}

func createPages() {
	files, err := ioutil.ReadDir("src/pages")

	if err != nil {
		panic(err)
	}

	for _, file := range files {
		if !strings.Contains(file.Name(), ".html") || file.Name() == "index.html" {
			continue
		}

		source := fmt.Sprintf("src/pages/%s", file.Name())
		page, err := ioutil.ReadFile(source)

		if err != nil {
			panic(err)
		}

		title := fmt.Sprintf("Oliver Benns | %s", file.Name())
		document := Document{
			Title:       title,
			Description: "Lorem Ipsum",
			Url:         "https://oliverbenns.com",
			Content:     string(page),
		}

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

type Post struct {
	Title   string
	Date    string
	Slug    string
	Content []byte
}

func getPosts() []Post {
	var posts []Post

	files, err := ioutil.ReadDir("src/posts")

	if err != nil {
		panic(err)
	}

	for _, file := range files {
		if !strings.Contains(file.Name(), ".md") {
			continue
		}

		date := strings.Replace(file.Name(), ".md", "", -1)

		path := fmt.Sprintf("src/posts/%s", file.Name())
		data, eerr := ioutil.ReadFile(path)

		if eerr != nil {
			panic(eerr)
		}

		post := Post{
			Title:   "Unknown",
			Date:    date,
			Slug:    slug.Make("Get the title"),
			Content: blackfriday.Run(data, blackfriday.WithNoExtensions()),
		}

		fmt.Println(string(post.Content))

		posts = append(posts, post)
	}

	return posts
}

func createHome() {
	var eerr error
	t, eerr := template.ParseFiles("src/pages/index.html")
	posts := getPosts()

	if eerr != nil {
		panic(eerr)
	}

	var tpl bytes.Buffer

	eerr = t.Execute(&tpl, posts)

	hhtml := tpl.String()

	doc := Document{
		Title:       "Oliver Benns",
		Description: "Lorem Ipsum",
		Url:         "https://oliverbenns.com",
		Content:     hhtml,
	}

	html := generateHtml(doc)

	err := ioutil.WriteFile("dist/index.html", []byte(html), 0644)

	if err != nil {
		panic(err)
	}
}

func main() {
	start := time.Now()
	os.RemoveAll("dist")
	os.Mkdir("dist", 0755)

	createHome()
	// copyAssets()
	// createPages()

	elapsed := time.Since(start)
	fmt.Printf("Built in %s\n", elapsed)
}
