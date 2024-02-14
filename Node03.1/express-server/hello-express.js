const express = require("express"); //모듈 불러옴
const app = express(); // express 초기화후 app에 할당

const port = 3000 

app.get("/",(req,res)=>{    // "/"으로 요청이 오면 실행된다
    res.set({"content-Type": "text/html; charset=utf-8"});  //헤더값을 설정. 반환할 콘텐츠의 정보를 설정. 결과타입이 html, 결과에 한글이 있어서 utf-9로 설정함
    res.end("hello express 페이지 입니다");
});

app.listen(port,()=>{       // listen()으로 클라이언트의 요청을 기다림
    console.log(`START SERVER: use ${port}`);
})

app.get("/login",(req,res)=>{
    res.set({"content-Type": "text/html; charset=utf-8"});
    res.end("login 입니다")
})