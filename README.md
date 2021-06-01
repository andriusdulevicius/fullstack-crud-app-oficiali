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

- npm i mongoose
- include mongoose to index.js
- config.js file with connect string
- mongoose connect (deprication warning fixes)
- start server after connect
- mkdir models
- post.js modle file
- postSchema in post.js file
- create model using post Schema
- export import to index.js
- use Post to get all posts and show them in blog page
