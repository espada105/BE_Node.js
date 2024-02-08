const http = require("http");
const url = require("url");

http
    .createServer((req,res)=>{
        const path = url.parse(req.url,true).pathname;
        res.setHeader("Content-Type","text/html");

        if(path === "/user") {
            user(req, res);
        } else if (path==="/feed"){
            feed(req,res);
        } else {
            res.statusCode = 404;
            res.end("404 page not found");
        }
    })
    .listen("3001",()=> console.log("Router Mk"))


    // 리팩터링
const user = (req,res)=>{
    res.end("[user name : AnalyserNode, age:30");
}


const feed = (req,res) =>{
    res.feed(`<ul>
    <li>pictre1</li>
    <li>pictre1</li>
    <li>pictre1</li>
    </ul>
    `);
}