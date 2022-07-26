var express=require('express');
var bodyParser=require('body-parser');
var router=require("./router");
var app=express();


//middleware configuration

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//associate router
router(app);

app.listen(7000);
console.log("Producthub service listening on port 7000");
