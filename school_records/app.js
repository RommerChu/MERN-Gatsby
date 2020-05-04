const express  = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')


const app = express()

app.use(bodyParser.json())
app.use((require,response,next)=>{
    response.setHeader('Access-Control-Allow-Origin','*')
    response.setHeader('Access-Control-Allow-Headers','Origin, Content-Type , Accept')
    response.setHeader('Access-Control-Allow-Methods','GET, POST, PATCH, DELETE')
    next();
})

mongoose.connect("mongodb+srv://abc123:abc12345@abc-school-yygyf.mongodb.net/test?retryWrites=true&w=majority",{useNewUrlParser:true, useUnifiedTopology: true})
.then(()=>{
    app.listen(5000)
    console.log("Connected successfully")
}).catch(()=>{
    console.log("Failed connection to mongoDb")
})