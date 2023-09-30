const express = require("express");
const app = express();
const nunjucks = require("nunjucks");

app.use(express.json());
app.use(express.urlencoded({extended:true}));

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.get("/",(req,res)=>{
    res.render("home.html");
})

app.post("/image",(req,res)=>{
    let {url} = req.body;
    let image = `https://i.ytimg.com/vi/${url.substring(32,43)}/maxresdefault.jpg`
    res.json({url:image});
})

app.listen(5000,()=>console.log("sever_start"));