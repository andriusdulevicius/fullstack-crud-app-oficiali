# js3-Blog-crud-express-ejs

## ejs

- install ejs
- npm install ejs
- and register
- // register view engine
- app.set('view engine', 'ejs');
- pakeisti folder structure
- // nustatom render view home dir
- app.set('views', 'src/views');
- // atvaizduojam puslapi
- res.render('index');

## MONGO

1. npm i mongoose
1. include mongoose to index.js
1. config.js file with connect string
1. mongoose connect (deprication warning fixes)
1. start server after connect
1. mkdir models
1. post.js modle file
1. postSchema in post.js file
1. create model using post Schema
1. export import to index.js
1. use Post to get all posts and show them in blog page
