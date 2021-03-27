var http = require('http');
var url = require('url');
var cal = require('./cal.js');
var fs = require('fs');

http.createServer(function (request, response){
    response.writeHead(200, {'Content-Type':'text/html'});
    // var tong = cal.tinhTong(30,100);
    // response.end("Hello  world duyen xinh " + tong);
    var url = request.url;
    if(url == '/'){
        fs.readFile('index.html', function(error, data){
            if(error == null){
                response.write(data);
                response.end();
            }
            else{
                response.end(error);
            }
        });
    }else if(url=='/insert'){
        fs.writeFile('test.txt','Ghi vào file' ,function (error){
            if(error == null){
                response.end("Ghi thanh cong");
            }else{
                response.end(error);
            }
        });

    }else if(url=='/append'){
        fs.appendFile('test.txt','\n ghi vào file lan2' ,function (error){
            if(error == null){
                response.end("Them thanh cong");
            }else{
                response.end(error);
            }
        });
    }else if(url=='/unlink'){
        fs.unlink('test.txt',function (error){
            if(error == null){
                response.end("Xoa thanh cong");
            }else{
                response.end(error);
            }
        });
    }else if(url=='/rename'){
        fs.rename('test.txt','test1.txt' ,function (error){
            if(error == null){
                response.end("rename thanh cong");
            }else{
                response.end(error);
            }
        });
    }else{
        response.end("404 not found");
    }
    
}).listen(8080);