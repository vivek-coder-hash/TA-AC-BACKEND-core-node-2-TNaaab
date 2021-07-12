var http = require("http")

var server  = http.createServer(handleRequest)

function handleRequest(req,res)  {
    var dataFormat=req.headers['content-type'] // using dataFormat , you can know what type of data you are getting from client side.
    var store  =""
    req.on("data" , (chunk)=> {
        store = store +chunk
    })

    req.on("end" , ()=> {
        console.log(store)
    })
}


server.listen(7000 , ()=> {
    console.log("server is listening to server 7000") 
})