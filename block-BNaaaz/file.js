var http = require("http")
const path = require("path")

var url = require("url")

var fs = require("fs")

var server = http.createServer(handleRequest)


function handleRequest(req,res) {
   res.setHeader("content-Type" , "text/plain")
   fs.createReadStream("./readme.txt").pipe(res)
}


server.listen(5000, ()=> {
    console.log("server listening on port 5000")
})