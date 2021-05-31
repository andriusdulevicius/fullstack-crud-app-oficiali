const express = require('express');
const app = express();
const path = require('path');

const PORT = 3000;

// const pageRoutes = require('routes/pageRoutes')

// register view engine
app.set('view engine', 'ejs');
// nustatom render view home dir
app.set('views', 'src/views');

// const blogData = require('./data/sampleBlog')
const blogDb = require('./data/blogDb')

// home page
app.get('/', function (req, res) {
  // paimti index.ejs faila is views direktorijos
  res.render('index', { 
    title: 'Home',
    page: 'home'
  });
});

// about page
app.get('/about', function (req, res) {
  res.render('about', {
    title: 'About us',
    page: 'about'
  });
});

// blog page
app.get('/blog', function (req, res) {
  res.render('blog', {
    title: "Our blog",
    page: 'blog',
    blogDb
  });
});

// contact page
app.get('/contact', function (req, res) {
  res.render('contact', {
    title: 'Contact us',
    page: 'contact'
  });
});

// create blog page /blog/create
// contact page
app.get('/blog/create', function (req, res) {
  res.render('createBlog', {
    title: 'Create new Post',
    page: 'createB'
  });
});


const staticPath = path.join(__dirname, 'static');
// statine direktorija, css, js, img ir kt statiniam failam
app.use(express.static(staticPath));




// blog api /api/blog gauti visu postus json pavidalu
app.get('/api/blog', (req, res) => {
  res.json(blogDb);
})


// 404 case - kai vartojas ivede psl kurio nera
app.use((req, res) => res.status(404).send('OOPs Page not found'));

app.listen(PORT);
