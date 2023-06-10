const express = require('express');
const exphbs = require("express-handlebars");
// const handlebars = require('handlebars');
// const engine = require('engine-handlebars')(handlebars);

const hbs = exphbs.create({ /* config */ });

const path = require('path');
const app = express()
const port = 3000

app.engine('handlebars', hbs.engine);

app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname ,'static'))) // this is a middleware,it has request and response object    

 app.use('/', require(path.join(__dirname , 'routes/blog.js') ))

app.listen(port, () => {
    console.log(`Server listening on`, port)
})