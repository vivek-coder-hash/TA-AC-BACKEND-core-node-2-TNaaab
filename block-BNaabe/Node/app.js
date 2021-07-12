var http = require("http")
var qs = require("querystring")

var server  = http.createServer(handleRequest)

function handleRequest(req,res) {
   var store =""
   console.log(req.headers['content-type'])                // check type of data received
    req.on("data" , (chunk)=> {
       store= store +chunk
   })     //to capture event from client side of any type, use data event

   req.on("end" , ()=> {
     if (req.headers['content-type'] === "application/x-www-form-urlencoded")  {
        var formData  =  qs.parse(store)
        res.setHeader("Content-Type" , "text/html")
        res.end(`<h2>${formData.name} </h2>  <p>${formData.email}</p>`)
        //res.end(JSON.stringify(formData)) 
     } // capture data


     if (req.headers['content-type'] === "application/json") {
         //res.end(store)
         var jsonData  = JSON.parse(store)
         res.setHeader("Content-Type" , "text/html")
         res.end(`<h2>${jsonData.name} </h2>  <p>${jsonData.email}</p>`)
     }
   })
}



server.listen(9000 , ()=> {
    console.log("server listening to port 9000")
})


