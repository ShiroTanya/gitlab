var express = require("express")
var app = express()
var controller = require(__dirname + "/apps/controllers")
app.use(controller)

var server = app.listen(3000, function(){
    console.log("server dang chay");
})


app.set("views", __dirname + "/apps/views");
app.set("views enginge", "ejs");
app.use("/public", express.static(__dirname + "/public"))


// let port = process.env.PORT || 8080;


// app.listen(port, () => {
//     console.log("Backend Nodejs is running from the port:" + port)
// });