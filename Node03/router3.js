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
            notFound(req,res)
        }
    })
    .listen("3001",()=> console.log("http://localhost:3001/"))


    // 리팩터링
const user = (req,res)=>{
    const userInfo = url.parse(req.url, true).query;
    res.end(`[user name : ${userInfo.name}, age:${userInfo.age}`);
}


const feed = (req,res) =>{
    res.feed(`<ul>
    <li>pictre1</li>
    <li>pictre1</li>
    <li>pictre1</li>
    </ul>
    `);
}

const notFound = (req,res)=>{
    res.statusCode = 404;
    res.end("404 page not found")
}