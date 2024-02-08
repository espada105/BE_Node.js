const http = require("http");
const url = require("url");

http
    .createServer((req,res)=>{
        const path = url.parse(req.url,true).pathname;
        res.setHeader("Content-Type","text/html");

        if(path === "/user") {
            res.end("[user name : AnalyserNode, age:30");
        } else if (path==="/feed"){
            res.end(`<ul>
            <li>pictre1</li>
            <li>pictre1</li>
            <li>pictre1</li>
            </ul>
            `);
        } else {
            res.statusCode = 404;
            res.end("404 page not found");
        }
    })
    .listen("3001",()=> console.log("Router Mk"))
