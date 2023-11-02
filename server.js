

const http=require('http')

const {create,read,updateFun,del}=require('./newModule.js');

const server= http.createServer(function(req,res){

    console.log(req.method,req.url);
    res.write("Request looks good");

    if(req.url=="/create" && req.method=='POST'){
        res.write(JSON.stringify(create(10)))
    } else if(req.url=='/read'&& req.method=='GET'){
        res.write(JSON.stringify(read()));
    }  else  if(req.url=='/updateFun'&& req.method==''){
        res.write(JSON.stringify(updateFun(0,100)))
    }else if(req.url=='/del'){
        res.write(JSON.stringify(del(0)))
    }
    res.end();
})



    




server.listen(5888, function(){
console.log("server running on port 5888!");

    
});