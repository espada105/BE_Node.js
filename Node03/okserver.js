const http = require("http");
const server = http.createServer((req,res)=>{
    res.setHeader("Content-Type","text/html");
    res.end("OKdasd");
})

server.listen("3000",()=> console.log("OK서버시작"));