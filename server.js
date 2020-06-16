const express=require("express");
const bodyParser=require("body-parser");
//const request=require("request");

const app=express();
app.use(express.static("public"));
app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
})
app.use(bodyParser.urlencoded({extended:true}));


var port_number=app.listen(process.env.PORT || 3000);
app.listen(port_number,function(){
  console.log("Server started");
})
