const express = require('express')
let app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }))

app.get("/", (req,res)=>{
    res.sendFile(__dirname + '/public/index.html')
})

app.listen("3000", ()=>{
    console.log("http://127.0.0.1:3000")
})