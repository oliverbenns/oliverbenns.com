package main

import (
	"bytes"
	"fmt"
	"io/ioutil"
	"os"
	"strings"
	"sync"
	"text/template"
	"time"

	"github.com/PuerkitoBio/goquery"
	"github.com/gosimple/slug"
	"gopkg.in/russross/blackfriday.v2"
)

type Document struct {
	Title       string
	Description string
	Path        string
	Posts       []Post // @TODO: This shouldn't be here.
}

var staticPages = map[string]Document{
	"src/pages/index.tmpl": {
		Description: "Oliver Benns is a Software Engineer currently based in Norwich, United Kingdom.",
	},
	"src/pages/404.tmpl": {
		Title:       "Not Found",
		Description: "Page not found.",
	},
	"src/pages/posts.tmpl": {
		Title:       "Posts",
		Description: "A list of all blog posts.",
	},
	"src/pages/about.tmpl": {
		Title:       "About",
		Description: "Experience and skillset of Oliver Benns, a Software Engineer currently based in Norwich, United Kingdom.",
	},
	"src/pages/contact.tmpl": {
		Title:       "Contact",
		Description: "Ways to get in contact with Oliver Benns - through email or social media.",
	},
}

func createPages() {
	files, err := ioutil.ReadDir("src/pages")

	if err != nil {
		panic(err)
	}

	posts := getPosts()
	posts = reversePosts(posts)

	for _, file := range files {
		if !strings.Contains(file.Name(), ".tmpl") {
			continue
		}

		source := fmt.Sprintf("src/pages/%s", file.Name())

		t, _ := template.ParseFiles("src/templates/layout.tmpl", source)
		var tpl bytes.Buffer

		folderName := strings.Replace(file.Name(), ".tmpl", "", -1)

		doc := staticPages[source]
		doc.Posts = posts

		if file.Name() != "index.tmpl" {
			doc.Path = fmt.Sprintf("/%s", folderName)
		}

		t.Execute(&tpl, doc)

		var directory string

		if file.Name() == "index.tmpl" {
			directory = "dist"
		} else {
			directory = fmt.Sprintf("dist/%s", folderName)
		}

		os.MkdirAll(directory, 0755)

		destination := fmt.Sprintf("%s/index.html", directory)
		err = ioutil.WriteFile(destination, tpl.Bytes(), 0644)

		if err != nil {
			panic(err)
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
		err = ioutil.WriteFile(destination, data, 0644)

		if err != nil {
			panic(err)
		}
	}
}

type Post struct {
	Title       string
	Description string
	Date        string
	Path        string
	Content     string
}

func getPosts() (posts []Post) {
	files, err := ioutil.ReadDir("src/posts")

	if err != nil {
		panic(err)
	}

	for _, file := range files {
		if !strings.Contains(file.Name(), ".md") {
			continue
		}

		path := fmt.Sprintf("src/posts/%s", file.Name())
		data, err := ioutil.ReadFile(path)

		if err != nil {
			panic(err)
		}

		post := parsePost(file, data)

		posts = append(posts, post)
	}

	return posts
}

func parsePost(file os.FileInfo, data []byte) Post {
	date := strings.Replace(file.Name(), ".md", "", -1)

	html := blackfriday.Run(data)
	reader := bytes.NewReader(html)
	doc, _ := goquery.NewDocumentFromReader(reader)
	title := doc.Find("h1").First().Remove().Text()
	formattedHtml, _ := doc.Html()

	return Post{
		Title:       title,
		Description: doc.Find("p").First().Text(),
		Date:        date,
		Path:        fmt.Sprintf("/posts/%s", slug.Make(title)),
		Content:     formattedHtml,
	}
}

func reversePosts(posts []Post) []Post {
	first := 0
	last := len(posts) - 1
	for first < last {
		posts[first], posts[last] = posts[last], posts[first]
		first++
		last--
	}

	return posts
}

func createPosts() {
	posts := getPosts()
	t, _ := template.ParseFiles("src/templates/layout.tmpl", "src/templates/post.tmpl")

	for _, post := range posts {
		var tpl bytes.Buffer

		type Date struct {
			Label string
			Value string
		}

		type Document struct {
			Title       string
			Description string
			Path        string
			Date        Date
			Content     string
		}

		date, err := time.Parse("2006-01-02", post.Date)

		if err != nil {
			panic(err)
		}

		doc := Document{
			Title:       post.Title,
			Description: post.Description,
			Path:        post.Path,
			Date: Date{
				Label: date.Format("2 January 2006"),
				Value: post.Date,
			},
			Content: post.Content,
		}

		t.Execute(&tpl, doc)

		path := fmt.Sprintf("dist%s", post.Path)
		filePath := fmt.Sprintf("%s/index.html", path)

		err = os.MkdirAll(path, 0755)

		if err != nil {
			panic(err)
		}

		err = ioutil.WriteFile(filePath, tpl.Bytes(), 0644)

		if err != nil {
			panic(err)
		}
	}
}

func worker(wg *sync.WaitGroup, task func()) {
	task()
	wg.Done()
}

func main() {
	start := time.Now()
	os.RemoveAll("dist")
	os.Mkdir("dist", 0755)

	var wg sync.WaitGroup

	wg.Add(3)

	go worker(&wg, createPosts)
	go worker(&wg, createPages)
	go worker(&wg, copyAssets)

	wg.Wait()

	elapsed := time.Since(start)
	fmt.Printf("Built in %s\n", elapsed)
}
