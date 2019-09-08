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
import "github.com/PuerkitoBio/goquery"

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
	Title       string
	Description string
	Date        string
	Slug        string
	Content     []byte
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

		html := blackfriday.Run(data, blackfriday.WithNoExtensions())
		reader := strings.NewReader(string(html))
		doc, _ := goquery.NewDocumentFromReader(reader)
		title := doc.Find("h1").First().Text()

		post := Post{
			Title:       title,
			Description: doc.Find("p").First().Text(),
			Date:        date,
			Slug:        slug.Make(title),
			Content:     html,
		}

		fmt.Printf("Title: %s\n", post.Title)
		fmt.Printf("Slug: %s\n", post.Slug)
		fmt.Printf("Description: %s\n\n", post.Description)

		posts = append(posts, post)
	}

	return posts
}

func createPosts() {
	posts := getPosts()

	for _, post := range posts {
		doc := Document{
			Title:       post.Title,
			Description: post.Title,
			Url:         "https://oliverbenns.com",
			Content:     string(post.Content),
		}

		html := generateHtml(doc)

		path := fmt.Sprintf("dist/%s/%s", post.Date, post.Slug)
		filePath := fmt.Sprintf("%s/index.html", path)

		err := os.MkdirAll(path, 0755)

		if err != nil {
			panic(err)
		}

		eerr := ioutil.WriteFile(filePath, []byte(html), 0644)

		if eerr != nil {
			panic(eerr)
		}
	}

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
	// createPosts()
	// copyAssets()
	// createPages()

	elapsed := time.Since(start)
	fmt.Printf("Built in %s\n", elapsed)
}
