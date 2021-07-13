var http = require("http")
var fs = require("fs")
var server = http.createServer(handleRequest)
var userPath  = __dirname +"/users/"
var url = require("url")

function handleRequest(req,res) {
    var parsedUrl = url.parse(req.url , true)
 var store = ""    //store is stringify Json data ,we need to parse it
 req.on("data" , (chunk)=> {
     store=store+chunk
 })

 req.on("end" ,()=> {
     //handle all routes here

     if (req.url === "/users" && req.method === "POST")  {
       var username = JSON.parse(store).username  //   JSON.parse(store) is object
       fs.open(userPath+username+".json" , "wx" , (err,fd) => {
          if(err) return console.log(err)

         // console.log(fd)
         fs.writeFile(fd ,store, (err)=> {
             if (err) return console.log(err)
             fs.close(fd , ()=> {
                 res.end(`${username} created successfully`)
             })
         })

       })  //wx is flag ,make sure that file is not already present there. fd is file descriptor , pointer to file which is already created . fd is integer.

     }  // Create operation


     if (req.method === "GET" && parsedUrl.pathname === "/users") {
        //console.log(parsedUrl)
        var username = parsedUrl.query.username
        fs.readFile(userPath+username+".json" , (err,content)=> {
            if (err) return console.log(err)
            res.setHeader("Content-Type" , "application/json") 
            res.end(content)
            
        })

     } //Read file


     if(req.method=== "PUT" && parsedUrl.pathname=== "/users") {
        var username = parsedUrl.query.username
        fs.open(userPath+username+".json" , "r+" , (err, fd) => {
            if (err) return console.log(err)
            fs.ftruncate(fd,(err)=> {
                if (err) return console.log(err)
                fs.writeFile(fd,store,(err)=> {
                    if(err) return console.log(err)
                  fs.close(fd,()=> {
                      res.end(`${username} updated sucessfully`)
                  })
                })
            })
        })
     } //UPdate file


     if (req.method === "DELETE" && parsedUrl.pathname === "/users")  {
         var username = parsedUrl.query.username
         fs.unlink(userPath+username+".json" , (err)=> {
             if (err) return console.log(err)
             res.end(`${username} deleted sucessfully`)
         })
     } // Delete file

 })
}


server.listen(3000 , ()=> {
    console.log("server listening to port 3000")
})