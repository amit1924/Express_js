const express = require('express');
const path = require('path');
const app = express()
const port = 3000

// const amitMiddleware = (req, res, next) => {
//     console.log(req)
// next()
// }

app.use(express.static(path.join(__dirname ,'public'))) // this is a middleware,it has request and response object    

// app.use(amitMiddleware)

app.get('/hello/:name', (req, res,) => {
    res.send("hello world " + req.params.name) //res.send is used to send any file content from server

})

app.get('/about', (req, res,)=>{
    res.sendFile(path.join(__dirname , 'index.html'))
    res.json({Name:'Amit', Email:'amit@json.com',})

})

app.listen(port, () => {
    console.log(`Server listening on`, port)
})