var http = require("http")

var server  = http.createServer(handleRequest)
// to parse data coming from FORM , we use queryString Module

var qs = require("querystring")

function handleRequest(req,res)  {
   // console.log(req.headers)
   //to capture event from client side of any type, use data event
   var store =""
   req.on("data" , (chunk)=> {
    store = store+chunk
   })
    // end event on server side
   req.on("end" , ()=> {
       if (req.method === "POST" && req.url === "/json") {
        console.log(store+ "storing")
        res.setHeader("Content-type" , "application/json")    
        res.end(store)  // store contain stringify data coming from POSTMAN
       }


       if (req.method === "POST" && req.url === "/form") {
           console.log(store)
            var formData =  qs.parse(store) // formData is parsed version of store
            res.end(JSON.stringify(formData))   // convert any object into stringify object
       }
   })
}


server.listen(7000 , ()=> {
    console.log("server is listening to server 7000") 
})