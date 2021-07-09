var http = require("http")

var server  = http.createServer(handleRequest)

function handleRequest(req,res) {

}



server.listen(3456 , ()=> {
    console.log("Listening to server at port 3456")
})