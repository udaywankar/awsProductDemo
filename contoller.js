var fs=require('fs');
var path="./products.json";
//callback functions
exports.getAll=function(req, res){
   
    fs.readFile(path, (err, data)=>{
        if(data){
            var products=JSON.parse(data);
            res.send(products);
        }
        else{
            res.send("data not available")
        }
    })
};

exports.getById=function(req, res){

    var producdId=req.params.id;
    var path="./products.json";
    fs.readFile(path, (err, data)=>{
        if(data){

            var products=JSON.parse(data);
            var product=products.find((p=>(p.id ==producdId)))
            res.send(product);
        }
        else{
            res.send("data not available")
        }
    })

};

exports.insert=function(req, res){
    var path="./products.json";
    fs.readFile(path, (err, data)=>{
        
        if(data){
           
            var products=JSON.parse(data);
            console.log(products);
            console.log("Stringify");
            var newProduct=JSON.parse(JSON.stringify(req.body));
            console.log(newProduct);
            products.push(newProduct);
            console.log("After push");
            console.log(products);
            var Str=JSON.stringify(products);
            fs.writeFile(path,Str,(err)=>{
                if(err){
                    res.send("file IO problem")
                }
                else
                res.send("new product inserted into collection.")
            } )
            
        }
        else{
            res.send("data not available")
        }
    })
};

exports.update=function(req, res){
    var producdId=req.params.id;
    console.log("In Udadate");
    var path="./products.json";
    fs.readFile(path, (err, data)=>{
        
        if(data){
           
            var products=JSON.parse(data);
            console.log(products);
            console.log("Stringify");
            var newProduct=JSON.parse(JSON.stringify(req.body));
            console.log(newProduct);
            products.push(newProduct);

            // products.filter((v)=>{
            //     if(v.id===newProduct.id){
            //         v.title=newProduct.title;
            //         v.description=newProduct.description;
            //     }
            // });
            var msg="Not Found"
            for(var i = 0; i < products.length; i++) {
                if(products[i].id == producdId) {
                    products[i].title=newProduct.title;
                    products[i].description=newProduct.description;
                    msg="updated"
                }
            }


            console.log("After update");
            console.log(products);
            var Str=JSON.stringify(products);
            fs.writeFile(path,Str,(err)=>{
                if(err){
                    console.log("file IO problem");
                    res.send("file IO problem")
                }
                else
                     res.send("new product inserted into collection.")
            } )
            
        }
        else{
            res.send("data not available")
        }
    })
};


exports.delete=function(req, res){
    var producdId=req.params.id;
    var path="./products.json";
    fs.readFile(path, (err, data)=>{
        if(data){

            var products=JSON.parse(data);
            var msg="Not Found"
            for(var i = 0; i < products.length; i++) {
                if(products[i].id == producdId) {
                    products.splice(i, 1);
                    msg="deleted"
                }
            }
            console.log("After push");
            console.log(products);
            var Str=JSON.stringify(products);
            fs.writeFile(path,Str,(err)=>{
                if(err){
                    res.send("file IO problem")
                }
                else
                res.send(msg)
            } )
           
        }
        else{
            res.send("data not available")
        }
    })
};

