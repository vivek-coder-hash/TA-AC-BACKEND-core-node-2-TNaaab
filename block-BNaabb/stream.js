var http = require("http")

var server  = http.createServer(handleRequest)

function handleRequest(req,res) {
   var store =""
    req.on("data" , (chunk)=> {
      store = store+chunk
  }) // capture data in store variable coming from POSTMAN

  req.on("end" , ()=> {
   res.write(store)       //send captured data in response using `res.write`
   
   res.end()
  })   // this event fire to make sure that all data is received.
}



server.listen(3456 , ()=> {
    console.log("Listening to server at port 3456")
})