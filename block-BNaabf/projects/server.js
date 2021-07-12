var http = require("http")

var server  =  http.createServer(handleRequest)
var qs = require("querystring")
var fs = require("fs")
function handleRequest(req,res) {
 var store= ""
 req.on("data" , (chunk)=> {
     store=store+chunk
 })

 req.on("end" , ()=> {
     if (req.url === "/form" && req.method === "GET")  {
         res.setHeader("Content-Type" , "text/html")
         fs.createReadStream("./form.html").pipe(res)
     }


     if (req.url === "/form" && req.method === "POST")  {
         var parsedData  =  qs.parse(store)
         res.setHeader("Content-Type" , "text/html")
         res.end(`<h2>${parsedData.name}</h2> <p>${parsedData.email}</p>`)
     }

 })
}


server.listen(5678 , ()=> {
    console.log("server listening to port 5678")
})