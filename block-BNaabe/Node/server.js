/*var path = require("path")

console.log(__filename)  // Absolute path of current file

console.log(__dirname+"/app.js") // Absolute path of app.js , where __dirname give absolute path of root directory which is NODE forlder in this case.

console.log("./index.html")  // Realtive path of index.html


var indexPath =path.join(__dirname , "index.html")  //get absolute path of index.html using path module

console.log(indexPath)*/


/*var http = require("http")
var qs = require("querystring")

var server = http.createServer(handleRequest)

function handleRequest(req,res) {
    if (req.method === "POST" && req.url === "/") {
       var store= ""
        req.on("data" , (chunk)=> {
            store= store +chunk
        })

        req.on("end" , ()=> {
            res.statusCode =210
            res.end(store)

           var formData =  qs.parse(store) // formData is parsed version of store
            res.end(JSON.stringify(formData))   // convert any object into stringify object
            console.log(JSON.stringify(formData.captain))
        })    // when end event fires, send entire captured data in response with status code 201.
    }
}


server.listen(3000 , ()=> {
 console.log("Listening to port 3000")
})*/





