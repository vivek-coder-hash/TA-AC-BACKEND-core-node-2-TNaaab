var http = require("http")
const path = require("path")

var url = require("url")

var fs = require("fs")

var server = http.createServer(handleRequest)


function handleRequest(req,res) {
   
    fs.readFile("./readme.txt" , (err, content)=> {
        console.log(content.toString())
        res.end()
    })
}


server.listen(5000, ()=> {
    console.log("server listening on port 5000")
})