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

		t, _ := template.ParseFiles("src/templates/layout.html", source)
		var tpl bytes.Buffer

		folderName := strings.Replace(file.Name(), ".html", "", -1)

		type PageDocument struct {
			Path string
		}

		doc := PageDocument{
			Path: fmt.Sprintf("/%s", folderName),
		}

		t.Execute(&tpl, doc)

		fmt.Println(file.Name())

		directory := fmt.Sprintf("dist/%s", folderName)
		os.MkdirAll(directory, 0755)

		destination := fmt.Sprintf("%s/index.html", directory)
		saveErr := ioutil.WriteFile(destination, tpl.Bytes(), 0644)

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
	Path        string
	Content     []byte
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

		date := strings.Replace(file.Name(), ".md", "", -1)

		path := fmt.Sprintf("src/posts/%s", file.Name())
		data, eerr := ioutil.ReadFile(path)

		if eerr != nil {
			panic(eerr)
		}

		html := blackfriday.Run(data)
		reader := strings.NewReader(string(html))
		doc, _ := goquery.NewDocumentFromReader(reader)
		title := doc.Find("h1").First().Text()

		post := Post{
			Title:       title,
			Description: doc.Find("p").First().Text(),
			Date:        date,
			Path:        fmt.Sprintf("/posts/%s", slug.Make(title)),
			Content:     html,
		}

		fmt.Printf("Title: %s\n", post.Title)
		fmt.Printf("Path: %s\n", post.Path)
		fmt.Printf("Description: %s\n\n", post.Description)

		posts = append(posts, post)
	}

	return posts
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
	t, _ := template.ParseFiles("src/templates/layout.html", "src/templates/post.html")

	for _, post := range posts {
		var tpl bytes.Buffer

		type Document struct {
			Title       string
			Description string
			Path        string
			Content     string
		}

		doc := Document{
			Title:       post.Title,
			Description: post.Description,
			Path:        post.Path,
			Content:     string(post.Content),
		}

		t.Execute(&tpl, doc)

		path := fmt.Sprintf("dist%s", post.Path)
		filePath := fmt.Sprintf("%s/index.html", path)

		err := os.MkdirAll(path, 0755)

		if err != nil {
			panic(err)
		}

		eerr := ioutil.WriteFile(filePath, tpl.Bytes(), 0644)

		if eerr != nil {
			panic(eerr)
		}
	}
}

func createHome() {
	var eerr error
	t, eerr := template.ParseFiles("src/templates/layout.html", "src/pages/index.html")
	posts := getPosts()
	posts = reversePosts(posts)

	if eerr != nil {
		panic(eerr)
	}

	var tpl bytes.Buffer

	type HDocument struct {
		Path  string
		Posts []Post
	}

	doc := HDocument{
		Path:  "",
		Posts: posts,
	}

	eerr = t.Execute(&tpl, doc)

	err := ioutil.WriteFile("dist/index.html", tpl.Bytes(), 0644)

	if err != nil {
		panic(err)
	}
}

func main() {
	start := time.Now()
	os.RemoveAll("dist")
	os.Mkdir("dist", 0755)

	createHome()
	createPosts()
	copyAssets()
	createPages()

	elapsed := time.Since(start)
	fmt.Printf("Built in %s\n", elapsed)
}
